import { Course } from '../types/admission';

export const coursesData: Course[] = [
  // ==========================================
  // 1. B.E. / B.Tech. First Year
  // ==========================================
  {
    id: 'be-btech-first-year',
    slug: 'be-btech-first-year',
    title: 'First Year Engineering and Technology (B.E. / B.Tech.)',
    abbreviation: 'B.E. / B.Tech.',
    level: 'UG',
    entryType: 'First Year',
    duration: '4 Years',
    category: 'Engineering',
    qualifyingExam: 'HSC (10+2) / Diploma in Engineering / D.Voc.',
    overview: 'Full-time four-year undergraduate technical degree program across 29 major disciplines including Computer Engineering, Mechanical, Civil, Electrical, AI & Data Science, Electronics, and Allied branches.',
    eligibility: {
      maharashtraState: {
        qualification: 'Passed 10+2 examination or its equivalent OR minimum 3-year Diploma in Engineering and Technology OR 3-year D.Voc. in same/allied sector.',
        mandatorySubjects: ['Physics', 'Mathematics'],
        optionalSubjects: ['Chemistry', 'Biotechnology', 'Biology', 'Technical Vocational subject', 'Computer Science', 'Information Technology', 'Informatics Practices', 'Agriculture', 'Engineering Graphics', 'Business Studies', 'Electronics', 'Entrepreneurship'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MHT-CET 2026 (PCM)',
        entranceExamDetails: 'Must have appeared in all subjects in PCM group of MHT-CET 2026 and obtained non-zero score conducted by Competent Authority. (Note: Candidates with Physics + Chemistry compulsory and Biology/other subjects with PCB CET are eligible for 9 specific disciplines: Agriculture Engg, Biotechnology, Food Engg, Leather Tech, Packaging Tech, Pharmaceutical Engg, Printing Engg, Fashion Tech, Textile Chemistry).',
        notes: [
          'Reserved category relaxation (40%) applies strictly to Backward Class categories, EWS, and Persons with Disability belonging to Maharashtra State only.',
          'Diploma holders with at least 45% (40% for MS reserved/EWS/PwD) are also eligible for First Year.'
        ],
        brochureSource: {
          section: '7(A)(1)',
          printedPage: 16,
          ruleNumber: 'Rule 7(A)(1)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with Physics and Mathematics (or Physics and Chemistry for specified 9 branches) OR Diploma in Engineering OR D.Voc.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'JEE (Main) B.E./B.Tech. OR MHT-CET 2026 (PCM)',
        entranceExamDetails: 'Obtained non-zero positive score in JEE (Main) B.E./B.Tech or appeared in all subjects in PCM MHT-CET 2026. Preference is given to JEE (Main) positive score over MHT-CET 2026.',
        allIndiaExam: 'JEE (Main) Paper 1',
        brochureSource: {
          section: '7(A)(1)(2)',
          printedPage: 18,
          ruleNumber: 'Rule 7(A)(1)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with Physics and Mathematics along with one optional subject obtaining at least 45% marks in aggregate.',
        sourceRef: 'Brochure Page 20, Rule 7(A)(1)(3)'
      },
      tieBreakingRules: [
        'Higher marks or score in Mathematics at CET',
        'Higher marks or score in Physics at CET',
        'Higher marks or score in Chemistry at CET',
        'Higher percentage of marks in Board (PCM taken together)',
        'Higher percentage of marks in Mathematics at HSC (10+2)',
        'Higher percentage of marks in Physics at HSC (10+2)',
        'Higher percentage of marks in Aggregate at HSC (10+2)'
      ]
    },
    entranceExams: {
      primaryExam: 'MHT-CET 2026 (PCM Group)',
      alternativeExams: ['JEE (Main) Paper 1 (for All India Candidates)', 'MHT-CET (PCB Group) for 9 specified branches'],
      subjectsOrGroups: 'Physics, Chemistry, Mathematics (or Biology for bio/allied disciplines)',
      scoreRequirement: 'Non-zero score in MHT-CET 2026 or non-zero positive score in JEE Main Paper 1',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC (Std. X) Mark Sheet', description: 'Mandatory proof of date of birth and secondary education', requirementType: 'Required for all', sourceRef: 'Brochure Page 92, Sr. 1' },
      { id: 'hsc', name: 'HSC (Std. XII) / Diploma Mark Sheet', description: 'Qualifying examination mark sheet substantiating aggregate marks in mandatory subjects', requirementType: 'Required for all', sourceRef: 'Brochure Page 92, Sr. 1' },
      { id: 'scorecard', name: 'MHT-CET 2026 / JEE Main Score Card', description: 'Valid entrance test scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92, Sr. 1' },
      { id: 'nationality', name: 'Certificate of Indian Nationality', description: 'School Leaving Certificate stating Indian nationality or Indian Passport or Domicile Certificate', requirementType: 'Required for all', sourceRef: 'Brochure Page 92, Sr. 1' },
      { id: 'domicile', name: 'Domicile Certificate of Maharashtra', description: 'Required to claim Maharashtra State candidature (Type A or B)', requirementType: 'Candidature specific', candidatureApplicability: ['Type-A', 'Type-B'], sourceRef: 'Brochure Page 93, Sr. 2-3' },
      { id: 'caste', name: 'Caste / Tribe Certificate', description: 'Issued by competent authority of Maharashtra State', requirementType: 'Category specific', categoryApplicability: ['SC', 'ST', 'VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC'], sourceRef: 'Brochure Page 93, Sr. 7-8' },
      { id: 'validity', name: 'Caste / Tribe Validity Certificate', description: 'Mandatory validity certificate issued by Divisional Caste Certificate Scrutiny Committee', requirementType: 'Category specific', categoryApplicability: ['SC', 'ST', 'VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC'], sourceRef: 'Brochure Page 93, Sr. 7-8' },
      { id: 'ncl', name: 'Non-Creamy Layer Certificate (Valid upto 31st March 2027)', description: 'Required for VJ/DT-NT(A), NT(B), NT(C), NT(D), OBC, SBC, SEBC categories', requirementType: 'Category specific', categoryApplicability: ['VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC'], sourceRef: 'Brochure Page 93, Sr. 8' },
      { id: 'ews', name: 'EWS Eligibility Certificate (Proforma V for 2026-27)', description: 'Eligibility certificate for Economically Weaker Section with parental income < Rs. 8 Lakh', requirementType: 'Category specific', categoryApplicability: ['EWS'], proforma: 'Proforma - V', sourceRef: 'Brochure Page 94, Sr. 9' },
      { id: 'tfws', name: 'Income Certificate for TFWS (< Rs. 8 Lakh)', description: 'Issued by Competent Authority of Maharashtra State stating annual parental income is less than Rs. 8 Lakh', requirementType: 'Special / Conditional', sourceRef: 'Brochure Page 95, Sr. 19' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Online Registration', description: 'Register on cetcell.mahacet.org and complete CAP application form.' },
        { stepNumber: 2, title: 'Document Upload & Verification', description: 'Upload scanned copies (150 dpi, max 1MB) and complete verification via E-Scrutiny or Physical Facilitation Centre.' },
        { stepNumber: 3, title: 'Merit List Publication & Grievances', description: 'Review Provisional Merit List, file grievances if discrepancy exists, and obtain Final Merit status.' },
        { stepNumber: 4, title: 'Option Form Filling', description: 'Fill up to 300 college and branch choices in decreasing order of preference for CAP Round-I.' },
        { stepNumber: 5, title: 'Allotment & Seat Acceptance', description: 'Auto-Freeze for 1st preference; option for Self-Freeze or Betterment for preferences 2–300. Pay seat acceptance fee online.' },
        { stepNumber: 6, title: 'Institutional Reporting', description: 'Report to allotted college with original documents and pay college fees.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For candidates applying via JEE only. CET candidates paid during exam registration)',
      applicationFeeReserved: '₹ 1000/- (For SC, ST, VJ/DT-NT, OBC, SBC, EWS, SEBC, PwD of Maharashtra)',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'Up to 5% supernumerary seats in institutions where ≥ 50% intake was filled in previous year. Tuition fee waiver only; parental income < Rs 8 Lakh.',
      reservationsApplicable: true,
      institutionalQuota: 'Up to 20% in unaided private colleges (including 5% NRI quota where approved).',
      minorityQuota: 'Minimum 51% in Unaided Minority Technical Institutions.',
      supernumeraryQuota: '15% for OCI/PIO/FN/CIWGC, plus J&K/Ladakh Migrant seats.'
    },
    faqs: [
      { question: 'Is Mathematics compulsory for Engineering admissions?', answer: 'Yes, Mathematics and Physics are compulsory for standard engineering disciplines. For 9 specific branches (like Biotechnology, Agriculture, Food Technology), Physics and Chemistry are compulsory with Mathematics or Biology as optional.' },
      { question: 'Can an All India candidate get admission through JEE Main?', answer: 'Yes, All India Candidature seats (15% in unaided colleges) are filled with first preference given to candidates having non-zero positive score in JEE (Main) Paper 1 over MHT-CET.' },
      { question: 'What is the round-off rule for aggregate marks?', answer: 'Marks between 44.50% and 44.99% are rounded off to 45% for general candidates, and 39.50% to 39.99% are rounded off to 40% for reserved category candidates (Brochure page 61, rule 8(3)).' }
    ],
    brochureSource: {
      section: '7(A)(1)',
      printedPage: 16,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 1'
    }
  },

  // ==========================================
  // 2. Direct Second Year Engineering (DSE)
  // ==========================================
  {
    id: 'dse-engineering',
    slug: 'dse-engineering',
    title: 'Direct Second Year Engineering and Technology (B.E. / B.Tech. Lateral Entry)',
    abbreviation: 'DSE Engineering',
    level: 'Lateral Entry',
    entryType: 'Direct Second Year',
    duration: '3 Years',
    category: 'Engineering',
    qualifyingExam: 'Diploma in Engineering / B.Sc. Degree / D.Voc.',
    overview: 'Lateral entry directly into the third semester (second year) of 4-year B.E. / B.Tech. programs for diploma holders and B.Sc. graduates against 10% supernumerary seats plus vacant seats of first year.',
    eligibility: {
      maharashtraState: {
        qualification: 'Passed minimum 3 years or 2 years (Lateral Entry) Diploma in Engineering and Technology OR passed B.Sc. Degree from UGC/AIU recognized university with Mathematics at 10+2 OR passed 3-year D.Voc. Stream in same/allied sector.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Qualifying Examination Merit (No CET required)',
        entranceExamDetails: 'Merit list is prepared strictly based on the percentage of marks obtained in the qualifying Diploma or B.Sc. Degree awarded by the examining authority.',
        notes: [
          'Reserved category relaxation (40%) is for Maharashtra State reserved, EWS, and PwD candidates only.',
          'B.Sc. candidates must have cleared HSC (10+2) with Mathematics as a subject.',
          'B.Sc. candidates will be considered only after exhausting eligible Diploma candidates in vacant seat conversions.'
        ],
        brochureSource: {
          section: '7(A)(3)',
          printedPage: 25,
          ruleNumber: 'Rule 7(A)(3)'
        }
      },
      allIndia: {
        qualification: 'Same diploma/degree qualifications as Maharashtra State candidates with Indian nationality.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Qualifying Examination Merit',
        entranceExamDetails: 'Merit based on qualifying diploma / degree aggregate marks.',
        brochureSource: {
          section: '7(A)(3)',
          printedPage: 25,
          ruleNumber: 'Rule 7(A)(3)'
        }
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC (Std. X)',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'Exempt from CET (Direct merit based on Diploma/B.Sc. marks)',
      subjectsOrGroups: 'All subjects of qualifying diploma or degree',
      scoreRequirement: 'Minimum 45% (40% for reserved/EWS/PwD of Maharashtra)',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC (Std. X) Mark Sheet', description: 'Required for tie-breaking and birth verification', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'diploma-final', name: 'Diploma / B.Sc. Final Year Mark Sheet', description: 'All semester mark sheets or final year consolidated marksheet', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'provisional-cert', name: 'Diploma Passing Certificate / Degree Certificate', description: 'Certificate of passing qualifying examination', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Certificate', description: 'School Leaving Certificate / Passport / Domicile', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'caste', name: 'Caste Certificate & Validity', description: 'For reserved candidates claiming 40% relaxation or reserved seat', requirementType: 'Category specific', categoryApplicability: ['SC', 'ST', 'OBC', 'VJ/NT', 'SEBC'], sourceRef: 'Brochure Page 93' },
      { id: 'ncl', name: 'Non-Creamy Layer Certificate (Valid upto 31.03.2027)', description: 'For OBC, SBC, VJ/NT, SEBC candidates', requirementType: 'Category specific', categoryApplicability: ['OBC', 'SBC', 'VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'SEBC'], sourceRef: 'Brochure Page 93' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Online Registration', description: 'Register on State CET Cell DSE portal and enter diploma marks.' },
        { stepNumber: 2, title: 'Document Verification', description: 'E-Scrutiny or FC verification with original diploma documents.' },
        { stepNumber: 3, title: 'Merit List Publication', description: 'Provisional merit list display, grievance resolution, and final merit number assignment.' },
        { stepNumber: 4, title: 'CAP Option Filling & Allotment', description: 'Fill preferred institutes/branches across CAP rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      tfwsDetails: 'TFWS is not applicable to Direct Second Year lateral entry seats.',
      reservationsApplicable: true,
      institutionalQuota: 'No institutional quota for DSE in unaided colleges (100% seats are CAP seats except in working professional divisions).',
      exceptions: ['Lateral entry seats = 10% of sanctioned intake + unfilled vacant seats from First Year.']
    },
    faqs: [
      { question: 'Is an entrance exam like MHT-CET required for Direct Second Year?', answer: 'No. Admission to Direct Second Year Engineering is done entirely on the basis of marks obtained in the qualifying Diploma or B.Sc. examination (Brochure page 26 & 67).' },
      { question: 'Can B.Sc. graduates apply for DSE Engineering?', answer: 'Yes, provided they passed B.Sc. with at least 45% marks (40% for reserved) and passed HSC with Mathematics as a subject. However, diploma students receive priority in seat allocation (Rule 10(1) Stage V).' }
    ],
    brochureSource: {
      section: '7(A)(3)',
      printedPage: 25,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 3'
    }
  },

  // ==========================================
  // 3. Direct Third Year Engineering
  // ==========================================
  {
    id: 'dte-engineering-third-year',
    slug: 'direct-third-year-engineering',
    title: 'Direct Third Year Engineering and Technology (Lateral Entry)',
    abbreviation: 'DTE 3rd Year',
    level: 'Lateral Entry',
    entryType: 'Direct Third Year',
    duration: '2 Years',
    category: 'Engineering',
    qualifyingExam: 'UG Diploma in Engineering or Technology',
    overview: 'Direct admission to the third year of engineering courses carried out by institutes against vacant seats within sanctioned intake, subject to affiliating university regulations.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed UG Diploma in Engineering or Technology; any other criteria declared by appropriate authority.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Qualifying Examination Merit',
        entranceExamDetails: 'Subject to university eligibility criteria and vacancy within sanctioned intake (no supernumerary seats sanctioned by AICTE).',
        brochureSource: {
          section: '7(A)(4)',
          printedPage: 26,
          ruleNumber: 'Rule 7(A)(4)'
        }
      },
      allIndia: {
        qualification: 'Citizen of India; Passed UG Diploma in Engineering or Technology.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Qualifying Examination Merit',
        entranceExamDetails: 'Institutional level based on merit.',
        brochureSource: {
          section: '7(A)(4)',
          printedPage: 26,
          ruleNumber: 'Rule 7(A)(4)'
        }
      },
      tieBreakingRules: ['Higher marks in qualifying UG Diploma', 'Higher percentage in SSC']
    },
    entranceExams: {
      primaryExam: 'Exempt from CET',
      subjectsOrGroups: 'UG Diploma subjects',
      scoreRequirement: 'Passed UG Diploma',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Proof of age and qualification', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'ug-diploma', name: 'UG Diploma Mark Sheet & Certificate', description: 'Passed UG Diploma in relevant field', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Nationality Certificate', description: 'Proof of Indian citizenship', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Vacancy Notification', description: 'Institutes publish vacant seats within sanctioned intake.' },
        { stepNumber: 2, title: 'Application at Institute Level', description: 'Candidates apply directly to the institute as per Rule 12(r) & Rule 13.' },
        { stepNumber: 3, title: 'Merit List & Admission Approval', description: 'Institution prepares inter-se merit list and submits to DTE/ARA for approval.' }
      ],
      applicationFeeGeneral: 'As notified by Competent Authority / Institute',
      applicationFeeReserved: 'As notified by Competent Authority / Institute',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: false,
      institutionalQuota: 'Conducted at institute level based on vacancy.',
      exceptions: ['No supernumerary seats exist for Direct Third Year. Admissions happen strictly against vacant seats within sanctioned intake (Brochure p. 105).']
    },
    faqs: [
      { question: 'Are there supernumerary seats for Direct Third Year Engineering?', answer: 'No. Appropriate Authority has not sanctioned supernumerary seats for Direct Third Year. Admissions are strictly based on vacancies within sanctioned intake (Brochure p. 105).' }
    ],
    brochureSource: {
      section: '7(A)(4)',
      printedPage: 26,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 4 & p. 105'
    }
  },

  // ==========================================
  // 4. Direct Final Year Engineering
  // ==========================================
  {
    id: 'dte-engineering-final-year',
    slug: 'direct-final-year-engineering',
    title: 'Direct Final Year (Lateral Entry) Engineering and Technology',
    abbreviation: 'DTE Final Year',
    level: 'Lateral Entry',
    entryType: 'Direct Final Year',
    duration: '1 Year',
    category: 'Engineering',
    qualifyingExam: 'B.Voc. in relevant discipline',
    overview: 'Direct lateral entry to the final (4th) year of B.E. / B.Tech. for students who have passed Bachelor of Vocation (B.Voc.) in the relevant discipline against vacancies within sanctioned intake.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed B.Voc. in relevant discipline; any other criteria declared by appropriate authority.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Qualifying Examination Merit',
        entranceExamDetails: 'Admission carried out based on vacancy within sanctioned intake by institutes under Rule 13.',
        brochureSource: {
          section: '7(A)(5)',
          printedPage: 26,
          ruleNumber: 'Rule 7(A)(5)'
        }
      },
      allIndia: {
        qualification: 'Citizen of India; Passed B.Voc. in relevant discipline.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Qualifying Examination Merit',
        entranceExamDetails: 'Merit based on B.Voc. marks.',
        brochureSource: {
          section: '7(A)(5)',
          printedPage: 26,
          ruleNumber: 'Rule 7(A)(5)'
        }
      },
      tieBreakingRules: ['Higher percentage of marks in B.Voc.', 'Higher percentage in SSC']
    },
    entranceExams: {
      primaryExam: 'Exempt from CET',
      subjectsOrGroups: 'B.Voc. curriculum in relevant discipline',
      scoreRequirement: 'Passed B.Voc.',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'bvoc-cert', name: 'B.Voc. Degree & Mark Sheets', description: 'Proof of completion of B.Voc. in relevant discipline', requirementType: 'Required for all', sourceRef: 'Brochure Page 27, 92' },
      { id: 'nationality', name: 'Nationality Certificate', description: 'Proof of Indian citizenship', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Vacancy Notification', description: 'Institutes publish vacant seats in final year.' },
        { stepNumber: 2, title: 'Institutional Application', description: 'Application as per Rule 12(r) and Rule 13.' },
        { stepNumber: 3, title: 'Merit Allotment', description: 'Merit-based admission and submission to ARA.' }
      ],
      applicationFeeGeneral: 'As notified',
      applicationFeeReserved: 'As notified',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: false,
      institutionalQuota: 'Based on institutional vacancy.',
      exceptions: ['No supernumerary seats. Admissions carried out based on vacancies within sanctioned intake (Brochure p. 105).']
    },
    faqs: [
      { question: 'Who is eligible for Direct Final Year Engineering?', answer: 'Candidates who have completed a Bachelor of Vocation (B.Voc.) in a relevant discipline are eligible to enter the final year of B.E./B.Tech. against vacancies (Brochure page 26-27).' }
    ],
    brochureSource: {
      section: '7(A)(5)',
      printedPage: 26,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 5'
    }
  },

  // ==========================================
  // 5. First Year B.Pharm.
  // ==========================================
  {
    id: 'b-pharm-first-year',
    slug: 'b-pharm-first-year',
    title: 'First Year Bachelor of Pharmacy (B.Pharm.)',
    abbreviation: 'B.Pharm.',
    level: 'UG',
    entryType: 'First Year',
    duration: '4 Years',
    category: 'Pharmacy',
    qualifyingExam: 'HSC (10+2) with English, Physics, Chemistry, and Maths or Biology',
    overview: 'Full-time four-year undergraduate professional pharmacy program approved by Pharmacy Council of India (PCI) and State CET Cell Maharashtra.',
    eligibility: {
      maharashtraState: {
        qualification: 'Passed 10+2 examination or its equivalent with English as one of the subjects and Physics, Chemistry, Mathematics or Biology as optional subjects individually (or PCI approved equivalent).',
        mandatorySubjects: ['English', 'Physics', 'Chemistry'],
        optionalSubjects: ['Mathematics', 'Biology'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MHT-CET 2026 (PCM or PCB Group)',
        entranceExamDetails: 'Candidate should have appeared in all subjects and obtained non-zero score in MHT-CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(6)',
          printedPage: 27,
          ruleNumber: 'Rule 7(A)(6)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 examination with English, Physics, Chemistry, Mathematics/Biology.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'NEET 2026 OR MHT-CET 2026',
        entranceExamDetails: 'Obtained non-zero positive score in NEET or appeared in all subjects in MHT-CET 2026. Preference given to NEET positive score over MHT-CET.',
        allIndiaExam: 'NEET 2026',
        brochureSource: {
          section: '7(A)(6)(2)',
          printedPage: 27,
          ruleNumber: 'Rule 7(A)(6)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with English, Physics, Chemistry, Mathematics or Biology as optional subjects individually.',
        sourceRef: 'Brochure Page 28'
      },
      tieBreakingRules: [
        'Higher marks or score in Mathematics or Biology in CET',
        'Higher marks or score in Physics in CET',
        'Higher marks or score in Chemistry in CET',
        'Higher percentage of marks in Physics, Mathematics or Biology and Chemistry added together at Board examination',
        'Higher percentage of marks in Mathematics or Biology in HSC',
        'Higher percentage of marks in Physics in HSC',
        'Higher percentage of marks in aggregate in HSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MHT-CET 2026 (PCB or PCM Group)',
      alternativeExams: ['NEET 2026 (Preferred for All India Seats)'],
      subjectsOrGroups: 'Physics, Chemistry, and Biology or Mathematics',
      scoreRequirement: 'Non-zero score in MHT-CET 2026 or non-zero positive score in NEET',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Proof of date of birth', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: 'Marksheet showing English, Physics, Chemistry, and Maths/Biology', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'cet-score', name: 'MHT-CET / NEET Scorecard', description: 'Valid entrance scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Certificate', description: 'Nationality proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'domicile', name: 'Domicile Certificate', description: 'For Maharashtra State seats', requirementType: 'Candidature specific', candidatureApplicability: ['Type-A', 'Type-B'], sourceRef: 'Brochure Page 93' },
      { id: 'caste-validity', name: 'Caste & Caste Validity', description: 'For reserved categories of Maharashtra', requirementType: 'Category specific', sourceRef: 'Brochure Page 93' },
      { id: 'ncl', name: 'Non-Creamy Layer Certificate (Valid till 31.03.2027)', description: 'For OBC/VJNT/SBC/SEBC', requirementType: 'Category specific', sourceRef: 'Brochure Page 93' },
      { id: 'tfws', name: 'Income Certificate for TFWS (< Rs 8 Lakh)', description: 'For tuition fee waiver scheme', requirementType: 'Special / Conditional', sourceRef: 'Brochure Page 95' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Online Application', description: 'Register online on State CET Cell Pharmacy portal.' },
        { stepNumber: 2, title: 'Document Verification', description: 'Scrutiny of documents at FC or online E-Scrutiny.' },
        { stepNumber: 3, title: 'Merit List Display', description: 'Publication of Provisional & Final merit list.' },
        { stepNumber: 4, title: 'CAP Option Filling & Allotment', description: 'Preference submission (up to 300 options) across CAP Rounds I to IV.' },
        { stepNumber: 5, title: 'Seat Acceptance & Reporting', description: 'Confirmation at ARC and reporting to allotted pharmacy college.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For NEET only candidates)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: '5% supernumerary seats available for Maharashtra State candidates with parental income < Rs 8 Lakh (Brochure p. 12).',
      reservationsApplicable: true,
      institutionalQuota: 'Up to 20% in unaided private institutions (includes 5% NRI quota where approved).',
      minorityQuota: 'Minimum 51% in Unaided Minority Institutions.'
    },
    faqs: [
      { question: 'Can I apply for B.Pharm if I appeared for PCM group instead of PCB?', answer: 'Yes. Candidates with either PCM or PCB group in MHT-CET are eligible for First Year B.Pharm (Brochure p. 27).' },
      { question: 'Is NEET mandatory for All India candidates?', answer: 'NEET is not mandatory if the candidate appeared for MHT-CET, but preference is given to NEET candidates over MHT-CET candidates for All India seats (Brochure p. 28).' }
    ],
    brochureSource: {
      section: '7(A)(6)',
      printedPage: 27,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 6'
    }
  },

  // ==========================================
  // 6. Direct Second Year B.Pharm. (DSP)
  // ==========================================
  {
    id: 'dsp-pharmacy',
    slug: 'dsp-pharmacy',
    title: 'Direct Second Year Pharmacy (B.Pharm. Lateral Entry)',
    abbreviation: 'DSP (B.Pharm)',
    level: 'Lateral Entry',
    entryType: 'Direct Second Year',
    duration: '3 Years',
    category: 'Pharmacy',
    qualifyingExam: 'Diploma in Pharmacy (D.Pharm.)',
    overview: 'Lateral entry into third semester of B.Pharm. for students who completed D.Pharm. from a Pharmacy Council of India (PCI) approved institution.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed D.Pharm. course from an institution approved by the Pharmacy Council of India under section 12 of the Pharmacy Act, 1948 (8 of 1948).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Qualifying Examination Merit (No CET required)',
        entranceExamDetails: 'Merit list prepared strictly on the basis of marks obtained in qualifying D.Pharm. examination awarded by examining authority.',
        brochureSource: {
          section: '7(A)(7)',
          printedPage: 28,
          ruleNumber: 'Rule 7(A)(7)'
        }
      },
      allIndia: {
        qualification: 'Passed D.Pharm. from a PCI approved institution under Section 12.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'D.Pharm. Marks Merit',
        entranceExamDetails: 'Merit based on diploma marks.',
        brochureSource: {
          section: '7(A)(7)',
          printedPage: 28,
          ruleNumber: 'Rule 7(A)(7)'
        }
      },
      tieBreakingRules: [
        'Higher percentage of marks in Physics in HSC (10+2)',
        'Higher percentage of marks in Chemistry in HSC (10+2)',
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Science in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'Exempt from CET (D.Pharm Merit)',
      subjectsOrGroups: 'D.Pharm curriculum approved by PCI',
      scoreRequirement: 'Passed D.Pharm.',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'dpharm-marksheets', name: 'D.Pharm. All Year / Semester Mark Sheets', description: 'Consolidated mark sheets of D.Pharm', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'pci-approval', name: 'PCI Approval Letter of D.Pharm Institute', description: 'Approval letter of Pharmacy Council of India given to the candidate’s institute under Section 12', requirementType: 'Required for all', sourceRef: 'Brochure Page 93, Sr. 7' },
      { id: 'hsc-marksheet', name: 'HSC Marksheet', description: 'Required for tie-breaking resolution (Physics & Chemistry marks)', requirementType: 'Required for all', sourceRef: 'Brochure Page 66, 92' },
      { id: 'ssc-marksheet', name: 'SSC Marksheet', description: 'Proof of age and tie-breaking', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'caste-validity', name: 'Caste & Validity Certificates', description: 'For reserved candidates', requirementType: 'Category specific', sourceRef: 'Brochure Page 93' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Submit D.Pharm marks and institutional PCI approval details.' },
        { stepNumber: 2, title: 'Verification', description: 'Document verification at Facilitation Centre or via E-Scrutiny.' },
        { stepNumber: 3, title: 'Option Form & CAP Allotment', description: 'Choice filling for lateral entry seats across CAP rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: 'No institutional quota in unaided colleges (100% CAP seats).',
      exceptions: ['Lateral entry seats = 10% of sanctioned intake + unfilled vacant seats of First Year (Brochure p. 103).']
    },
    faqs: [
      { question: 'Is PCI approval of the diploma college mandatory?', answer: 'Yes. The candidate must submit the approval letter of the Pharmacy Council of India given to the institute under Section 12 of the Pharmacy Act, 1948 (Brochure page 28 & 93, Sr. 7).' }
    ],
    brochureSource: {
      section: '7(A)(7)',
      printedPage: 28,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 7'
    }
  },

  // ==========================================
  // 7. B.Pharm. (Practice)
  // ==========================================
  {
    id: 'b-pharm-practice',
    slug: 'b-pharm-practice',
    title: 'Bachelor of Pharmacy (Practice) [B.Pharm Practice]',
    abbreviation: 'B.Pharm (Practice)',
    level: 'UG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Pharmacy',
    qualifyingExam: 'D.Pharm. + Registered Pharmacist + 4 Years Experience',
    overview: 'Two-year professional degree program designed for registered practicing pharmacists holding a D.Pharm. with at least 4 years of professional practice.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Diploma course in Pharmacy from a PCI-approved institution under section 12; MUST BE A REGISTERED PHARMACIST; minimum 4 years of pharmacy practice experience in community or hospital pharmacy; NOC from employer.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Qualifying Examination Merit (No CET required)',
        entranceExamDetails: 'Admission is based strictly on marks or score secured in the qualifying D.Pharm. examination.',
        brochureSource: {
          section: '7(A)(16)',
          printedPage: 40,
          ruleNumber: 'Rule 7(A)(16)'
        }
      },
      allIndia: {
        qualification: 'Citizen of India; Passed D.Pharm approved under Section 12; Registered Pharmacist; minimum 4 years pharmacy practice experience; NOC from employer.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Qualifying Examination Merit',
        entranceExamDetails: 'Merit based on qualifying examination.',
        brochureSource: {
          section: '7(A)(16)',
          printedPage: 40,
          ruleNumber: 'Rule 7(A)(16)'
        }
      },
      tieBreakingRules: [
        'Higher percentage of marks in Aggregate in HSC (10+2)',
        'Higher percentage of marks in Physics in HSC (10+2)',
        'Higher percentage of marks in Chemistry in HSC (10+2)',
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Science in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'Exempt from CET',
      subjectsOrGroups: 'D.Pharm marks and experience verification',
      scoreRequirement: 'Passed D.Pharm + 4 Years Practice',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'dpharm-cert', name: 'D.Pharm Marksheets & Passing Certificate', description: 'PCI approved D.Pharm proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 40' },
      { id: 'reg-pharmacist', name: 'State Pharmacy Council Registration Certificate', description: 'Valid Registered Pharmacist certificate (e.g. MSPC registration)', requirementType: 'Required for all', sourceRef: 'Brochure Page 40, Sr. 16(iii)' },
      { id: 'experience-cert', name: 'Pharmacy Practice Experience Certificate (Min 4 Years)', description: 'Certified minimum four years experience in hospital or community pharmacy', requirementType: 'Required for all', sourceRef: 'Brochure Page 40, Sr. 16(iv)' },
      { id: 'noc-employer', name: 'No Objection Certificate (NOC) from Employer', description: 'NOC from current employer permitting study', requirementType: 'Required for all', sourceRef: 'Brochure Page 41, Sr. 16(v)' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Fill application and upload registration number, experience letter, and NOC.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Verification of clinical/community practice credentials.' },
        { stepNumber: 3, title: 'Merit & Allotment', description: 'Allotment as per D.Pharm merit.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: 'As per Schedule I & II rules.'
    },
    faqs: [
      { question: 'How much experience is required for B.Pharm (Practice)?', answer: 'A minimum of 4 years of pharmacy practice experience in a community or hospital pharmacy after registration is strictly mandatory (Brochure page 40).' }
    ],
    brochureSource: {
      section: '7(A)(16)',
      printedPage: 40,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 16'
    }
  },

  // ==========================================
  // 8. First Year Pharm. D.
  // ==========================================
  {
    id: 'pharm-d-first-year',
    slug: 'pharm-d-first-year',
    title: 'First Year Doctor of Pharmacy (Pharm. D.)',
    abbreviation: 'Pharm. D.',
    level: 'UG',
    entryType: 'First Year',
    duration: '6 Years',
    category: 'Pharmacy',
    qualifyingExam: 'HSC (10+2) with Physics, Chemistry & Maths/Biology OR D.Pharm.',
    overview: 'Full-time six-year doctoral professional pharmacy program including 5 years of study and 1 year of clinical internship/residency.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics or Biology; OR Passed D.Pharm. from a PCI approved institution under section 12.',
        mandatorySubjects: ['Physics', 'Chemistry'],
        optionalSubjects: ['Mathematics', 'Biology'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MHT-CET 2026 (PCM or PCB Group)',
        entranceExamDetails: 'Must have appeared in all subjects and obtained non-zero score in MHT-CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(8)',
          printedPage: 28,
          ruleNumber: 'Rule 7(A)(8)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with Physics, Chemistry & Maths/Biology OR D.Pharm.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'NEET 2026 OR MHT-CET 2026',
        entranceExamDetails: 'Non-zero positive score in NEET or non-zero in MHT-CET 2026. Preference given to NEET positive score over MHT-CET.',
        allIndiaExam: 'NEET 2026',
        brochureSource: {
          section: '7(A)(8)(2)',
          printedPage: 29,
          ruleNumber: 'Rule 7(A)(8)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with Physics and Chemistry along with Mathematics or Biology OR passed PCI-approved D.Pharm.',
        sourceRef: 'Brochure Page 30'
      },
      tieBreakingRules: [
        'Higher marks or score in Mathematics or Biology in CET',
        'Higher marks or score in Physics in CET',
        'Higher marks or score in Chemistry in CET',
        'Higher percentage of marks in Physics, Mathematics or Biology and Chemistry in Board examination',
        'Higher percentage in Mathematics/Biology in HSC',
        'Higher percentage in Physics in HSC',
        'Higher percentage in Aggregate in HSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MHT-CET 2026 (PCM or PCB)',
      alternativeExams: ['NEET 2026 (Preferred for All India seats)'],
      subjectsOrGroups: 'Physics, Chemistry, Mathematics or Biology',
      scoreRequirement: 'Non-zero score in MHT-CET or positive score in NEET',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Birth and basic education proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc-dpharm', name: 'HSC / D.Pharm Marksheet', description: 'Qualifying exam proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'cet-neet', name: 'MHT-CET / NEET Scorecard', description: 'Scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'Passport / LC / Domicile', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Online Registration', description: 'Register on State CET Cell portal.' },
        { stepNumber: 2, title: 'Document Scrutiny', description: 'Verify original documents at FC.' },
        { stepNumber: 3, title: 'CAP Rounds', description: 'Participate in CAP allotment stages I–IV.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For NEET only)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'Supernumerary seats under TFWS available for Maharashtra candidates with income < Rs 8 Lakh (Brochure p. 12).',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'What is the duration of Pharm. D.?', answer: 'Pharm. D. is a 6-year full time program consisting of 5 years of academic study and 1 year of clinical internship (Brochure page 28).' }
    ],
    brochureSource: {
      section: '7(A)(8)',
      printedPage: 28,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 8'
    }
  },

  // ==========================================
  // 9. First Year B.Arch.
  // ==========================================
  {
    id: 'b-arch-first-year',
    slug: 'b-arch-first-year',
    title: 'First Year Bachelor of Architecture (B.Arch.)',
    abbreviation: 'B.Arch.',
    level: 'UG',
    entryType: 'First Year',
    duration: '5 Years',
    category: 'Architecture',
    qualifyingExam: '10+2 with Physics & Maths OR 10+3 Diploma with Maths',
    overview: 'Full-time five-year undergraduate professional architecture degree recognized by Council of Architecture (CoA).',
    eligibility: {
      maharashtraState: {
        qualification: 'Passed 10+2 or equivalent with Physics and Mathematics as compulsory subjects along with either Chemistry/Biology/Tech Vocational/CS/IT/Informatics/Engg Graphics/Business Studies with at least 45% marks (40% for MS reserved/EWS/PwD); OR Passed 10+3 Diploma with Mathematics as compulsory subject with at least 45% marks (40% for MS reserved/EWS/PwD); AND QUALIFIED AN APTITUDE TEST IN ARCHITECTURE.',
        mandatorySubjects: ['Physics', 'Mathematics'],
        optionalSubjects: ['Chemistry', 'Biology', 'Technical Vocational', 'Computer Science', 'IT', 'Informatics Practices', 'Engineering Graphics', 'Business Studies'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'NATA 2026 OR JEE (Main) Paper 2 (B.Arch)',
        entranceExamDetails: 'Candidate needs to qualify an aptitude test in architecture conducted either by Council of Architecture (NATA) or by NTA (JEE Main Paper 2).',
        brochureSource: {
          section: '7(A)(9)',
          printedPage: 30,
          ruleNumber: 'Rule 7(A)(9)'
        }
      },
      allIndia: {
        qualification: 'Same 10+2 or 10+3 diploma criteria as Maharashtra State candidates; Qualified NATA or JEE Main Paper 2.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'NATA 2026 OR JEE Main Paper 2',
        entranceExamDetails: 'Qualified score in NATA or JEE (Main) Paper 2.',
        allIndiaExam: 'NATA / JEE Main Paper 2',
        brochureSource: {
          section: '7(A)(9)',
          printedPage: 30,
          ruleNumber: 'Rule 7(A)(9)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with Physics and Mathematics (min 45%) OR 10+3 Diploma with Mathematics (min 45%) and qualified NATA or JEE Main Paper 2.',
        sourceRef: 'Brochure Page 31'
      },
      tieBreakingRules: [
        'Higher marks in National Aptitude Test in Architecture (NATA)',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of aggregate marks in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'NATA 2026 (Council of Architecture)',
      alternativeExams: ['JEE (Main) Paper 2 (B.Arch/B.Planning conducted by NTA)'],
      subjectsOrGroups: 'Architectural Aptitude, Drawing, Mathematics/Cognitive skills',
      scoreRequirement: 'Qualified score in NATA 2026 or JEE Main Paper 2',
      officialExamPortal: 'https://nata.in / https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc-diploma', name: 'HSC / 10+3 Diploma Marksheet', description: 'Proof of 45% (40% reserved) with Physics & Mathematics', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nata-scorecard', name: 'NATA / JEE Paper 2 Score Card', description: 'Mandatory aptitude test qualified scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Nationality Certificate', description: 'Indian citizenship proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'domicile', name: 'Domicile Certificate', description: 'For Maharashtra State seats', requirementType: 'Candidature specific', sourceRef: 'Brochure Page 93' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Application', description: 'Enter qualifying marks and NATA/JEE Paper 2 score.' },
        { stepNumber: 2, title: 'Document Verification', description: 'Verification at FC / ARC.' },
        { stepNumber: 3, title: 'Merit Calculation', description: 'Composite merit as prescribed by CoA and CET Cell.' },
        { stepNumber: 4, title: 'CAP Allotment', description: 'Rounds I to IV seat allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions (includes 5% NRI quota where approved).',
      minorityQuota: 'Minimum 51% in Unaided Minority Institutions.'
    },
    faqs: [
      { question: 'Is NATA mandatory for B.Arch. admission?', answer: 'Either NATA conducted by Council of Architecture or JEE (Main) Paper 2 conducted by NTA is mandatory. Without qualifying one of these, a candidate cannot be admitted (Brochure page 30-31).' },
      { question: 'Can 10+3 Diploma students apply for B.Arch?', answer: 'Yes. Candidates passing a 10+3 Diploma Examination with Mathematics as a compulsory subject and at least 45% marks (40% for reserved) are eligible provided they qualify NATA/JEE Paper 2 (Brochure page 30).' }
    ],
    brochureSource: {
      section: '7(A)(9)',
      printedPage: 30,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 9'
    }
  },

  // ==========================================
  // 10. Bachelor of Planning (B.Planning)
  // ==========================================
  {
    id: 'b-planning-first-year',
    slug: 'b-planning-first-year',
    title: 'Bachelor of Planning (B.Planning)',
    abbreviation: 'B.Planning',
    level: 'UG',
    entryType: 'First Year',
    duration: '4 Years',
    category: 'Planning',
    qualifyingExam: '10+2 with Mathematics compulsory + 2 specified subjects OR D.Voc.',
    overview: 'Full-time four-year undergraduate professional degree in urban, regional, and environmental planning.',
    eligibility: {
      maharashtraState: {
        qualification: 'Passed 10+2 examination with Mathematics as compulsory subject along with any two subjects out of Physics/Chemistry/CS/Electronics/IT/Biology/Informatics/Biotech/Tech Vocational/Agri/Engg Graphics/Business Studies/Entrepreneurship with at least 45% marks (40% for MS reserved/EWS/PwD); OR Passed D.Voc. Stream in same/allied sector; AND appeared in MHT-CET 2026.',
        mandatorySubjects: ['Mathematics'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MHT-CET 2026',
        entranceExamDetails: 'Appeared in all subjects and obtained non-zero score in MHT-CET 2026. (Note: Candidates without CET are eligible for institute level seats only, with preference to CET appeared).',
        brochureSource: {
          section: '7(A)(10)',
          printedPage: 31,
          ruleNumber: 'Rule 7(A)(10)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with Mathematics and 2 prescribed subjects with 45% (40% reserved) OR D.Voc.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'JEE (Main) B.Planning OR MHT-CET 2026',
        entranceExamDetails: 'Obtained non-zero positive score in JEE (Main) B.Planning or non-zero in MHT-CET 2026. Preference given to JEE Main B.Planning over MHT-CET.',
        allIndiaExam: 'JEE (Main) B.Planning',
        brochureSource: {
          section: '7(A)(10)(2)',
          printedPage: 32,
          ruleNumber: 'Rule 7(A)(10)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with Mathematics compulsory + 2 subjects with at least 45% aggregate.',
        sourceRef: 'Brochure Page 33'
      },
      tieBreakingRules: [
        'Candidates passing 10+2 + CET given 1st preference; D.Voc. 2nd; 10+2 without CET 3rd',
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MHT-CET 2026',
      alternativeExams: ['JEE (Main) B.Planning (Preferred for All India)'],
      subjectsOrGroups: 'Mathematics + Physics/Chemistry/other subjects',
      scoreRequirement: 'Non-zero score in MHT-CET or positive in JEE Main B.Planning',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Proof of age and tie-breaker', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: 'Marksheet with Mathematics compulsory', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'cet-score', name: 'MHT-CET / JEE B.Planning Score Card', description: 'Entrance test scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Certificate', description: 'Nationality proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Online registration on CET Cell portal.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Document verification at FC.' },
        { stepNumber: 3, title: 'CAP Rounds', description: 'Option filling and computerized seat allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For JEE only candidates)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS seats available up to 5% of sanctioned intake for Maharashtra State candidates with income < Rs 8 Lakh (Brochure p. 12).',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'Is Chemistry mandatory for B.Planning?', answer: 'No. Only Mathematics is compulsory, along with any two subjects from the approved list (Physics, Chemistry, Computer Science, Electronics, IT, Biology, etc.) (Brochure page 31).' }
    ],
    brochureSource: {
      section: '7(A)(10)',
      printedPage: 31,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 10'
    }
  },

  // ==========================================
  // 11. Bachelor of Design (B.Design)
  // ==========================================
  {
    id: 'b-design-first-year',
    slug: 'b-design-first-year',
    title: 'First Year Bachelor of Design (B.Design)',
    abbreviation: 'B.Design',
    level: 'UG',
    entryType: 'First Year',
    duration: '4 Years',
    category: 'Design',
    qualifyingExam: 'Passed 10+2 Examination OR D.Voc. stream',
    overview: 'Full-time four-year undergraduate program in industrial, visual communication, interaction, and product design.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination with at least 45% marks in aggregate (40% for MS reserved/EWS/PwD); OR Passed D.Voc. Stream in same/allied sector; AND obtained non-zero score in MAH-B.Design CET 2026.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MAH-B.Design CET 2026',
        entranceExamDetails: 'Candidate must have appeared and obtained non-zero score in MAH-B.Design CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(15)',
          printedPage: 39,
          ruleNumber: 'Rule 7(A)(15)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with at least 45% marks (40% for MS reserved/EWS/PwD) OR D.Voc.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'UCEED 2026 OR MAH-B.Design CET 2026',
        entranceExamDetails: 'Obtained non-zero positive score in UCEED (conducted by IIT) OR non-zero score in MAH-B.Design CET 2026. Preference given to UCEED over MAH-B.Design CET.',
        allIndiaExam: 'UCEED 2026',
        brochureSource: {
          section: '7(A)(15)(2)',
          printedPage: 39,
          ruleNumber: 'Rule 7(A)(15)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 examination with at least 45% marks in aggregate.',
        sourceRef: 'Brochure Page 40'
      },
      tieBreakingRules: [
        'Higher percentage of marks in Aggregate in HSC or 10+2 Examination',
        'Higher percentage of marks in Aggregate in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-B.Design CET 2026',
      alternativeExams: ['UCEED 2026 (IIT)'],
      subjectsOrGroups: 'Design Aptitude, Visual Perception, Observation & Creativity',
      scoreRequirement: 'Non-zero score in MAH-B.Design CET or positive in UCEED',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: 'Proof of 45% marks in aggregate', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'design-score', name: 'MAH-B.Design CET / UCEED Score Card', description: 'Design entrance scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'Passport / LC / Domicile', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Online application on CET Cell design portal.' },
        { stepNumber: 2, title: 'Document Scrutiny', description: 'Online or FC document verification.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'CAP Rounds I to IV computerized allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For UCEED only candidates)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS applicable up to 5% for Maharashtra candidates with income < Rs 8 Lakh (Brochure p. 12).',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private colleges.'
    },
    faqs: [
      { question: 'Is UCEED accepted for Maharashtra Design admissions?', answer: 'Yes, for All India Candidature seats, preference is given to candidates with a positive UCEED score over MAH-B.Design CET (Brochure page 40).' }
    ],
    brochureSource: {
      section: '7(A)(15)',
      printedPage: 39,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 15'
    }
  },

  // ==========================================
  // 12. Bachelor of Hotel Management (B.HMCT)
  // ==========================================
  {
    id: 'b-hmct-first-year',
    slug: 'b-hmct-first-year',
    title: 'First Year Hotel Management and Catering Technology (B.HMCT)',
    abbreviation: 'B.HMCT',
    level: 'UG',
    entryType: 'First Year',
    duration: '4 Years',
    category: 'Hotel Management',
    qualifyingExam: 'Passed 10+2 Examination OR D.Voc. Stream',
    overview: 'Full-time four-year undergraduate professional degree program in hospitality, culinary arts, and hotel administration.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination or equivalent with at least 45% marks in aggregate (40% for MS reserved/EWS/PwD); OR Passed D.Voc. Stream in same/allied sector; AND obtained non-zero score in MAH-B.HMCT-CET 2026.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MAH-B.HMCT-CET 2026',
        entranceExamDetails: 'Obtained non-zero score in MAH-B.HMCT-CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(12)',
          printedPage: 36,
          ruleNumber: 'Rule 7(A)(12)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with 45% (40% reserved) OR D.Voc.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'NCHM JEE 2026 OR MAH-B.HMCT-CET 2026',
        entranceExamDetails: 'Non-zero positive score in NCHM JEE (conducted by NTA) OR non-zero score in MAH-B.HMCT-CET 2026. Preference given to NCHM JEE over MAH-B.HMCT-CET.',
        allIndiaExam: 'NCHM JEE',
        brochureSource: {
          section: '7(A)(12)(2)',
          printedPage: 37,
          ruleNumber: 'Rule 7(A)(12)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 examination with at least 45% marks in aggregate.',
        sourceRef: 'Brochure Page 37'
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-B.HMCT-CET 2026',
      alternativeExams: ['NCHM JEE (National Council for Hotel Management)'],
      subjectsOrGroups: 'English Language, Reasoning, General Knowledge, Hospitality Aptitude',
      scoreRequirement: 'Non-zero score in MAH-B.HMCT-CET or positive in NCHM JEE',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: 'Marksheet with 45% (40% reserved)', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hmct-cet', name: 'MAH-B.HMCT-CET / NCHM JEE Scorecard', description: 'Entrance scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'LC / Passport / Domicile', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Submit details on CET Cell portal.' },
        { stepNumber: 2, title: 'Verification', description: 'Document verification at FC / online.' },
        { stepNumber: 3, title: 'CAP Rounds', description: 'CAP Rounds I to IV seat allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For NCHM JEE only)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS supernumerary seats up to 5% for MS candidates with parental income < Rs 8 Lakh (Brochure p. 12).',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'Is NCHM JEE valid for B.HMCT in Maharashtra?', answer: 'Yes, All India candidates with a valid NCHM JEE score can apply, and they receive preference over MAH-B.HMCT-CET candidates on All India seats (Brochure page 37).' }
    ],
    brochureSource: {
      section: '7(A)(12)',
      printedPage: 36,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 12'
    }
  },

  // ==========================================
  // 13. Direct Second Year B.HMCT
  // ==========================================
  {
    id: 'dse-bhmct',
    slug: 'dse-bhmct',
    title: 'Direct Second Year Hotel Management and Catering Technology (B.HMCT Lateral Entry)',
    abbreviation: 'DSE B.HMCT',
    level: 'Lateral Entry',
    entryType: 'Direct Second Year',
    duration: '3 Years',
    category: 'Hotel Management',
    qualifyingExam: 'Diploma in Hotel Management and Catering Technology',
    overview: 'Lateral entry directly into the second year (3rd semester) of 4-year B.HMCT program for hospitality diploma holders.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed minimum 3 years or 2 years (Lateral Entry) Diploma Course in Hotel Management and Catering Technology with at least 45% marks (40% for MS reserved/EWS/PwD) from AICTE or Central/State Government approved institution or equivalent.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Diploma Marks Merit (No CET required)',
        entranceExamDetails: 'Merit list prepared strictly on the basis of marks obtained in qualifying Diploma examination awarded by examining authority.',
        brochureSource: {
          section: '7(A)(14)',
          printedPage: 39,
          ruleNumber: 'Rule 7(A)(14)'
        }
      },
      allIndia: {
        qualification: 'Passed 3-year or 2-year lateral entry Diploma in HMCT with at least 45% marks (40% reserved).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Diploma Marks Merit',
        entranceExamDetails: 'Diploma marks based merit.',
        brochureSource: {
          section: '7(A)(14)',
          printedPage: 39,
          ruleNumber: 'Rule 7(A)(14)'
        }
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'Exempt from CET (Diploma Merit)',
      subjectsOrGroups: 'Diploma in HMCT',
      scoreRequirement: 'Min 45% (40% reserved)',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hmct-diploma', name: 'Diploma in HMCT Marksheets & Passing Cert', description: 'Proof of AICTE/Govt approved HMCT diploma', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'LC / Passport / Domicile', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Registration', description: 'Online application with diploma marks.' },
        { stepNumber: 2, title: 'Verification & Merit', description: 'FC verification and final merit list publication.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'Option filling and seat allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: 'No institutional quota in unaided colleges (100% CAP seats).',
      exceptions: ['Lateral entry seats = 10% of sanctioned intake + vacant seats of first year (Brochure p. 103).']
    },
    faqs: [
      { question: 'Is CET required for Direct Second Year B.HMCT?', answer: 'No. Admission is granted on the basis of marks obtained in the qualifying Diploma examination (Brochure page 39).' }
    ],
    brochureSource: {
      section: '7(A)(14)',
      printedPage: 39,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 14'
    }
  },

  // ==========================================
  // 14. BCA First Year
  // ==========================================
  {
    id: 'bca-first-year',
    slug: 'bca-first-year',
    title: 'Bachelor of Computer Application (BCA)',
    abbreviation: 'BCA',
    level: 'UG',
    entryType: 'First Year',
    duration: '3/4 Years',
    category: 'Computer Applications',
    qualifyingExam: 'Passed 10+2 as per Affiliating University Policy OR Diploma in Commercial Practice',
    overview: 'Full-time 3-year or 4-year (Honours/Research under NEP) undergraduate degree in computer applications, programming, and software systems.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination with eligibility as per the Admission Policy of the Affiliating University; OR Passed AICTE approved Diploma in Commercial Practice or equivalent; AND obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET-2026 OR MHT-CET-2026 (PCM or PCB Group).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MAH-BCA/BBA/BMS/BBM CET 2026 OR MHT-CET 2026 (PCM/PCB)',
        entranceExamDetails: 'Obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET-2026 or MHT-CET-2026. (Note: MAH-CET candidates are considered first; if seats remain vacant, MHT-CET PCM/PCB candidates are considered with preference to PCM).',
        brochureSource: {
          section: '7(A)(17)',
          printedPage: 41,
          ruleNumber: 'Rule 7(A)(17)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 as per university policy OR AICTE approved Diploma in Commercial Practice.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'CUET (UG) 2026 OR MAH-BCA/BBA/BMS/BBM CET 2026 OR MHT-CET 2026',
        entranceExamDetails: 'Non-zero positive score in CUET (UG) or non-zero in MAH CET. Preference given to CUET (UG) positive score over MAH CET.',
        allIndiaExam: 'CUET (UG)',
        brochureSource: {
          section: '7(A)(17)(2)',
          printedPage: 41,
          ruleNumber: 'Rule 7(A)(17)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 as per university policy OR AICTE approved Diploma in Commercial Practice.',
        sourceRef: 'Brochure Page 42'
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-BCA/BBA/BMS/BBM CET 2026',
      alternativeExams: ['MHT-CET 2026 (PCM or PCB Group)', 'CUET (UG) for All India'],
      subjectsOrGroups: 'English, Reasoning, General Knowledge, Computer Concepts',
      scoreRequirement: 'Non-zero score in MAH CET or positive score in CUET UG',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC / Diploma in Commercial Practice Marksheet', description: 'Qualifying examination marksheet', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'cet-score', name: 'MAH CET / MHT-CET / CUET Score Card', description: 'Valid entrance examination scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'LC / Passport / Domicile', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Register on State CET Cell BCA/BBA portal.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Verification of documents online or at FC.' },
        { stepNumber: 3, title: 'CAP Option Filling & Allotment', description: 'Up to 300 choices submitted across CAP rounds.' }
      ],
      applicationFeeGeneral: 'Included in CET / ₹ 1300/- for CUET only',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'Up to 5% supernumerary TFWS seats for candidates with parental income < Rs 8 Lakh.',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'Can I get admission to BCA using MHT-CET score?', answer: 'Yes. The brochure specifies that if seats remain vacant after exhausting MAH-BCA/BBA/BMS/BBM CET candidates, candidates with MHT-CET (PCM or PCB) will be considered, with preference to PCM (Brochure page 41 & 68).' }
    ],
    brochureSource: {
      section: '7(A)(17)',
      printedPage: 41,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 17'
    }
  },

  // ==========================================
  // 15. BBA / BMS / BBM First Year
  // ==========================================
  {
    id: 'bba-bms-bbm-first-year',
    slug: 'bba-bms-bbm-first-year',
    title: 'Under Graduate Courses in Management (BBA / BMS / BBM etc.)',
    abbreviation: 'BBA / BMS / BBM',
    level: 'UG',
    entryType: 'First Year',
    duration: '3/4 Years',
    category: 'Management',
    qualifyingExam: 'Passed 10+2 examination as per Affiliating University Policy',
    overview: 'Full-time undergraduate professional management programs including Bachelor of Business Administration (BBA), Bachelor of Management Studies (BMS), and Bachelor of Business Management (BBM).',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination with eligibility as per the Admission Policy of the Affiliating University; AND obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET-2026 OR MHT-CET-2026 (PCM or PCB Group).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MAH-BCA/BBA/BMS/BBM CET 2026 OR MHT-CET 2026',
        entranceExamDetails: 'Obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET-2026 or MHT-CET-2026. (Preference to MAH-CET; vacant seats to MHT-CET PCM then PCB).',
        brochureSource: {
          section: '7(A)(19)',
          printedPage: 43,
          ruleNumber: 'Rule 7(A)(19)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 as per university policy.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'CUET (UG) 2026 OR MAH-BCA/BBA/BMS/BBM CET 2026 OR MHT-CET 2026',
        entranceExamDetails: 'Non-zero positive score in CUET (UG) or non-zero in MAH CET. Preference given to CUET (UG) positive score over MAH CET.',
        allIndiaExam: 'CUET (UG)',
        brochureSource: {
          section: '7(A)(19)(2)',
          printedPage: 44,
          ruleNumber: 'Rule 7(A)(19)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with eligibility as per the Affiliating University admission policy.',
        sourceRef: 'Brochure Page 44'
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-BCA/BBA/BMS/BBM CET 2026',
      alternativeExams: ['MHT-CET 2026 (PCM or PCB)', 'CUET (UG) for All India'],
      subjectsOrGroups: 'English, Reasoning, General Knowledge, Numerical Aptitude',
      scoreRequirement: 'Non-zero score in MAH CET or positive in CUET UG',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC (10+2) Marksheet', description: 'Qualifying examination marksheet', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'cet-score', name: 'CET Score Card', description: 'MAH CET / MHT-CET / CUET Score Card', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'LC / Passport / Domicile', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Register on State CET Cell portal.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Verify documents online or at FC.' },
        { stepNumber: 3, title: 'Option Filling & CAP Allotment', description: 'Participate in CAP rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For CUET only candidates)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS supernumerary seats up to 5% for MS candidates with parental income < Rs 8 Lakh.',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'Is Mathematics in 10+2 mandatory for BBA/BMS?', answer: 'The brochure states: "passed 10+2 examination with eligibility as per the Admission Policy of the Affiliating University". Candidates should verify whether their specific target university mandates Mathematics (Brochure page 43).' }
    ],
    brochureSource: {
      section: '7(A)(19)',
      printedPage: 43,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 19'
    }
  },

  // ==========================================
  // 16. M.E. / M.Tech. Integrated (5 Years)
  // ==========================================
  {
    id: 'me-mtech-integrated',
    slug: 'me-mtech-integrated',
    title: 'Master of Engineering and Technology (Integrated) [M.E. / M.Tech. Integrated]',
    abbreviation: 'M.Tech. Integrated',
    level: 'Integrated',
    entryType: 'First Year',
    duration: '5 Years',
    category: 'Engineering',
    qualifyingExam: '10+2 with Physics & Maths OR Diploma in Engineering',
    overview: 'Dual degree five-year integrated master’s program combining Bachelor of Technology and Master of Technology degrees seamlessly upon completion of 10+2.',
    eligibility: {
      maharashtraState: {
        qualification: 'Passed 10+2 with Physics and Mathematics as compulsory subjects along with Chemistry/Biotech/Biology/CS/IT/Informatics/Agri/Engg Graphics/Business/Electronics/Entrepreneurship with at least 45% marks (40% for MS reserved/EWS/PwD); OR 3-year Diploma in Engg with 45% (40% reserved); AND obtained non-zero score in PCM MHT-CET 2026. (Physics + Chemistry + Biology CET valid for 9 specific disciplines).',
        mandatorySubjects: ['Physics', 'Mathematics'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MHT-CET 2026 (PCM Group)',
        entranceExamDetails: 'Non-zero score in PCM MHT-CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(2)',
          printedPage: 21,
          ruleNumber: 'Rule 7(A)(2)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with Physics and Mathematics with 45% (40% reserved) OR Diploma in Engineering.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'JEE (Main) B.E./B.Tech OR MHT-CET 2026 (PCM)',
        entranceExamDetails: 'Non-zero positive score in JEE (Main) Paper 1 or MHT-CET. Preference given to JEE Main.',
        allIndiaExam: 'JEE (Main) Paper 1',
        brochureSource: {
          section: '7(A)(2)(2)',
          printedPage: 22,
          ruleNumber: 'Rule 7(A)(2)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with Physics and Mathematics with at least 45% marks in aggregate.',
        sourceRef: 'Brochure Page 24'
      },
      tieBreakingRules: [
        'Higher marks or score in Mathematics at CET',
        'Higher marks or score in Physics at CET',
        'Higher marks or score in Chemistry at CET',
        'Higher percentage in Board PCM taken together',
        'Higher percentage in Mathematics at HSC',
        'Higher percentage in Physics at HSC',
        'Higher percentage in Aggregate at HSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MHT-CET 2026 (PCM Group)',
      alternativeExams: ['JEE (Main) Paper 1'],
      subjectsOrGroups: 'Physics, Chemistry, Mathematics',
      scoreRequirement: 'Non-zero score in MHT-CET or positive in JEE Main',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Proof of age', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: 'Physics and Mathematics marks', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'scorecard', name: 'MHT-CET / JEE Main Scorecard', description: 'Scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Nationality Certificate', description: 'Indian citizenship proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Registration', description: 'Apply online on CET Cell portal.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Verify documents at Facilitation Centre.' },
        { stepNumber: 3, title: 'Allotment', description: 'CAP Rounds I to IV.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For JEE only)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS supernumerary seats up to 5% available (Brochure p. 12).',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'What is the duration of Integrated M.Tech?', answer: 'The program is 5 years in duration and awards an integrated Master of Technology upon graduation (Brochure page 21).' }
    ],
    brochureSource: {
      section: '7(A)(2)',
      printedPage: 21,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG/Integrated, Sr. 2'
    }
  },

  // ==========================================
  // 17. Master of Planning Integrated (5 Years)
  // ==========================================
  {
    id: 'm-planning-integrated',
    slug: 'm-planning-integrated',
    title: 'Master of Planning (M.Planning Integrated)',
    abbreviation: 'M.Plan Integrated',
    level: 'Integrated',
    entryType: 'First Year',
    duration: '5 Years',
    category: 'Planning',
    qualifyingExam: '10+2 with Mathematics compulsory + 2 specified subjects',
    overview: 'Five-year continuous integrated master’s degree in urban and regional physical planning.',
    eligibility: {
      maharashtraState: {
        qualification: 'Passed 10+2 examination with Mathematics as compulsory subject along with any two specified subjects with at least 45% marks in aggregate (40% for MS reserved/EWS/PwD); AND appeared in MHT-CET 2026.',
        mandatorySubjects: ['Mathematics'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MHT-CET 2026',
        entranceExamDetails: 'Non-zero score in MHT-CET 2026.',
        brochureSource: {
          section: '7(A)(11)',
          printedPage: 34,
          ruleNumber: 'Rule 7(A)(11)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with Mathematics and 2 specified subjects with 45% (40% reserved).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'JEE (Main) B.Planning OR MHT-CET 2026',
        entranceExamDetails: 'Non-zero positive score in JEE (Main) B.Planning or MHT-CET. Preference given to JEE Main.',
        allIndiaExam: 'JEE (Main) B.Planning',
        brochureSource: {
          section: '7(A)(11)(2)',
          printedPage: 35,
          ruleNumber: 'Rule 7(A)(11)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with Mathematics and 2 specified subjects with min 45% marks.',
        sourceRef: 'Brochure Page 36'
      },
      tieBreakingRules: [
        'Preference: 10+2 with CET > D.Voc > 10+2 without CET',
        'Higher percentage in SSC',
        'Higher percentage in Mathematics in SSC',
        'Higher percentage in Science in SSC',
        'Higher percentage in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MHT-CET 2026',
      alternativeExams: ['JEE (Main) B.Planning'],
      subjectsOrGroups: 'Mathematics + 2 specified subjects',
      scoreRequirement: 'Non-zero score',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: '10+2 mark sheet', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'scorecard', name: 'MHT-CET / JEE Score Card', description: 'Scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Registration', description: 'Online CAP registration.' },
        { stepNumber: 2, title: 'Verification', description: 'Document scrutiny at FC.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'CAP allotment rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'What is the duration of M.Planning (Integrated)?', answer: 'The duration is 5 years, starting directly after 10+2 (Brochure page 34).' }
    ],
    brochureSource: {
      section: '7(A)(11)',
      printedPage: 34,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG/Integrated, Sr. 11'
    }
  },

  // ==========================================
  // 18. M.HMCT Integrated (5 Years)
  // ==========================================
  {
    id: 'm-hmct-integrated',
    slug: 'm-hmct-integrated',
    title: 'Master of Hotel Management and Catering Technology (Integrated) [M.HMCT Integrated]',
    abbreviation: 'M.HMCT Integrated',
    level: 'Integrated',
    entryType: 'First Year',
    duration: '5 Years',
    category: 'Hotel Management',
    qualifyingExam: 'Passed 10+2 Examination or its equivalent',
    overview: 'Five-year continuous integrated master’s degree in hospitality, hotel management, and catering technology.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination or its equivalent and obtained at least 45% marks in aggregate (40% for MS reserved/EWS/PwD); AND obtained non-zero score in MAH-B.HMCT-CET 2026.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MAH-B.HMCT-CET 2026',
        entranceExamDetails: 'Obtained non-zero score in MAH-B.HMCT-CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(13)',
          printedPage: 38,
          ruleNumber: 'Rule 7(A)(13)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with 45% marks in aggregate (40% for MS reserved/EWS/PwD).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'NCHM JEE 2026 OR MAH-B.HMCT-CET 2026',
        entranceExamDetails: 'Non-zero positive score in NCHM JEE or non-zero in MAH-B.HMCT-CET. Preference to NCHM JEE.',
        allIndiaExam: 'NCHM JEE',
        brochureSource: {
          section: '7(A)(13)(2)',
          printedPage: 38,
          ruleNumber: 'Rule 7(A)(13)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 examination with at least 45% marks in aggregate.',
        sourceRef: 'Brochure Page 38'
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-B.HMCT-CET 2026',
      alternativeExams: ['NCHM JEE'],
      subjectsOrGroups: 'Hospitality Aptitude, English, Reasoning, GK',
      scoreRequirement: 'Non-zero score',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: '10+2 marksheet', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'scorecard', name: 'CET / NCHM JEE Scorecard', description: 'Entrance scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Registration', description: 'Register on CET Cell portal.' },
        { stepNumber: 2, title: 'Scrutiny & Merit', description: 'Document verification and merit list.' },
        { stepNumber: 3, title: 'CAP Rounds', description: 'CAP allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'Which CET is needed for M.HMCT Integrated?', answer: 'The undergraduate MAH-B.HMCT-CET 2026 is used for First Year of M.HMCT (Integrated) (Brochure page 38).' }
    ],
    brochureSource: {
      section: '7(A)(13)',
      printedPage: 38,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG/Integrated, Sr. 13'
    }
  },

  // ==========================================
  // 19. MCA Integrated (4 Years)
  // ==========================================
  {
    id: 'mca-integrated',
    slug: 'mca-integrated',
    title: 'Master of Computer Application (Integrated Course) [MCA Integrated]',
    abbreviation: 'MCA Integrated',
    level: 'Integrated',
    entryType: 'First Year',
    duration: '4 Years',
    category: 'Computer Applications',
    qualifyingExam: '10+2 with Mathematics or Statistics or Accountancy',
    overview: 'Four-year integrated master’s degree in computer applications directly following 10+2, incorporating advanced software development, data structures, and computer applications.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination with Mathematics or Statistics or Accountancy as compulsory subjects with at least 45% marks in aggregate (40% for MS reserved/EWS/PwD); AND obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET-2026.',
        mandatorySubjects: ['Mathematics or Statistics or Accountancy'],
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MAH-BCA/BBA/BMS/BBM CET 2026',
        entranceExamDetails: 'Candidate must have appeared and obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(18)',
          printedPage: 42,
          ruleNumber: 'Rule 7(A)(18)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with Mathematics/Statistics/Accountancy with at least 45% marks (40% reserved).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'CUET (UG) 2026 OR MAH-BCA/BBA/BMS/BBM CET 2026',
        entranceExamDetails: 'Non-zero positive score in CUET (UG) or non-zero in MAH CET. Preference given to CUET (UG) over MAH CET.',
        allIndiaExam: 'CUET (UG)',
        brochureSource: {
          section: '7(A)(18)(2)',
          printedPage: 42,
          ruleNumber: 'Rule 7(A)(18)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 with Mathematics, Statistics, or Accountancy with at least 45% marks in aggregate.',
        sourceRef: 'Brochure Page 43'
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-BCA/BBA/BMS/BBM CET 2026',
      alternativeExams: ['CUET (UG) 2026 (for All India candidates)'],
      subjectsOrGroups: 'Mathematics/Statistics/Accountancy compulsory at 10+2',
      scoreRequirement: 'Non-zero score in MAH CET or positive in CUET UG',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: 'Proof of Mathematics, Statistics, or Accountancy at 10+2', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'cet-score', name: 'CET Score Card', description: 'MAH CET / CUET Score Card', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'Nationality document', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Submit marks and CET details online.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Verify documents at FC or online.' },
        { stepNumber: 3, title: 'Option Filling & Allotment', description: 'CAP Rounds I to IV.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For CUET only candidates)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS supernumerary seats up to 5% for MS candidates with parental income < Rs 8 Lakh.',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'Is Mathematics mandatory for MCA Integrated?', answer: 'Mathematics OR Statistics OR Accountancy must be one of the compulsory subjects at the 10+2 level with at least 45% marks (40% for reserved) (Brochure page 42).' }
    ],
    brochureSource: {
      section: '7(A)(18)',
      printedPage: 42,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG/Integrated, Sr. 18'
    }
  },

  // ==========================================
  // 20. MBA Integrated (4 Years)
  // ==========================================
  {
    id: 'mba-integrated',
    slug: 'mba-integrated',
    title: 'Master of Business Administration (Integrated Course) [MBA Integrated]',
    abbreviation: 'MBA Integrated',
    level: 'Integrated',
    entryType: 'First Year',
    duration: '4 Years',
    category: 'Management',
    qualifyingExam: 'Passed 10+2 Examination',
    overview: 'Four-year continuous integrated master’s degree in management administration directly from 10+2.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed 10+2 examination and obtained at least 45% marks in aggregate (40% for MS reserved/EWS/PwD); AND appeared and obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET 2026.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'MAH-BCA/BBA/BMS/BBM CET 2026',
        entranceExamDetails: 'Obtained non-zero score in MAH-BCA/BBA/BMS/BBM CET-2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(A)(20)',
          printedPage: 44,
          ruleNumber: 'Rule 7(A)(20)'
        }
      },
      allIndia: {
        qualification: 'Passed 10+2 with at least 45% marks in aggregate (40% reserved).',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'CUET (UG) 2026 OR MAH-BCA/BBA/BMS/BBM CET 2026',
        entranceExamDetails: 'Non-zero positive score in CUET (UG) or non-zero in MAH CET. Preference given to CUET (UG) over MAH CET.',
        allIndiaExam: 'CUET (UG)',
        brochureSource: {
          section: '7(A)(20)(2)',
          printedPage: 45,
          ruleNumber: 'Rule 7(A)(20)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed 10+2 examination with at least 45% marks in aggregate.',
        sourceRef: 'Brochure Page 45'
      },
      tieBreakingRules: [
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-BCA/BBA/BMS/BBM CET 2026',
      alternativeExams: ['CUET (UG) 2026'],
      subjectsOrGroups: 'English, Reasoning, General Knowledge, Numerical Aptitude',
      scoreRequirement: 'Non-zero score in MAH CET or positive in CUET UG',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'ssc', name: 'SSC Marksheet', description: 'Age and tie-breaker', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc', name: 'HSC Marksheet', description: '10+2 marksheet', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'cet-score', name: 'CET Score Card', description: 'Scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'nationality', name: 'Indian Nationality Proof', description: 'Nationality document', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Online application.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Document verification.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'CAP Rounds I to IV.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For CUET only candidates)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'What is the duration of MBA Integrated?', answer: 'The duration is 4 years as per Section 7(A)(20) of the brochure (page 44).' }
    ],
    brochureSource: {
      section: '7(A)(20)',
      printedPage: 44,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG/Integrated, Sr. 20'
    }
  },

  // ==========================================
  // 21. Working Professionals UG / Lateral Entry
  // ==========================================
  {
    id: 'working-professionals-ug',
    slug: 'working-professionals-ug',
    title: 'Lateral Entry to Courses for Working Professionals (UG / Integrated / Dual)',
    abbreviation: 'Working Pro (UG Lateral)',
    level: 'Lateral Entry',
    entryType: 'Working Professional',
    duration: 'As decided by Affiliating University',
    category: 'Special Mode',
    qualifyingExam: 'Lateral Entry Diploma/Degree + 1 Year Full Time Work Experience',
    overview: 'Special mode lateral entry into second year for working professionals employed in registered industry/organization within 50 km radial distance from the admitting institute.',
    eligibility: {
      maharashtraState: {
        qualification: 'Must fulfill qualification for Lateral Entry to Second Year of respective UG course; Working professional in Registered Industry/Org/Pvt Ltd/Public Ltd/MSME located within 50 km radial distance from the Institute; Minimum 1 Year full-time regular work experience; Proforma W1 and W2 mandatory.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Merit of Qualifying Exam',
        entranceExamDetails: 'Conducted via two centralized admission rounds for working professionals.',
        notes: [
          'Timing of classes normally in evening hours or flexible convenient timings in alignment with industry.',
          'Face-to-face regular mode as per AICTE public notice.',
          'Minimum 1/3rd approved intake required to run the course.',
          '1 seat in every institute reserved for candidates working in Central Government organizations/industries on MERIT basis.'
        ],
        brochureSource: {
          section: '7(A)(21)',
          printedPage: 46,
          ruleNumber: 'Rule 7(A)(21) & 12(p)'
        }
      },
      allIndia: {
        qualification: 'Same qualifications; must be working within 50 km radial distance from admitting institute.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Merit of Qualifying Exam',
        entranceExamDetails: 'Two centralized admission rounds.',
        brochureSource: {
          section: '7(A)(21)',
          printedPage: 46,
          ruleNumber: 'Rule 7(A)(21)'
        }
      },
      tieBreakingRules: [
        'Higher percentage in qualifying examination',
        'Higher work experience duration'
      ]
    },
    entranceExams: {
      primaryExam: 'Exempt from CET',
      subjectsOrGroups: 'Qualifying Diploma / Degree',
      scoreRequirement: 'Min 45% (40% reserved) + 1 year work experience',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'experience-w1', name: 'Experience Certificate (Proforma - W1)', description: 'Certified minimum 1 year full time regular experience with latitude/longitude of workplace', requirementType: 'Required for all', proforma: 'Proforma - W1', sourceRef: 'Brochure Page 95, 121' },
      { id: 'declaration-w2', name: 'Self Declaration (Proforma - W2)', description: 'Declaration that industry is within 50 KM radial distance and agreeing to reallocation rules', requirementType: 'Required for all', proforma: 'Proforma - W2', sourceRef: 'Brochure Page 95, 122' },
      { id: 'qual-marks', name: 'Qualifying Diploma / Degree Marksheets', description: 'Marksheets substantiating lateral entry eligibility', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Application', description: 'Submit employment details, workplace latitude/longitude, and Proforma W1/W2.' },
        { stepNumber: 2, title: 'Two CAP Rounds Only', description: 'Only 2 centralized admission rounds are conducted for working professionals (Rule 12(p)(v)).' },
        { stepNumber: 3, title: 'Re-allocation if < 1/3 Intake', description: 'If admissions in a course are < 1/3 of approved intake, candidate is reallocated to nearby institute within 50 km (Rule 12(p)(vii)).' }
      ],
      applicationFeeGeneral: 'As notified',
      applicationFeeReserved: 'As notified',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% Institutional quota in unaided colleges (Schedule II A(2)).',
      exceptions: ['Only two rounds of CAP; no betterment after Round II (Rule 11(4)(c)).']
    },
    faqs: [
      { question: 'What is the maximum distance allowed between the workplace and the college?', answer: 'The registered industry or company must be located within a 50 kilometer radial distance from the admitting institute (Brochure page 46).' },
      { question: 'How many years of experience are required?', answer: 'A minimum of ONE year of full-time or regular working experience in registered industry/MSME is required (Brochure page 46).' }
    ],
    brochureSource: {
      section: '7(A)(21)',
      printedPage: 46,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 21'
    }
  },

  // ==========================================
  // 22. Collaborative / Twinning Mode UG
  // ==========================================
  {
    id: 'ug-collaborative-twinning',
    slug: 'ug-collaborative-twinning',
    title: 'Under Graduate / Dual Degree / Integrated Courses through Collaborative / Twinning Mode',
    abbreviation: 'UG Twinning',
    level: 'UG',
    entryType: 'Collaborative/Twinning',
    duration: 'As prescribed by affiliating university / foreign partner',
    category: 'Special Mode',
    qualifyingExam: 'Same as First Year of respective UG / Dual Degree course',
    overview: 'Special degree programs offered in collaboration or twinning arrangement with national/international partner universities.',
    eligibility: {
      maharashtraState: {
        qualification: 'Eligibility for admission to First Year shall be same as admission to first year of respective professional Under Graduate / Dual Degree / Integrated Courses, plus additional norms prescribed by Appropriate Authority. Lateral entry and supernumerary seats are NOT allowed in Foreign Collaboration and Twinning Programme.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Same as respective First Year course',
        entranceExamDetails: 'MHT-CET or respective national exam as per course.',
        brochureSource: {
          section: '7(A)(22)',
          printedPage: 47,
          ruleNumber: 'Rule 7(A)(22) & 12(q)'
        }
      },
      allIndia: {
        qualification: 'Same as First Year of respective UG program.',
        minMarksGeneral: 45,
        minMarksReserved: 40,
        entranceExam: 'Respective national entrance exam',
        entranceExamDetails: 'Same as respective course.',
        brochureSource: {
          section: '7(A)(22)',
          printedPage: 47,
          ruleNumber: 'Rule 7(A)(22)'
        }
      },
      tieBreakingRules: ['Same as respective First Year course']
    },
    entranceExams: {
      primaryExam: 'Same as respective course',
      subjectsOrGroups: 'Course specific',
      scoreRequirement: 'As per respective course',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'qual-docs', name: 'Qualifying Examination Documents', description: 'Same as respective UG course', requirementType: 'Required for all', sourceRef: 'Brochure Page 47' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Application', description: 'Candidates apply to Competent Authority and institutes make admissions under Rule 13.' }
      ],
      applicationFeeGeneral: 'As notified',
      applicationFeeReserved: 'As notified',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: false,
      institutionalQuota: 'As per Rule 13 institutional admissions.',
      exceptions: ['Lateral Entry and supernumerary seats shall not be allowed in Foreign Collaboration and Twinning Programme (Rule 7(A)(22)(ii)).']
    },
    faqs: [
      { question: 'Are lateral entry seats allowed in twinning programs?', answer: 'No. Lateral Entry and supernumerary seats are strictly prohibited in Foreign Collaboration and Twinning Programmes (Brochure page 47).' }
    ],
    brochureSource: {
      section: '7(A)(22)',
      printedPage: 47,
      ruleClause: 'Section 7 Eligibility Criteria, A - UG Courses, Sr. 22'
    }
  },

  // ==========================================
  // 23. MBA / MMS First Year (2 Years)
  // ==========================================
  {
    id: 'mba-mms-first-year',
    slug: 'mba-mms-first-year',
    title: 'Post Graduate Degree Management (MBA / MMS) First Year',
    abbreviation: 'MBA / MMS',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Management',
    qualifyingExam: 'Minimum 3-year Bachelor’s Degree in any discipline',
    overview: 'Full-time two-year postgraduate degree program in business administration and management studies across marketing, finance, human resources, operations, and business analytics.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed minimum 3 year Bachelor’s Degree awarded by any UGC/AIU recognized university in any discipline with at least 50% marks in aggregate or equivalent (at least 45% for MS reserved/EWS/PwD); AND obtained non-zero score in MAH-MBA/MMS-CET 2026.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'MAH-MBA/MMS-CET 2026',
        entranceExamDetails: 'Obtained non-zero score in MAH-MBA/MMS-CET 2026 conducted by the Competent Authority.',
        brochureSource: {
          section: '7(B)(1)',
          printedPage: 48,
          ruleNumber: 'Rule 7(B)(1)'
        }
      },
      allIndia: {
        qualification: 'Minimum 3-year Bachelor’s Degree in any discipline with at least 50% marks (45% for MS reserved/EWS/PwD).',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'MAH-CET / CAT / CMAT / XAT / ATMA / MAT / GMAT',
        entranceExamDetails: 'Non-zero positive score in any of: CET conducted by Competent Authority, CAT (IIM), CMAT (NTA), XAT (XLRI), ATMA (AIMS), MAT (AIMA), or GMAT (GMAC USA).',
        allIndiaExam: 'CAT / CMAT / XAT / MAT / ATMA / GMAT',
        brochureSource: {
          section: '7(B)(1)(2)',
          printedPage: 48,
          ruleNumber: 'Rule 7(B)(1)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed minimum 3 year Bachelor’s Degree in any discipline with at least 50% marks in aggregate or equivalent.',
        sourceRef: 'Brochure Page 49'
      },
      tieBreakingRules: [
        'Higher percentile/score in CET',
        'Higher percentage of marks in HSC (10+2) or Diploma',
        'Higher percentage of marks in SSC',
        'Higher percentage of marks in Science in SSC',
        'Higher percentage of marks in Mathematics in SSC',
        'Higher percentage of marks in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-MBA/MMS-CET 2026',
      alternativeExams: ['CAT 2025/2026', 'CMAT 2026', 'XAT 2026', 'MAT', 'ATMA', 'GMAT'],
      subjectsOrGroups: 'Logical Reasoning, Abstract Reasoning, Quantitative Aptitude, Verbal Ability & Reading Comprehension',
      scoreRequirement: 'Non-zero score in MAH-CET or non-zero positive score in CAT/CMAT/XAT/MAT/ATMA/GMAT',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'graduation-marksheets', name: 'Bachelor’s Degree Marksheets (All Semesters)', description: 'Proof of min 50% aggregate (45% reserved) in graduation', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'degree-passing', name: 'Degree Passing Certificate / Provisional Degree', description: 'Degree completion proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'entrance-scorecard', name: 'MBA CET / CAT / CMAT / XAT / MAT Scorecard', description: 'Valid entrance test scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc-ssc', name: 'HSC & SSC Marksheets', description: 'Required for tie-breaking resolution', requirementType: 'Required for all', sourceRef: 'Brochure Page 67, 92' },
      { id: 'caste-validity', name: 'Caste & Validity Certificates', description: 'For Maharashtra reserved category candidates', requirementType: 'Category specific', sourceRef: 'Brochure Page 93' },
      { id: 'ncl', name: 'Non-Creamy Layer Certificate (Valid till 31.03.2027)', description: 'For OBC, SBC, VJ/NT, SEBC', requirementType: 'Category specific', sourceRef: 'Brochure Page 93' },
      { id: 'tfws', name: 'Income Certificate for TFWS (< Rs 8 Lakh)', description: 'For tuition fee waiver scheme in MBA/MMS', requirementType: 'Special / Conditional', sourceRef: 'Brochure Page 12, 95' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Register on CET Cell MBA portal with graduation details and exam scores.' },
        { stepNumber: 2, title: 'Verification', description: 'E-Scrutiny or FC document verification.' },
        { stepNumber: 3, title: 'Merit List Publication', description: 'Provisional merit list, grievance redressal, and final merit list.' },
        { stepNumber: 4, title: 'Option Form Filling', description: 'Submit preferences of up to 300 management colleges.' },
        { stepNumber: 5, title: 'CAP Allotment & Reporting', description: 'CAP Rounds I to IV computerized allotment, seat acceptance, and reporting.' }
      ],
      applicationFeeGeneral: '₹ 1300/- (For national test applicants like CAT/CMAT who did not register for MAH-CET)',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS supernumerary seats up to 5% are mandatory for MBA/MMS programs (Brochure page 12).',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions (includes 5% NRI quota where approved).',
      minorityQuota: 'Minimum 51% in Unaided Minority Institutions.'
    },
    faqs: [
      { question: 'Which national level exams are valid for MBA admission in Maharashtra?', answer: 'CAT, CMAT, XAT, MAT, ATMA, and GMAT are officially recognized for All India seats (Brochure page 49).' },
      { question: 'Is TFWS available for MBA?', answer: 'Yes, TFWS is explicitly mandatory for MBA/MMS programs up to 5% supernumerary seats for MS candidates with family income < Rs 8 Lakh (Brochure page 12).' }
    ],
    brochureSource: {
      section: '7(B)(1)',
      printedPage: 48,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 1'
    }
  },

  // ==========================================
  // 24. MBA / MMS Second Year Lateral Entry
  // ==========================================
  {
    id: 'mba-second-year-lateral',
    slug: 'mba-second-year-lateral',
    title: 'Management (MBA / MMS) Second Year (Lateral Entry)',
    abbreviation: 'MBA Lateral Entry',
    level: 'Lateral Entry',
    entryType: 'Direct Second Year',
    duration: '1 Year',
    category: 'Management',
    qualifyingExam: 'B.E. or B.Tech. OR BBA or BMS (4 Years)',
    overview: 'Direct admission to the second year of MBA / MMS programs for students who have completed a 4-year undergraduate degree in B.E., B.Tech., BBA, or BMS.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed B.E. or B.Tech. OR BBA or BMS (4 Years duration); any other eligibility criteria declared by appropriate authority.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Qualifying Examination Marks',
        entranceExamDetails: 'Admission carried out based on marks or score secured in qualifying examination (Brochure p. 81). Filled by institutions against vacant seats under Rule 13.',
        brochureSource: {
          section: '7(B)(1)(B)',
          printedPage: 49,
          ruleNumber: 'Rule 7(B)(1)(B)'
        }
      },
      allIndia: {
        qualification: 'Citizen of India; Passed B.E., B.Tech., BBA, or BMS (4 Years).',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Qualifying Examination Marks',
        entranceExamDetails: 'Based on qualifying degree marks.',
        brochureSource: {
          section: '7(B)(1)(B)',
          printedPage: 49,
          ruleNumber: 'Rule 7(B)(1)(B)'
        }
      },
      tieBreakingRules: [
        'Higher percentage in qualifying degree',
        'Higher percentage in HSC',
        'Higher percentage in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'Exempt from CET (Qualifying Degree Marks)',
      subjectsOrGroups: 'B.E./B.Tech/4-year BBA/BMS',
      scoreRequirement: 'Passed 4-year degree',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'four-year-degree', name: '4-Year Degree Marksheets & Certificate', description: 'Proof of completing 4-year B.E., B.Tech., BBA, or BMS', requirementType: 'Required for all', sourceRef: 'Brochure Page 49' },
      { id: 'hsc-ssc', name: 'HSC & SSC Marksheets', description: 'Tie breaker and qualification', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Institutional Application', description: 'Seats filled at institute level against vacant seats within sanctioned intake as per Rule 13 (Brochure p. 105).' }
      ],
      applicationFeeGeneral: 'As notified',
      applicationFeeReserved: 'As notified',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: false,
      institutionalQuota: '100% of vacant seats filled at institute level.',
      exceptions: ['All seats for PG lateral entry are treated as General Category with no category reservations (Brochure p. 81, 105).']
    },
    faqs: [
      { question: 'Who can take direct lateral entry into the 2nd year of MBA?', answer: 'Candidates who have completed a 4-year Bachelor degree such as B.E., B.Tech., or 4-year BBA/BMS (Brochure page 49).' }
    ],
    brochureSource: {
      section: '7(B)(1)(B)',
      printedPage: 49,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 1(B)'
    }
  },

  // ==========================================
  // 25. MCA First Year (2 Years)
  // ==========================================
  {
    id: 'mca-first-year',
    slug: 'mca-first-year',
    title: 'Post Graduate Course in Computer Applications (MCA) First Year',
    abbreviation: 'MCA',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Computer Applications',
    qualifyingExam: 'Any Graduation Degree (e.g. B.E., B.Tech, B.Sc, B.Com, B.A., B.Voc, BCA) preferably with Maths',
    overview: 'Full-time two-year postgraduate professional degree in computer science, software engineering, cloud computing, and applications development.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed any graduation degree (e.g. B.E. or B.Tech. or B.Sc or B.Com. or B.A. or B.Voc. or BCA etc.) preferably with Mathematics at 10+2 level or at Graduation level and obtained at least 50% marks (at least 45% for MS reserved/EWS/PwD) in qualifying examination; AND obtained non-zero score in MAH-MCA-CET 2026.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'MAH-MCA-CET 2026',
        entranceExamDetails: 'Obtained non-zero score in MAH-MCA-CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(B)(2)',
          printedPage: 50,
          ruleNumber: 'Rule 7(B)(2)'
        }
      },
      allIndia: {
        qualification: 'Passed any graduation degree preferably with Mathematics at 10+2 or graduation with at least 50% marks (45% for MS reserved/EWS/PwD); Obtained non-zero score in MAH-MCA-CET 2026.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'MAH-MCA-CET 2026',
        entranceExamDetails: 'Score in MAH-MCA-CET 2026.',
        allIndiaExam: 'MAH-MCA-CET',
        brochureSource: {
          section: '7(B)(2)',
          printedPage: 50,
          ruleNumber: 'Rule 7(B)(2)'
        }
      },
      nriOci: {
        criteria: 'Passed any graduation degree preferably with Mathematics at 10+2 or graduation with at least 50% marks in qualifying examination.',
        sourceRef: 'Brochure Page 50'
      },
      tieBreakingRules: [
        'Higher marks or score in CET',
        'Higher percentage of marks in HSC (10+2) or Diploma',
        'Higher percentage of marks in SSC',
        'Higher percentage in Science in SSC',
        'Higher percentage in Mathematics in SSC',
        'Higher percentage in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-MCA-CET 2026',
      alternativeExams: [],
      subjectsOrGroups: 'Mathematics & Statistics, Logical/Abstract Reasoning, English Comprehension, Computer Concepts',
      scoreRequirement: 'Non-zero score in MAH-MCA-CET 2026',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'grad-marks', name: 'Graduation Degree Marksheets', description: 'Marksheets of all years with 50% aggregate (45% reserved)', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'degree-cert', name: 'Degree Passing Certificate', description: 'Proof of degree completion', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'mca-scorecard', name: 'MAH-MCA-CET Scorecard', description: 'CET scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'hsc-maths', name: 'HSC / Graduation Marksheet with Mathematics', description: 'Proof of Mathematics at 10+2 or degree level', requirementType: 'Required for all', sourceRef: 'Brochure Page 50' },
      { id: 'caste-validity', name: 'Caste & Validity Certificates', description: 'For reserved candidates', requirementType: 'Category specific', sourceRef: 'Brochure Page 93' },
      { id: 'tfws', name: 'Income Certificate for TFWS (< Rs 8 Lakh)', description: 'TFWS supernumerary quota in MCA', requirementType: 'Special / Conditional', sourceRef: 'Brochure Page 12, 95' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Online registration with degree details and MCA CET score.' },
        { stepNumber: 2, title: 'Document Verification', description: 'FC / E-Scrutiny verification.' },
        { stepNumber: 3, title: 'CAP Option Filling & Allotment', description: 'Preference submission across CAP rounds I to IV.' }
      ],
      applicationFeeGeneral: 'Included in CET / ₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: true,
      tfwsDetails: 'TFWS supernumerary seats up to 5% are mandatory for MCA programs (Brochure page 12).',
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.',
      minorityQuota: 'Minimum 51% in minority institutions.'
    },
    faqs: [
      { question: 'Is Mathematics at 10+2 compulsory for MCA?', answer: 'The brochure states "preferably with Mathematics at 10+2 level or at Graduation level". Candidates from non-mathematical backgrounds can apply subject to university bridge course requirements (Brochure page 50).' }
    ],
    brochureSource: {
      section: '7(B)(2)',
      printedPage: 50,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 2'
    }
  },

  // ==========================================
  // 26. MCA Second Year Lateral Entry
  // ==========================================
  {
    id: 'mca-second-year-lateral',
    slug: 'mca-second-year-lateral',
    title: 'Computer Applications (MCA) Second Year (Lateral Entry)',
    abbreviation: 'MCA Lateral Entry',
    level: 'Lateral Entry',
    entryType: 'Direct Second Year',
    duration: '1 Year',
    category: 'Computer Applications',
    qualifyingExam: 'B.Tech / B.E. (CSE/IT) OR 4-year BCA',
    overview: 'Direct entry into second year of MCA for graduates holding a 4-year degree in Computer Science, IT, or 4-year BCA.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed B.Tech. (Computer Science and Engineering (CSE) or Information Technology (IT)) OR B.E. (CSE or IT) OR Bachelor of Computer Applications (BCA) (4 years duration).',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Qualifying Examination Marks',
        entranceExamDetails: 'Marks or score secured in qualifying examination (Brochure p. 81). Filled by institutes against vacant seats under Rule 13.',
        brochureSource: {
          section: '7(B)(2)(B)',
          printedPage: 50,
          ruleNumber: 'Rule 7(B)(2)(B)'
        }
      },
      allIndia: {
        qualification: 'Citizen of India; Passed B.Tech/B.E. (CSE/IT) or 4-year BCA.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Qualifying Examination Marks',
        entranceExamDetails: 'Degree marks merit.',
        brochureSource: {
          section: '7(B)(2)(B)',
          printedPage: 50,
          ruleNumber: 'Rule 7(B)(2)(B)'
        }
      },
      tieBreakingRules: ['Higher marks in qualifying degree', 'Higher percentage in HSC', 'Higher percentage in SSC']
    },
    entranceExams: {
      primaryExam: 'Exempt from CET (Degree Merit)',
      subjectsOrGroups: 'B.Tech CSE/IT or 4-year BCA',
      scoreRequirement: 'Passed 4-year degree',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'btech-bca-marksheets', name: '4-Year CSE/IT/BCA Degree Marksheets', description: 'Proof of 4-year computer science / BCA degree', requirementType: 'Required for all', sourceRef: 'Brochure Page 51' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Institutional Application', description: 'Seats filled at institute level against vacant seats within sanctioned intake as per Rule 13.' }
      ],
      applicationFeeGeneral: 'As notified',
      applicationFeeReserved: 'As notified',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: false,
      institutionalQuota: '100% of vacant seats at institute level.',
      exceptions: ['All seats for PG lateral entry are treated as General Category with no category reservations (Brochure p. 81).']
    },
    faqs: [
      { question: 'Can a 3-year BCA graduate apply for MCA Lateral Entry?', answer: 'No. The brochure strictly specifies "Bachelor of Computer Applications (BCA) (4 years)" or B.E./B.Tech. in CSE/IT (Brochure page 51).' }
    ],
    brochureSource: {
      section: '7(B)(2)(B)',
      printedPage: 50,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 2(B)'
    }
  },

  // ==========================================
  // 27. M.Pharm. (2 Years)
  // ==========================================
  {
    id: 'm-pharm',
    slug: 'm-pharm',
    title: 'Pharmacy (M.Pharm.)',
    abbreviation: 'M.Pharm.',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Pharmacy',
    qualifyingExam: 'Bachelor’s in Pharmacy (B.Pharm.)',
    overview: 'Two-year postgraduate pharmacy program across Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Quality Assurance, and Pharmacognosy.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Bachelor’s in Pharmacy Degree examination from an Indian university approved by Pharmacy Council of India (PCI) with not less than 55% marks (aggregate of 4 years of B.Pharm.) (at least 50% for MS reserved/EWS/PwD); AND obtained non-zero positive score in GPAT conducted by NTA.',
        minMarksGeneral: 55,
        minMarksReserved: 50,
        entranceExam: 'GPAT 2026 (NTA)',
        entranceExamDetails: 'Obtained non-zero positive score in GPAT. For sponsored candidates, minimum 2 years of full-time work experience in a registered firm/industry/research/govt department in relevant field is required.',
        brochureSource: {
          section: '7(B)(3)',
          printedPage: 51,
          ruleNumber: 'Rule 7(B)(3)'
        }
      },
      allIndia: {
        qualification: 'Passed B.Pharm with at least 55% marks (50% for reserved); Non-zero positive score in GPAT.',
        minMarksGeneral: 55,
        minMarksReserved: 50,
        entranceExam: 'GPAT 2026',
        entranceExamDetails: 'Valid GPAT positive score.',
        allIndiaExam: 'GPAT',
        brochureSource: {
          section: '7(B)(3)',
          printedPage: 51,
          ruleNumber: 'Rule 7(B)(3)'
        }
      },
      nriOci: {
        criteria: 'Passed B.Pharm with at least 55% marks in aggregate of 4 years or approved by AIU.',
        sourceRef: 'Brochure Page 51'
      },
      tieBreakingRules: [
        'Higher GPAT score',
        'Higher percentage in B.Pharm aggregate',
        'Higher percentage in HSC',
        'Higher percentage in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'GPAT 2026 (Graduates Pharmacy Aptitude Test by NTA)',
      alternativeExams: [],
      subjectsOrGroups: 'Pharmaceutical Chemistry, Pharmaceutics, Pharmacology, Pharmacognosy',
      scoreRequirement: 'Non-zero positive score in GPAT',
      officialExamPortal: 'https://natboard.edu.in / https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'bpharm-marksheets', name: 'B.Pharm All 4 Years Mark Sheets', description: 'Proof of min 55% (50% reserved) aggregate over 4 years', requirementType: 'Required for all', sourceRef: 'Brochure Page 51, 92' },
      { id: 'gpat-scorecard', name: 'GPAT Score Card', description: 'Valid GPAT score card', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' },
      { id: 'sponsorship', name: 'Sponsorship Certificate (Proforma P & Q)', description: 'For sponsored candidates with 2 years experience', requirementType: 'Special / Conditional', proforma: 'Proforma - P & Q', sourceRef: 'Brochure Page 95, Sr. 21' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Submit B.Pharm marks and GPAT roll number.' },
        { stepNumber: 2, title: 'Document Verification', description: 'FC / E-Scrutiny verification.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'Computerized allotment across CAP rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% (15% Non-Sponsored + 5% Sponsored) in unaided colleges (Schedule I B(2)).'
    },
    faqs: [
      { question: 'What is the minimum aggregate marks required in B.Pharm for M.Pharm?', answer: 'The candidate must have scored not less than 55% aggregate marks over 4 years of B.Pharm (50% for reserved/EWS/PwD of Maharashtra) (Brochure page 51).' }
    ],
    brochureSource: {
      section: '7(B)(3)',
      printedPage: 51,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 3'
    }
  },

  // ==========================================
  // 28. Pharm. D. (Post Baccalaureate)
  // ==========================================
  {
    id: 'pharm-d-pb',
    slug: 'pharm-d-pb',
    title: 'Pharm. D. (Post Baccalaureate)',
    abbreviation: 'Pharm. D. (PB)',
    level: 'PG',
    entryType: 'First Year',
    duration: '3 Years',
    category: 'Pharmacy',
    qualifyingExam: 'Bachelor of Pharmacy (B.Pharm.) from PCI approved institute',
    overview: 'Three-year post-graduate professional clinical doctoral pharmacy program for B.Pharm. graduates, comprising 2 years of advanced clinical coursework and 1 year of hospital residency.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Bachelor of Pharmacy from an institution approved by the Pharmacy Council of India under section 12 of the Pharmacy Act; AND obtained non-zero positive score in GPAT conducted by NTA. (For sponsored candidates, minimum 2 years of full time work experience).',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'GPAT 2026',
        entranceExamDetails: 'Obtained non-zero positive score in Graduates Pharmacy Aptitude Test (GPAT) conducted by NTA.',
        brochureSource: {
          section: '7(B)(4)',
          printedPage: 52,
          ruleNumber: 'Rule 7(B)(4)'
        }
      },
      allIndia: {
        qualification: 'Passed B.Pharm from PCI approved institute; Non-zero positive score in GPAT.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'GPAT 2026',
        entranceExamDetails: 'Positive GPAT score.',
        allIndiaExam: 'GPAT',
        brochureSource: {
          section: '7(B)(4)',
          printedPage: 52,
          ruleNumber: 'Rule 7(B)(4)'
        }
      },
      nriOci: {
        criteria: 'Passed B.Pharm from an institution approved by PCI or Association of Indian Universities (AIU).',
        sourceRef: 'Brochure Page 52'
      },
      tieBreakingRules: [
        'Higher GPAT score',
        'Higher percentage in B.Pharm',
        'Higher percentage in HSC',
        'Higher percentage in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'GPAT 2026',
      subjectsOrGroups: 'Pharmacy subjects',
      scoreRequirement: 'Non-zero positive score in GPAT',
      officialExamPortal: 'https://natboard.edu.in'
    },
    documentsRequired: [
      { id: 'bpharm-degree', name: 'B.Pharm Marksheets & Degree Certificate', description: 'PCI approved B.Pharm degree proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 52' },
      { id: 'gpat-scorecard', name: 'GPAT Score Card', description: 'Valid GPAT score card', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Online application on CET Cell portal.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'Document verification at FC.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'Computerized allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions (Schedule I B(2)).'
    },
    faqs: [
      { question: 'What is the duration of Pharm. D. (PB)?', answer: 'The duration is 3 years, consisting of 2 years of clinical coursework and 1 year of residency in a teaching hospital (Brochure page 52).' }
    ],
    brochureSource: {
      section: '7(B)(4)',
      printedPage: 52,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 4'
    }
  },

  // ==========================================
  // 29. M.E. / M.Tech. (2 Years)
  // ==========================================
  {
    id: 'me-mtech',
    slug: 'me-mtech',
    title: 'Engineering and Technology (M.E. / M.Tech.)',
    abbreviation: 'M.E. / M.Tech.',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Engineering',
    qualifyingExam: 'Bachelor Degree in relevant field of Engineering and Technology or Pharmacy',
    overview: 'Full-time two-year postgraduate master’s program in engineering and technology across specialized disciplines.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Bachelor Degree in relevant field of Engineering and Technology or Pharmacy from AICTE/Central/State Govt approved institutions with at least 50% marks (45% for MS reserved/EWS/PwD); AND obtained Qualified/non-Qualified score in GATE or GPAT valid for current academic year; OR For sponsored candidates, minimum 2 years full-time work experience in registered firm/industry/research/govt department.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'GATE / GPAT',
        entranceExamDetails: 'GATE or GPAT Qualified Candidates have preference over GATE/GPAT not Qualified candidates, and thereafter preference to candidates not appeared (Brochure p. 55).',
        brochureSource: {
          section: '7(B)(6)',
          printedPage: 54,
          ruleNumber: 'Rule 7(B)(6)'
        }
      },
      allIndia: {
        qualification: 'Passed Bachelor Degree in relevant field with at least 50% marks (45% reserved); GATE or GPAT score.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'GATE / GPAT',
        entranceExamDetails: 'Qualified score in GATE conducts preference.',
        allIndiaExam: 'GATE',
        brochureSource: {
          section: '7(B)(6)',
          printedPage: 54,
          ruleNumber: 'Rule 7(B)(6)'
        }
      },
      nriOci: {
        criteria: 'Passed Bachelor Degree in relevant field of Engineering and Technology with at least 50% marks.',
        sourceRef: 'Brochure Page 55'
      },
      tieBreakingRules: [
        'GATE/GPAT Qualified candidates preferred over non-qualified',
        'Higher marks in qualifying Bachelor degree',
        'Higher percentage in HSC or Diploma',
        'Higher percentage in SSC',
        'Higher percentage in Science in SSC',
        'Higher percentage in Mathematics in SSC',
        'Higher percentage in English in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'GATE (Graduate Aptitude Test in Engineering by IIT)',
      alternativeExams: ['GPAT (where relevant for pharmaceutical/biochem engg)'],
      subjectsOrGroups: 'Relevant engineering paper',
      scoreRequirement: 'GATE Qualified score preferred; Non-qualified score also eligible; Non-appeared eligible after qualified',
      officialExamPortal: 'https://gate2026.iit... / https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'be-marksheets', name: 'B.E. / B.Tech. Marksheets & Degree Certificate', description: 'Proof of min 50% aggregate (45% reserved) in relevant field', requirementType: 'Required for all', sourceRef: 'Brochure Page 54, 92' },
      { id: 'gate-scorecard', name: 'GATE / GPAT Scorecard', description: 'Scorecard valid for current academic year', requirementType: 'Required for all', sourceRef: 'Brochure Page 54, 92' },
      { id: 'sponsorship', name: 'Sponsorship Certificate (Proforma P & Q)', description: 'For sponsored candidates with 2 years experience', requirementType: 'Special / Conditional', proforma: 'Proforma - P & Q', sourceRef: 'Brochure Page 95' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Online registration with GATE score and degree marks.' },
        { stepNumber: 2, title: 'Verification', description: 'FC verification of original degree marksheets.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'Computerized allotment across rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% (15% Non-Sponsored + 5% Sponsored) in unaided institutions (Schedule I B(2)).'
    },
    faqs: [
      { question: 'Can non-GATE candidates apply for M.E./M.Tech.?', answer: 'Yes. The brochure specifies that GATE Qualified candidates have first preference, followed by GATE non-qualified candidates, and thereafter candidates who have not appeared for GATE (Brochure page 55).' }
    ],
    brochureSource: {
      section: '7(B)(6)',
      printedPage: 54,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 6'
    }
  },

  // ==========================================
  // 30. M.Arch. (2 Years)
  // ==========================================
  {
    id: 'm-arch',
    slug: 'm-arch',
    title: 'Architecture (M.Arch.)',
    abbreviation: 'M.Arch.',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Architecture',
    qualifyingExam: 'Bachelor Degree in Architecture (B.Arch.) or equivalent',
    overview: 'Full-time two-year postgraduate master’s program in architecture approved by Council of Architecture (CoA) across environmental architecture, landscape, urban design, and project management.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Bachelor Degree in Architecture or equivalent with at least 50% aggregate marks or equivalent CGPA (at least 45% for MS reserved/EWS/PwD); AND obtained non-zero score in Post-Graduate Entrance Test in Architecture (PGETA) conducted by Council of Architecture.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'PGETA (Council of Architecture)',
        entranceExamDetails: 'Obtained non-zero score in PGETA conducted by Council of Architecture.',
        brochureSource: {
          section: '7(B)(7)',
          printedPage: 56,
          ruleNumber: 'Rule 7(B)(7)'
        }
      },
      allIndia: {
        qualification: 'Passed B.Arch with at least 50% marks or equivalent CGPA (45% for MS reserved); Non-zero score in PGETA.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'PGETA',
        entranceExamDetails: 'Non-zero score in PGETA.',
        allIndiaExam: 'PGETA',
        brochureSource: {
          section: '7(B)(7)',
          printedPage: 56,
          ruleNumber: 'Rule 7(B)(7)'
        }
      },
      nriOci: {
        criteria: 'Passed B.Arch or equivalent with at least 50% aggregate marks or equivalent CGPA.',
        sourceRef: 'Brochure Page 56'
      },
      tieBreakingRules: [
        'Higher score in PGETA',
        'Higher percentage in B.Arch aggregate',
        'Higher percentage in HSC or Diploma',
        'Higher percentage in SSC',
        'Higher percentage in Science in SSC',
        'Higher percentage in Mathematics in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'PGETA (Post-Graduate Entrance Test in Architecture by CoA)',
      alternativeExams: [],
      subjectsOrGroups: 'Architectural Design, Building Services, History & Theory',
      scoreRequirement: 'Non-zero score in PGETA',
      officialExamPortal: 'https://coa.gov.in / https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'barch-marksheets', name: 'B.Arch. Marksheets & Degree Certificate', description: 'Proof of min 50% (45% reserved) in B.Arch', requirementType: 'Required for all', sourceRef: 'Brochure Page 56, 92' },
      { id: 'pgeta-scorecard', name: 'PGETA Score Card', description: 'Council of Architecture entrance scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 56, 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Submit B.Arch details and PGETA score.' },
        { stepNumber: 2, title: 'Verification', description: 'FC verification.' },
        { stepNumber: 3, title: 'Allotment', description: 'CAP allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions (Schedule I B(2)).'
    },
    faqs: [
      { question: 'Which entrance test is required for M.Arch?', answer: 'The Post-Graduate Entrance Test in Architecture (PGETA) conducted by the Council of Architecture is mandatory (Brochure page 56).' }
    ],
    brochureSource: {
      section: '7(B)(7)',
      printedPage: 56,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 7'
    }
  },

  // ==========================================
  // 31. M.Planning (2 Years)
  // ==========================================
  {
    id: 'm-planning',
    slug: 'm-planning',
    title: 'Planning (M.Planning)',
    abbreviation: 'M.Planning',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Planning',
    qualifyingExam: 'Bachelor Degree in Planning / Architecture / Civil Engg OR Master Degree in Geography / Economics / Social Sciences',
    overview: 'Full-time two-year postgraduate master’s program in urban, regional, transport, and environmental planning.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Bachelor Degree in Planning or Architecture or Civil Engineering OR Master Degree of Geography or Economics or Social Sciences or equivalent Degree; AND obtained non-zero positive score in CEED conducted by IIT OR Qualified/non-Qualified score in GATE conducted by IIT (preference to CEED over GATE); OR for sponsored candidates, min 2 years full time work experience.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'CEED OR GATE',
        entranceExamDetails: 'Obtained non-zero positive score in CEED (conducted by IIT) or Qualified/non-Qualified score in GATE. Preference given to CEED over GATE (Brochure p. 53).',
        brochureSource: {
          section: '7(B)(5)',
          printedPage: 52,
          ruleNumber: 'Rule 7(B)(5)'
        }
      },
      allIndia: {
        qualification: 'Bachelor in Planning/Architecture/Civil Engg OR Master in Geography/Economics/Social Sciences; CEED or GATE score.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'CEED OR GATE',
        entranceExamDetails: 'Preference to CEED over GATE.',
        allIndiaExam: 'CEED / GATE',
        brochureSource: {
          section: '7(B)(5)',
          printedPage: 52,
          ruleNumber: 'Rule 7(B)(5)'
        }
      },
      nriOci: {
        criteria: 'Passed Bachelor in Planning/Architecture/Civil or Master in Geography/Economics/Social Sciences.',
        sourceRef: 'Brochure Page 53'
      },
      tieBreakingRules: [
        'CEED appeared candidate preferred over GATE',
        'GATE Qualified preferred over GATE Non-Qualified',
        'Higher percentage in qualifying examination',
        'Higher percentage in HSC',
        'Higher percentage in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'CEED (Common Entrance Exam for Design by IIT) OR GATE',
      alternativeExams: [],
      subjectsOrGroups: 'Planning, Architecture, Civil Engineering, Design aptitude',
      scoreRequirement: 'Non-zero positive score in CEED or score in GATE',
      officialExamPortal: 'https://ceed.iitb.ac.in / https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'qual-degree', name: 'Qualifying Bachelor / Master Degree Marksheets', description: 'Marksheets of Planning/Arch/Civil or MA/MSc Geography/Economics', requirementType: 'Required for all', sourceRef: 'Brochure Page 53, 92' },
      { id: 'ceed-gate', name: 'CEED / GATE Scorecard', description: 'Valid scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 53, 92' },
      { id: 'sponsorship', name: 'Sponsorship Certificate (Proforma P & Q)', description: 'For sponsored candidates', requirementType: 'Special / Conditional', proforma: 'Proforma - P & Q', sourceRef: 'Brochure Page 95' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Apply on CET Cell portal.' },
        { stepNumber: 2, title: 'Scrutiny', description: 'FC document verification.' },
        { stepNumber: 3, title: 'Allotment', description: 'CAP allotment rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions (Schedule I B(2)).'
    },
    faqs: [
      { question: 'Can MA Economics or Geography graduates apply for M.Planning?', answer: 'Yes! The brochure explicitly recognizes candidates passing Master Degree of Geography, Economics, Social Sciences, or equivalent degree (Brochure page 53).' }
    ],
    brochureSource: {
      section: '7(B)(5)',
      printedPage: 52,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 5'
    }
  },

  // ==========================================
  // 32. M.HMCT (2 Years)
  // ==========================================
  {
    id: 'm-hmct',
    slug: 'm-hmct',
    title: 'Hotel Management and Catering Technology (M.HMCT)',
    abbreviation: 'M.HMCT',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Hotel Management',
    qualifyingExam: 'Bachelor Degree in HMCT / Hotel Management of minimum 4 years duration',
    overview: 'Full-time two-year postgraduate master’s program in hotel administration, hospitality operations, and gastronomy.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Bachelor Degree in Hotel Management and Catering Technology or Hotel Management of minimum 4 years duration or equivalent, with at least 50% marks (45% for MS reserved/EWS/PwD); AND obtained non-zero score in MAH-M.HMCT-CET 2026; OR for sponsored candidates, min 2 years full time work experience.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'MAH-M.HMCT-CET 2026',
        entranceExamDetails: 'Obtained non-zero score in MAH-M.HMCT-CET 2026 conducted by Competent Authority.',
        brochureSource: {
          section: '7(B)(8)',
          printedPage: 56,
          ruleNumber: 'Rule 7(B)(8)'
        }
      },
      allIndia: {
        qualification: 'Passed minimum 4-year Bachelor in HMCT with at least 50% marks (45% reserved); Non-zero score in MAH-M.HMCT-CET 2026.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'MAH-M.HMCT-CET 2026',
        entranceExamDetails: 'Score in MAH-M.HMCT-CET 2026.',
        allIndiaExam: 'MAH-M.HMCT-CET',
        brochureSource: {
          section: '7(B)(8)',
          printedPage: 56,
          ruleNumber: 'Rule 7(B)(8)'
        }
      },
      nriOci: {
        criteria: 'Passed Bachelor in HMCT of min 4 years duration with at least 50% marks.',
        sourceRef: 'Brochure Page 57'
      },
      tieBreakingRules: [
        'Higher CET score',
        'Higher percentage in qualifying Bachelor degree',
        'Higher percentage in HSC or Diploma',
        'Higher percentage in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'MAH-M.HMCT-CET 2026',
      alternativeExams: [],
      subjectsOrGroups: 'Hospitality Operations, Food & Beverage, Front Office, Housekeeping',
      scoreRequirement: 'Non-zero score in MAH-M.HMCT-CET 2026',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'bhmct-marksheets', name: '4-Year B.HMCT Marksheets & Degree Certificate', description: 'Proof of min 50% (45% reserved)', requirementType: 'Required for all', sourceRef: 'Brochure Page 56, 92' },
      { id: 'cet-scorecard', name: 'MAH-M.HMCT-CET Scorecard', description: 'CET scorecard', requirementType: 'Required for all', sourceRef: 'Brochure Page 56, 92' },
      { id: 'sponsorship', name: 'Sponsorship Certificate (Proforma P & Q)', description: 'For sponsored candidates with 2 years experience', requirementType: 'Special / Conditional', proforma: 'Proforma - P & Q', sourceRef: 'Brochure Page 95' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Online registration with CET score.' },
        { stepNumber: 2, title: 'Verification', description: 'Document verification at FC.' },
        { stepNumber: 3, title: 'Allotment', description: 'CAP allotment.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions (Schedule I B(2)).'
    },
    faqs: [
      { question: 'What is the required duration of the qualifying Bachelor degree for M.HMCT?', answer: 'The Bachelor Degree in Hotel Management must be of minimum 4 years duration or equivalent (Brochure page 56).' }
    ],
    brochureSource: {
      section: '7(B)(8)',
      printedPage: 56,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 8'
    }
  },

  // ==========================================
  // 33. Master of Design (M.Design)
  // ==========================================
  {
    id: 'm-design',
    slug: 'm-design',
    title: 'Master of Design (M.Design)',
    abbreviation: 'M.Design',
    level: 'PG',
    entryType: 'First Year',
    duration: '2 Years',
    category: 'Design',
    qualifyingExam: 'Bachelor Degree of minimum 4 years duration',
    overview: 'Two-year postgraduate master’s program in advanced design theory, interaction design, industrial styling, and user experience.',
    eligibility: {
      maharashtraState: {
        qualification: 'Citizen of India; Passed Bachelor Degree of minimum 4 years duration with at least 50% marks (45% for MS reserved/EWS/PwD); AND obtained Qualified/non-Qualified score in GATE conducted by IIT valid for current academic year (preference to GATE Qualified); OR for sponsored candidates, min 2 years full time work experience.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'GATE (by IIT)',
        entranceExamDetails: 'Obtained Qualified score in GATE (IIT). GATE Qualified candidates have preference over GATE not Qualified candidates, and thereafter preference to candidates not appeared (Brochure p. 57-58).',
        brochureSource: {
          section: '7(B)(9)',
          printedPage: 57,
          ruleNumber: 'Rule 7(B)(9)'
        }
      },
      allIndia: {
        qualification: 'Bachelor Degree of min 4 years duration with 50% (45% reserved); GATE score.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'GATE',
        entranceExamDetails: 'Preference to GATE Qualified candidates.',
        allIndiaExam: 'GATE',
        brochureSource: {
          section: '7(B)(9)',
          printedPage: 57,
          ruleNumber: 'Rule 7(B)(9)'
        }
      },
      nriOci: {
        criteria: 'Passed Bachelor Degree in relevant course of min 4 years duration with at least 50% marks.',
        sourceRef: 'Brochure Page 58'
      },
      tieBreakingRules: [
        'GATE Qualified candidates preferred over non-qualified',
        'Higher percentage in qualifying Bachelor degree',
        'Higher percentage in HSC or Diploma',
        'Higher percentage in SSC'
      ]
    },
    entranceExams: {
      primaryExam: 'GATE (IIT)',
      alternativeExams: [],
      subjectsOrGroups: 'Engineering / Architecture / Design GATE paper',
      scoreRequirement: 'GATE Qualified score preferred; Non-qualified eligible',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'bachelor-degree', name: '4-Year Bachelor Degree Marksheets', description: 'Proof of min 50% (45% reserved) in 4-year degree', requirementType: 'Required for all', sourceRef: 'Brochure Page 57, 92' },
      { id: 'gate-scorecard', name: 'GATE Scorecard', description: 'Valid GATE score card', requirementType: 'Required for all', sourceRef: 'Brochure Page 57, 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Registration', description: 'Register on CET Cell portal.' },
        { stepNumber: 2, title: 'Verification', description: 'FC document scrutiny.' },
        { stepNumber: 3, title: 'CAP Allotment', description: 'CAP allotment rounds.' }
      ],
      applicationFeeGeneral: '₹ 1300/-',
      applicationFeeReserved: '₹ 1000/-',
      applicationFeeNRI: 'USD 50'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions.'
    },
    faqs: [
      { question: 'What is the required duration of the qualifying undergraduate degree for M.Design?', answer: 'The candidate must have completed a Bachelor Degree of minimum 4 years duration (Brochure page 57).' }
    ],
    brochureSource: {
      section: '7(B)(9)',
      printedPage: 57,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 9'
    }
  },

  // ==========================================
  // 34. Working Professionals PG
  // ==========================================
  {
    id: 'working-professionals-pg',
    slug: 'working-professionals-pg',
    title: 'Admission to Post Graduate Courses for Working Professionals',
    abbreviation: 'Working Pro (PG)',
    level: 'PG',
    entryType: 'Working Professional',
    duration: 'As decided by Affiliating University',
    category: 'Special Mode',
    qualifyingExam: 'Respective Bachelor Degree + 1 Year Full Time Work Experience',
    overview: 'Special mode post-graduate technical courses (such as M.E./M.Tech, MBA, MCA) for working professionals employed in registered industry within 50 km radial distance from admitting college.',
    eligibility: {
      maharashtraState: {
        qualification: 'Fulfill qualification and eligibility for respective PG course; Working professional in Registered Industry/Org/Pvt Ltd/Public Ltd/MSME located within 50 km radial distance from the Institute; Minimum 1 Year full-time regular work experience; Proforma W1 and W2 mandatory.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Merit of Respective PG Eligibility',
        entranceExamDetails: 'Two centralized admission rounds conducted for working professionals.',
        notes: [
          'Timings normally in evening hours or flexible convenient timings in alignment with industry.',
          'Face-to-face regular mode as per AICTE public notice.',
          'Minimum 1/3rd approved intake required to run the course.',
          'One seat in every institute reserved for candidates working in Central Government organizations/industries on MERIT basis.'
        ],
        brochureSource: {
          section: '7(B)(10)',
          printedPage: 58,
          ruleNumber: 'Rule 7(B)(10) & 12(p)'
        }
      },
      allIndia: {
        qualification: 'Same qualifications; must be working within 50 km radial distance from admitting institute.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Merit of Respective PG Eligibility',
        entranceExamDetails: 'Two CAP rounds.',
        brochureSource: {
          section: '7(B)(10)',
          printedPage: 58,
          ruleNumber: 'Rule 7(B)(10)'
        }
      },
      tieBreakingRules: [
        'Higher percentage in qualifying degree',
        'Higher work experience duration'
      ]
    },
    entranceExams: {
      primaryExam: 'Merit of respective PG Course',
      subjectsOrGroups: 'Degree subjects',
      scoreRequirement: 'Min 50% (45% reserved) + 1 year work experience',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'exp-w1', name: 'Working Professional Experience Certificate (Proforma - W1)', description: 'Certified minimum 1 year work experience with workplace latitude/longitude', requirementType: 'Required for all', proforma: 'Proforma - W1', sourceRef: 'Brochure Page 95, 121' },
      { id: 'decl-w2', name: 'Self Declaration (Proforma - W2)', description: 'Declaration that workplace is within 50 km radial distance and agreeing to reallocation rules', requirementType: 'Required for all', proforma: 'Proforma - W2', sourceRef: 'Brochure Page 95, 122' },
      { id: 'degree-docs', name: 'Qualifying Bachelor Degree Marksheets', description: 'Degree marks proof', requirementType: 'Required for all', sourceRef: 'Brochure Page 92' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'CAP Application', description: 'Submit work experience and workplace coordinates.' },
        { stepNumber: 2, title: 'Two CAP Rounds', description: 'Only 2 centralized admission rounds; no betterment after Round II.' },
        { stepNumber: 3, title: 'Re-allocation if < 1/3 Intake', description: 'Mandatory reallocation within 50 km if course intake < 1/3rd (Rule 12(p)(vii)).' }
      ],
      applicationFeeGeneral: 'As notified',
      applicationFeeReserved: 'As notified',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: true,
      institutionalQuota: '20% in unaided private institutions (Schedule I B(2)).',
      exceptions: ['Only two CAP rounds; transfer to nearby institute if batch size < 1/3rd of approved intake.']
    },
    faqs: [
      { question: 'What happens if a college does not get 1/3rd admissions for a working professional course?', answer: 'The Competent Authority carries out mandatory re-allocation of admitted candidates to another nearby institute within 50 km radial distance strictly on merit (Rule 12(p)(vii), Brochure page 60).' }
    ],
    brochureSource: {
      section: '7(B)(10)',
      printedPage: 58,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 10'
    }
  },

  // ==========================================
  // 35. Collaborative / Twinning Mode PG
  // ==========================================
  {
    id: 'pg-collaborative-twinning',
    slug: 'pg-collaborative-twinning',
    title: 'Post Graduate Courses through Collaborative / Twinning Mode',
    abbreviation: 'PG Twinning',
    level: 'PG',
    entryType: 'Collaborative/Twinning',
    duration: 'As prescribed by partner institutions',
    category: 'Special Mode',
    qualifyingExam: 'Same as First Year of respective PG course',
    overview: 'Special master’s level courses offered in collaboration or twinning arrangement with foreign/national partner institutions.',
    eligibility: {
      maharashtraState: {
        qualification: 'Eligibility for admission to First Year shall be same as admission to first year of respective professional Post Graduate Courses, plus additional norms prescribed by Appropriate Authority. Lateral Entry and supernumerary seats shall not be allowed in Foreign Collaboration and Twinning Programme.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Same as respective First Year PG Course',
        entranceExamDetails: 'As per respective course.',
        brochureSource: {
          section: '7(B)(11)',
          printedPage: 60,
          ruleNumber: 'Rule 7(B)(11) & 12(q)'
        }
      },
      allIndia: {
        qualification: 'Same as First Year of respective PG course.',
        minMarksGeneral: 50,
        minMarksReserved: 45,
        entranceExam: 'Same as respective course',
        entranceExamDetails: 'As per respective course.',
        brochureSource: {
          section: '7(B)(11)',
          printedPage: 60,
          ruleNumber: 'Rule 7(B)(11)'
        }
      },
      tieBreakingRules: ['Same as respective First Year PG Course']
    },
    entranceExams: {
      primaryExam: 'Same as respective PG course',
      subjectsOrGroups: 'Course specific',
      scoreRequirement: 'As per respective course',
      officialExamPortal: 'https://cetcell.mahacet.org'
    },
    documentsRequired: [
      { id: 'qual-degree', name: 'Bachelor Degree Documents', description: 'Degree marksheets and certificates', requirementType: 'Required for all', sourceRef: 'Brochure Page 60' }
    ],
    admissionProcedure: {
      steps: [
        { stepNumber: 1, title: 'Application', description: 'Candidates apply to Competent Authority and admissions made by institutes under Rule 13.' }
      ],
      applicationFeeGeneral: 'As notified',
      applicationFeeReserved: 'As notified',
      applicationFeeNRI: 'N/A'
    },
    specialProvisions: {
      tfwsEligible: false,
      reservationsApplicable: false,
      institutionalQuota: 'As per Rule 13 institutional quota.',
      exceptions: ['Lateral entry and supernumerary seats are prohibited in Foreign Collaboration and Twinning Programmes (Rule 7(B)(11)(ii)).']
    },
    faqs: [
      { question: 'Can students take lateral entry into PG twinning programs?', answer: 'No. Lateral Entry and supernumerary seats are strictly prohibited in Foreign Collaboration and Twinning Programmes (Brochure page 60).' }
    ],
    brochureSource: {
      section: '7(B)(11)',
      printedPage: 60,
      ruleClause: 'Section 7 Eligibility Criteria, B - PG Courses, Sr. 11'
    }
  }
];
