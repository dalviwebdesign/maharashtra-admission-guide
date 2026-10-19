import { Course } from '../types/admission';
import { casteCategoriesMetadata } from '../data/reservations';

export interface EligibilityInput {
  courseId: string;
  category: string; // 'Open' | 'General' | 'SC' | 'ST' | 'VJ/DT-NT(A)' | 'NT(B)' | 'NT(C)' | 'NT(D)' | 'OBC' | 'SBC' | 'SEBC' | 'EWS' | 'PWD';
  candidatureType: string; // 'Maharashtra State' | 'All India' | 'JK Migrant' | 'NRI/OCI';
  qualification: string;
  hasMandatorySubjects?: boolean;
  percentageMarks: number;
  entranceExamTaken: string;
  entranceScorePositive: boolean; // non-zero / positive score
  // Category & Caste document verification flags
  hasCasteCertificate?: boolean;
  hasCasteValidity?: boolean;
  hasNonCreamyLayer?: boolean;
  hasEwsCertificate?: boolean;
  hasPwdCertificate?: boolean;
  // Special course questions
  hasRegisteredPharmacist?: boolean; // for B.Pharm Practice
  yearsPharmacyExperience?: number; // for B.Pharm Practice
  hasWorkingProExperience?: boolean; // for working professionals
  isWithin50Km?: boolean; // for working professionals
}

export interface RuleEvaluationResult {
  ruleName: string;
  status: 'PASS' | 'FAIL' | 'WARNING' | 'PENDING';
  message: string;
  brochureSource: string;
}

export interface EligibilityResult {
  verdict: 'POTENTIALLY_ELIGIBLE' | 'NOT_ELIGIBLE' | 'MORE_INFO_REQUIRED';
  headline: string;
  badgeClass: string;
  summary: string;
  roundedPercentage: number;
  evaluations: RuleEvaluationResult[];
  recommendations: string[];
  brochureReference: string;
}

/**
 * Implements the official brochure rounding-off rule from Section 8(3)(a):
 * "The percentage of marks shall be calculated by rounding off to nearest integer.
 * i.e. if the percentage of marks comes out to be 44.50% to 44.99% then it shall be rounded to 45%
 * and if 44.01% to 44.49% shall be rounded to 44% for deciding the eligibility."
 */
export function applyBrochureRounding(percentage: number): number {
  if (isNaN(percentage)) return 0;
  const intPart = Math.floor(percentage);
  const fracPart = percentage - intPart;
  if (fracPart >= 0.50) {
    return intPart + 1;
  }
  return intPart;
}

export function evaluateEligibility(input: EligibilityInput, course: Course): EligibilityResult {
  const evaluations: RuleEvaluationResult[] = [];
  const recommendations: string[] = [];
  let failCount = 0;
  let pendingCount = 0;

  const isMS = input.candidatureType === 'Maharashtra State';
  const catKey = input.category === 'General' ? 'Open' : input.category;
  const catMeta = casteCategoriesMetadata[catKey] || casteCategoriesMetadata['Open'];
  const isReserved = catKey !== 'Open';

  // Determine if course itself excludes reservations (e.g. PG Lateral Entry Rule 10(2)(ii)(i))
  const isPgLateralEntry = course.entryType === 'Direct Second Year' && course.level === 'PG';

  // Determine whether candidate holds required caste / category certificates
  let certificatesValid = true;
  let certificateFailureReason = '';

  if (isMS && isReserved && !isPgLateralEntry) {
    if (catKey === 'SC' || catKey === 'ST') {
      if (input.hasCasteValidity === false) {
        certificatesValid = false;
        certificateFailureReason = `Caste / Tribe Validity Certificate is missing or rejected.`;
      }
    } else if (['VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC'].includes(catKey)) {
      if (input.hasCasteValidity === false) {
        certificatesValid = false;
        certificateFailureReason = `Caste Validity Certificate is missing or rejected.`;
      } else if (input.hasNonCreamyLayer === false) {
        certificatesValid = false;
        certificateFailureReason = `Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027 is missing.`;
      }
    } else if (catKey === 'EWS') {
      if (input.hasEwsCertificate === false) {
        certificatesValid = false;
        certificateFailureReason = `EWS Eligibility Certificate in Proforma - V (2026-27) is missing.`;
      }
    } else if (catKey === 'PWD') {
      if (input.hasPwdCertificate === false) {
        certificatesValid = false;
        certificateFailureReason = `Disability Certificate (min 40% permanent disability) is missing.`;
      }
    }
  }

  // Determine if reserved marks relaxation applies:
  // Must be Maharashtra State candidate + Reserved category + certificates valid + course supports reservations
  const canClaimRelaxation = isMS && isReserved && certificatesValid && !isPgLateralEntry;

  const criteria = isMS ? course.eligibility.maharashtraState : course.eligibility.allIndia;
  const minRequiredMarks = canClaimRelaxation ? criteria.minMarksReserved : criteria.minMarksGeneral;
  const roundedMarks = applyBrochureRounding(input.percentageMarks);

  // =========================================================================
  // 1. Minimum Percentage Evaluation (with Rule 8(3)(a) rounding)
  // =========================================================================
  if (roundedMarks >= minRequiredMarks) {
    evaluations.push({
      ruleName: 'Minimum Aggregate Qualifying Marks',
      status: 'PASS',
      message: `Your rounded marks (${roundedMarks}%, actual ${input.percentageMarks}%) satisfy the required minimum of ${minRequiredMarks}% for ${canClaimRelaxation ? `${catMeta.code} Reserved Category (Maharashtra State)` : 'General / Open Category'}. (Rounding applied as per Brochure Rule 8(3)(a), p. 61).`,
      brochureSource: `${criteria.brochureSource.ruleNumber || 'Rule 7'}, Printed Page ${criteria.brochureSource.printedPage}`
    });
  } else {
    failCount++;
    evaluations.push({
      ruleName: 'Minimum Aggregate Qualifying Marks',
      status: 'FAIL',
      message: `Your rounded marks (${roundedMarks}%, actual ${input.percentageMarks}%) are below the mandatory minimum of ${minRequiredMarks}% for ${canClaimRelaxation ? `${catMeta.code} category` : 'General Category'}.`,
      brochureSource: `${criteria.brochureSource.ruleNumber || 'Rule 7'}, Printed Page ${criteria.brochureSource.printedPage}`
    });
    recommendations.push(`Improve qualifying aggregate marks or verify category certificate status.`);
  }

  // =========================================================================
  // 2. Caste / Category, Quota & Documentation Compliance
  // =========================================================================
  if (!isMS && isReserved) {
    // Candidature is All India or NRI/OCI
    evaluations.push({
      ruleName: 'Caste Reservation Scope & Candidature Type (Rule 7(6))',
      status: 'WARNING',
      message: `You selected "${catMeta.name}", but your Candidature Type is "${input.candidatureType}". Per Brochure Section 7(6) (page 13), statutory category reservations and 5% qualifying mark relaxation apply exclusively to Maharashtra State Candidates (Types A to E). On All India seats, all candidates are processed under General / Open merit.`,
      brochureSource: 'Brochure Page 13, Rule 7(6) & Page 79, Rule 10(2)'
    });
  } else if (isPgLateralEntry && isReserved) {
    // PG Lateral Entry
    evaluations.push({
      ruleName: 'Category Status for PG Lateral Entry (Rule 10(2)(ii)(i))',
      status: 'WARNING',
      message: `Per Brochure Rule 10(2)(ii)(i) (page 81), all seats for Post Graduate Lateral Entry (Second Year MBA / MCA) are treated as General Category seats with no category reservations.`,
      brochureSource: 'Brochure Page 81, Rule 10(2)(ii)(i)'
    });
  } else if (isMS && isReserved) {
    if (!certificatesValid) {
      // Missing mandatory validity or NCL -> Rule 9(3)(e)(iii) conversion to General
      if (roundedMarks >= criteria.minMarksGeneral) {
        evaluations.push({
          ruleName: 'Caste Documentation & Rule 9(3)(e)(iii) Conversion',
          status: 'WARNING',
          message: `${certificateFailureReason} Per official Brochure Rule 9(3)(e)(iii) (page 75), you will be converted from Reserved to General / Open Category during scrutiny. Since your rounded score (${roundedMarks}%) meets the General cutoff (${criteria.minMarksGeneral}%), you remain eligible to compete for Open seats.`,
          brochureSource: 'Brochure Page 75, Rule 9(3)(e)(iii) & Page 93, Sr. 7-8'
        });
        recommendations.push(`Obtain your pending Caste Validity / NCL certificate before CAP document verification to retain your reserved seat claim.`);
      } else {
        failCount++;
        evaluations.push({
          ruleName: 'Caste Documentation & Rule 9(3)(e)(iii) Conversion',
          status: 'FAIL',
          message: `${certificateFailureReason} Per Brochure Rule 9(3)(e)(iii) (page 75), failure to submit validity/NCL converts your candidature to General Category, requiring ${criteria.minMarksGeneral}% marks. Your score of ${roundedMarks}% does not meet this requirement.`,
          brochureSource: 'Brochure Page 75, Rule 9(3)(e)(iii) & Page 93, Sr. 7-8'
        });
        recommendations.push(`Caste Validity Certificate and valid Non-Creamy Layer (upto 31.03.2027) are strictly required to avail the 5% relaxation.`);
      }
    } else {
      // Requisite certificates confirmed
      evaluations.push({
        ruleName: `Category Verification: ${catMeta.name} (${catMeta.code})`,
        status: 'PASS',
        message: `Verified under ${catMeta.name} (${catMeta.quotaDescription}). Eligible for 5% qualifying mark relaxation (${minRequiredMarks}% required vs ${criteria.minMarksGeneral}% General). Requisite certificates confirmed as per Section 17.`,
        brochureSource: catMeta.sourceRef
      });

      if (catMeta.isSubJudice) {
        evaluations.push({
          ruleName: 'SEBC Reservation Legal Notice',
          status: 'WARNING',
          message: 'Footnote on Brochure Page 14: In case of SEBC Candidates, reservation policy is subject to the decision of the Hon’ble High Court in related Writ Petitions.',
          brochureSource: 'Brochure Page 14 Footnote'
        });
      }

      if (catKey === 'SBC') {
        evaluations.push({
          ruleName: 'Special Backward Class (SBC) Allocation Provision',
          status: 'PASS',
          message: 'Per Brochure Rule 10(1) Stage I(d) and Stage III (pages 77, 79), SBC candidates are considered in General Category by virtue of merit, in their original reserved category, and for vacant reserved seats up to 2% in Stage III.',
          brochureSource: 'Brochure Page 77 & 79, Rule 10(1)'
        });
      }
    }
  } else {
    // General / Open
    evaluations.push({
      ruleName: 'Category: Open / General (Unreserved Merit)',
      status: 'PASS',
      message: 'Considered under Open / General Category on inter-se merit for all unreserved seats (Brochure Page 10, Rule 7(1)). No caste certificate or validity required.',
      brochureSource: 'Brochure Page 10, Rule 7(1) & Page 77, Rule 10(1)'
    });
  }

  // =========================================================================
  // 3. Mandatory Subjects Check
  // =========================================================================
  if (criteria.mandatorySubjects && criteria.mandatorySubjects.length > 0) {
    if (input.hasMandatorySubjects) {
      evaluations.push({
        ruleName: 'Compulsory Subject Group Combination',
        status: 'PASS',
        message: `You selected the required subject combination: ${criteria.mandatorySubjects.join(', ')}.`,
        brochureSource: `${criteria.brochureSource.ruleNumber || 'Rule 7'}, Printed Page ${criteria.brochureSource.printedPage}`
      });
    } else {
      failCount++;
      evaluations.push({
        ruleName: 'Compulsory Subject Group Combination',
        status: 'FAIL',
        message: `You do not have the required compulsory subjects (${criteria.mandatorySubjects.join(', ')}).`,
        brochureSource: `${criteria.brochureSource.ruleNumber || 'Rule 7'}, Printed Page ${criteria.brochureSource.printedPage}`
      });
      recommendations.push(`Ensure you have passed in all compulsory subjects specified for ${course.abbreviation}.`);
    }
  }

  // =========================================================================
  // 4. Entrance Examination Check
  // =========================================================================
  if (course.entryType === 'Direct Second Year' || course.entryType === 'Direct Third Year' || course.entryType === 'Direct Final Year') {
    evaluations.push({
      ruleName: 'Entrance Examination Exemption',
      status: 'PASS',
      message: `Lateral Entry admission to ${course.abbreviation} does not require a CET. Merit is determined strictly on qualifying diploma / degree examination marks.`,
      brochureSource: `Rule 8(4)(b), Printed Page 62`
    });
  } else if (course.entranceExams.primaryExam.includes('Exempt')) {
    evaluations.push({
      ruleName: 'Entrance Examination',
      status: 'PASS',
      message: `This program does not require an entrance test; admission is based on qualifying examination merit.`,
      brochureSource: `Printed Page ${course.brochureSource.printedPage}`
    });
  } else {
    // Requires entrance test
    if (input.entranceExamTaken && input.entranceExamTaken !== 'None') {
      if (input.entranceScorePositive) {
        evaluations.push({
          ruleName: 'Entrance Examination Score Validity',
          status: 'PASS',
          message: `You appeared in ${input.entranceExamTaken} and obtained a non-zero / positive score as required.`,
          brochureSource: `Rule 7 & 8, Printed Page ${course.brochureSource.printedPage}`
        });
      } else {
        failCount++;
        evaluations.push({
          ruleName: 'Entrance Examination Score Validity',
          status: 'FAIL',
          message: `Brochure mandates a non-zero / positive score in the entrance exam. Zero or negative scores are ineligible.`,
          brochureSource: `Rule 7, Printed Page ${course.brochureSource.printedPage}`
        });
        recommendations.push(`A non-zero positive score is strictly compulsory for CAP allotment.`);
      }
    } else {
      failCount++;
      evaluations.push({
        ruleName: 'Entrance Examination Appeared',
        status: 'FAIL',
        message: `Brochure requires appearing in ${course.entranceExams.primaryExam} or approved alternative national exam.`,
        brochureSource: `Rule 7, Printed Page ${course.brochureSource.printedPage}`
      });
      recommendations.push(`Registration and participation in ${course.entranceExams.primaryExam} is necessary.`);
    }
  }

  // =========================================================================
  // 5. Special Course Requirements (B.Pharm Practice, Working Professionals)
  // =========================================================================
  if (course.id === 'b-pharm-practice') {
    if (input.hasRegisteredPharmacist && (input.yearsPharmacyExperience || 0) >= 4) {
      evaluations.push({
        ruleName: 'Registered Pharmacist & 4 Years Experience',
        status: 'PASS',
        message: `Registered Pharmacist status verified with ${(input.yearsPharmacyExperience || 0)} years hospital/community pharmacy experience.`,
        brochureSource: 'Rule 7(A)(16), Printed Page 40'
      });
    } else {
      failCount++;
      evaluations.push({
        ruleName: 'Registered Pharmacist & Experience Requirement',
        status: 'FAIL',
        message: `Candidate MUST be a Registered Pharmacist with minimum 4 years of pharmacy practice experience and an employer NOC.`,
        brochureSource: 'Rule 7(A)(16), Printed Page 40'
      });
      recommendations.push(`Provide proof of State Pharmacy Council registration and minimum 4 years experience.`);
    }
  }

  if (course.entryType === 'Working Professional') {
    if (input.hasWorkingProExperience && input.isWithin50Km) {
      evaluations.push({
        ruleName: 'Working Professional Norms (1 Yr Exp & 50 KM)',
        status: 'PASS',
        message: `Minimum 1 year regular experience in registered industry located within 50 KM radial distance satisfied.`,
        brochureSource: 'Rule 7(A)(21) / 7(B)(10), Printed Page 46 & 58'
      });
    } else {
      failCount++;
      evaluations.push({
        ruleName: 'Working Professional Location & Experience',
        status: 'FAIL',
        message: `Brochure strictly requires minimum 1 year experience AND workplace located within 50 KM radial distance from the admitting institution (Proforma W1 & W2).`,
        brochureSource: 'Rule 7(A)(21) / 7(B)(10), Printed Page 46, 58, 121-122'
      });
      recommendations.push(`Verify workplace distance using radial distance map and obtain Proforma W1 & W2.`);
    }
  }

  // =========================================================================
  // Final Verdict Construction
  // =========================================================================
  if (failCount > 0) {
    return {
      verdict: 'NOT_ELIGIBLE',
      headline: 'Does not meet one or more listed criteria',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-300',
      summary: `Based on the official brochure criteria for AY 2026–27, this preliminary screening indicates that the candidate does not satisfy one or more mandatory requirements for ${course.abbreviation}.`,
      roundedPercentage: roundedMarks,
      evaluations,
      recommendations,
      brochureReference: `Section ${course.brochureSource.section}, Printed Page ${course.brochureSource.printedPage}`
    };
  }

  if (pendingCount > 0) {
    return {
      verdict: 'MORE_INFO_REQUIRED',
      headline: 'More information is required',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
      summary: `Some criteria require manual verification of specific board marks, syllabus equivalence, or council approvals.`,
      roundedPercentage: roundedMarks,
      evaluations,
      recommendations,
      brochureReference: `Section ${course.brochureSource.section}, Printed Page ${course.brochureSource.printedPage}`
    };
  }

  return {
    verdict: 'POTENTIALLY_ELIGIBLE',
    headline: 'Potentially meets the listed criteria',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    summary: `The candidate appears to fulfill the preliminary educational, subject group, minimum marks (${minRequiredMarks}%), and entrance test requirements as stated in the State CET Cell Information Brochure 2026–27. Final eligibility is subject to official document scrutiny during CAP.`,
    roundedPercentage: roundedMarks,
    evaluations,
    recommendations: [
      'Ensure all original marksheets and certificates are ready for E-Scrutiny or Facilitation Centre verification.',
      'Check the seat matrix and prepare a preference list of up to 300 choice codes before CAP Round-I.',
      'Remember that preliminary eligibility does not guarantee college allotment.'
    ],
    brochureReference: `Section ${course.brochureSource.section}, Printed Page ${course.brochureSource.printedPage}`
  };
}
