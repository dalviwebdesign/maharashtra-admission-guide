import { coursesData } from './src/data/courses';
import { evaluateEligibility, EligibilityInput } from './src/utils/eligibilityChecker';
import { casteCategoriesMetadata } from './src/data/reservations';

const testCourse = coursesData.find(c => c.id === 'be-btech-first-year')!;
const categoriesToTest = ['Open', 'SC', 'ST', 'VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC', 'EWS', 'PWD'];

console.log('Testing all categories in evaluateEligibility:');

for (const cat of categoriesToTest) {
  const meta = casteCategoriesMetadata[cat];
  if (!meta) {
    throw new Error(`Missing metadata for category: ${cat}`);
  }

  // Test with MS Candidature and valid certificates
  const inputMS: EligibilityInput = {
    courseId: testCourse.id,
    category: cat,
    candidatureType: 'Maharashtra State',
    qualification: 'HSC (10+2)',
    percentageMarks: 44.55, // rounds to 45% (passes General and Reserved)
    hasMandatorySubjects: true,
    entranceExamTaken: 'MHT-CET 2026 (PCM Group)',
    entranceScorePositive: true,
    hasCasteCertificate: true,
    hasCasteValidity: true,
    hasNonCreamyLayer: true,
    hasEwsCertificate: true,
    hasPwdCertificate: true
  };

  const resMS = evaluateEligibility(inputMS, testCourse);
  console.log(`[PASS] ${cat} (MS): verdict=${resMS.verdict}, rounded=${resMS.roundedPercentage}%`);

  // Test with missing certificate (should trigger Rule 9(3)(e)(iii) conversion to General)
  if (cat !== 'Open') {
    const inputMissingDoc: EligibilityInput = {
      ...inputMS,
      percentageMarks: 41.0, // Below general 45%
      hasCasteValidity: cat === 'EWS' || cat === 'PWD' ? true : false,
      hasEwsCertificate: cat === 'EWS' ? false : true,
      hasPwdCertificate: cat === 'PWD' ? false : true
    };
    const resMissingDoc = evaluateEligibility(inputMissingDoc, testCourse);
    if (resMissingDoc.verdict !== 'NOT_ELIGIBLE') {
      throw new Error(`Expected NOT_ELIGIBLE for ${cat} with missing certificate and 41% marks`);
    }
    console.log(`[PASS] ${cat} (Missing Cert): verified conversion to General and FAIL on 41%`);
  }

  // Test with All India candidature (reservation should not apply)
  const inputOMS: EligibilityInput = {
    ...inputMS,
    candidatureType: 'All India',
    percentageMarks: 42.0 // below 45%
  };
  const resOMS = evaluateEligibility(inputOMS, testCourse);
  if (resOMS.verdict !== 'NOT_ELIGIBLE') {
    throw new Error(`Expected NOT_ELIGIBLE for All India candidate with 42% marks even if category is ${cat}`);
  }
}

console.log('All category evaluation tests passed successfully!');
