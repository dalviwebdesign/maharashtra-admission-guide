export interface CategoryReservation {
  srNo: number;
  category: string;
  code: string;
  percentage: number;
  description: string;
  requiredDocuments: string[];
  notes?: string;
  isSubJudice?: boolean;
  sourceRef: string;
}

export const reservedCategories: CategoryReservation[] = [
  {
    srNo: 1,
    category: 'Scheduled Castes and Scheduled Caste converts to Buddhism',
    code: 'SC',
    percentage: 13.0,
    description: 'Statutory constitutional reservation for SC candidates domiciled in Maharashtra State.',
    requiredDocuments: [
      'Caste Certificate stating caste/sub-caste clearly',
      'Caste Validity Certificate issued by Divisional Caste Scrutiny Committee',
      'Domicile / Birth Certificate of Maharashtra'
    ],
    sourceRef: 'Brochure Page 13, Rule 7(6)(a), Sr. 01'
  },
  {
    srNo: 2,
    category: 'Scheduled Tribes',
    code: 'ST',
    percentage: 7.0,
    description: 'Statutory constitutional reservation for ST candidates domiciled in Maharashtra State.',
    requiredDocuments: [
      'Tribe Certificate issued by Competent Authority',
      'Tribe Validity Certificate issued by Scrutiny Committee',
      'Domicile Certificate of Maharashtra'
    ],
    sourceRef: 'Brochure Page 13, Rule 7(6)(a), Sr. 02'
  },
  {
    srNo: 3,
    category: 'Vimukta Jati (VJ) / De-Notified Tribes (DT)',
    code: 'VJ/DT-NT(A)',
    percentage: 3.0,
    description: 'Reservation for Vimukta Jati / De-Notified Tribes category A candidates domiciled in Maharashtra.',
    requiredDocuments: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027',
      'Domicile Certificate of Maharashtra'
    ],
    sourceRef: 'Brochure Page 13, Rule 7(6)(a), Sr. 03'
  },
  {
    srNo: 4,
    category: 'Nomadic Tribes 1',
    code: 'NT(B)',
    percentage: 2.5,
    description: 'Reservation for Nomadic Tribes category B candidates domiciled in Maharashtra.',
    requiredDocuments: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027',
      'Domicile Certificate of Maharashtra'
    ],
    sourceRef: 'Brochure Page 13, Rule 7(6)(a), Sr. 04'
  },
  {
    srNo: 5,
    category: 'Nomadic Tribes 2',
    code: 'NT(C)',
    percentage: 3.5,
    description: 'Reservation for Nomadic Tribes category C (e.g., Dhangar and allied) candidates domiciled in Maharashtra.',
    requiredDocuments: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027',
      'Domicile Certificate of Maharashtra'
    ],
    sourceRef: 'Brochure Page 13, Rule 7(6)(a), Sr. 05'
  },
  {
    srNo: 6,
    category: 'Nomadic Tribes 3',
    code: 'NT(D)',
    percentage: 2.0,
    description: 'Reservation for Nomadic Tribes category D (e.g., Vanjari and allied) candidates domiciled in Maharashtra.',
    requiredDocuments: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027',
      'Domicile Certificate of Maharashtra'
    ],
    sourceRef: 'Brochure Page 13, Rule 7(6)(a), Sr. 06'
  },
  {
    srNo: 7,
    category: 'Other Backward Classes',
    code: 'OBC',
    percentage: 19.0,
    description: 'Reservation for Other Backward Classes (OBC) candidates domiciled in Maharashtra.',
    requiredDocuments: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027',
      'Domicile Certificate of Maharashtra'
    ],
    sourceRef: 'Brochure Page 13, Rule 7(6)(a), Sr. 07'
  },
  {
    srNo: 8,
    category: 'Socially and Educationally Backward Classes',
    code: 'SEBC',
    percentage: 10.0,
    description: 'Reservation for SEBC category candidates in Maharashtra State.',
    requiredDocuments: [
      'SEBC Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027',
      'Domicile Certificate of Maharashtra'
    ],
    notes: 'In case of SEBC Candidates, reservation policy is subject to the decision of the Hon’ble High Court in related Writ Petitions (Brochure page 14).',
    isSubJudice: true,
    sourceRef: 'Brochure Page 14, Rule 7(6)(a), Sr. 08'
  },
  {
    srNo: 9,
    category: 'Special Backward Class',
    code: 'SBC',
    percentage: 2.0,
    description: 'Special Backward Class (SBC) category candidates in Maharashtra State.',
    requiredDocuments: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate (NCL) valid up to 31st March 2027',
      'Domicile Certificate of Maharashtra'
    ],
    notes: 'Considered in General Category by virtue of merit, in original Reserved Class prior to SBC, and for vacant reserved seats up to 2% in Stage III (Rule 10(1) Stage III, Page 79).',
    sourceRef: 'Brochure Page 77 Rule 10(1)(d), Page 79 Rule 10(1) Stage III & Page 93, Sr. 8'
  }
];

export interface CasteCategoryInfo {
  code: string;
  name: string;
  marathiName: string;
  quotaDescription: string;
  quotaPercentage?: number;
  isConstitutionalReservation: boolean;
  isSubJudice?: boolean;
  requiresCasteCertificate: boolean;
  requiresCasteValidity: boolean;
  requiresNonCreamyLayer: boolean;
  nclValidityDate?: string;
  proforma?: string;
  sourceRef: string;
  admissionConditions: string[];
}

export const casteCategoriesMetadata: Record<string, CasteCategoryInfo> = {
  Open: {
    code: 'Open',
    name: 'Open / General Category',
    marathiName: 'खुला / सर्वसाधारण प्रवर्ग',
    quotaDescription: 'Unreserved / Open Merit (All eligible candidates)',
    isConstitutionalReservation: false,
    requiresCasteCertificate: false,
    requiresCasteValidity: false,
    requiresNonCreamyLayer: false,
    sourceRef: 'Brochure Page 10, Rule 7(1) & Page 77, Rule 10(1)',
    admissionConditions: [
      'Seats are allotted purely on inter-se merit from all candidates (Open, Reserved, Male, Female) as per Stage I (Rule 10(1)).',
      'Standard qualifying marks apply (e.g., 45% for UG, 50% for PG, 55% for M.Pharm). No category mark relaxation.',
      'Does not require Caste Certificate, Validity Certificate, or Non-Creamy Layer.'
    ]
  },
  General: {
    code: 'General',
    name: 'Open / General Category',
    marathiName: 'खुला / सर्वसाधारण प्रवर्ग',
    quotaDescription: 'Unreserved / Open Merit (All eligible candidates)',
    isConstitutionalReservation: false,
    requiresCasteCertificate: false,
    requiresCasteValidity: false,
    requiresNonCreamyLayer: false,
    sourceRef: 'Brochure Page 10, Rule 7(1) & Page 77, Rule 10(1)',
    admissionConditions: [
      'Seats are allotted purely on inter-se merit from all candidates (Open, Reserved, Male, Female) as per Stage I (Rule 10(1)).',
      'Standard qualifying marks apply (e.g., 45% for UG, 50% for PG, 55% for M.Pharm). No category mark relaxation.',
      'Does not require Caste Certificate, Validity Certificate, or Non-Creamy Layer.'
    ]
  },
  SC: {
    code: 'SC',
    name: 'Scheduled Castes and Scheduled Caste converts to Buddhism',
    marathiName: 'अनुसूचित जाती व बौद्ध धर्मांतरित',
    quotaDescription: '13.0% of Maharashtra State CAP seats',
    quotaPercentage: 13.0,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: false,
    sourceRef: 'Brochure Page 13, Rule 7(6)(a) Sr. 01 & Page 93, Sr. 7',
    admissionConditions: [
      'Applicable strictly to candidates belonging to Maharashtra State only (Rule 7(6)).',
      'Eligible for 5% relaxation in minimum qualifying marks (e.g., 40% for UG instead of 45%; 45% for PG instead of 50%; 50% for M.Pharm instead of 55%).',
      'Mandatory: Caste Certificate AND Caste Validity Certificate issued by Divisional Scrutiny Committee.',
      'Non-Creamy Layer (NCL) is NOT required for SC category candidates.',
      'Rule 9(3)(e)(iii): Failure to submit Caste Validity results in conversion to General Category.'
    ]
  },
  ST: {
    code: 'ST',
    name: 'Scheduled Tribes',
    marathiName: 'अनुसूचित जमाती',
    quotaDescription: '7.0% of Maharashtra State CAP seats',
    quotaPercentage: 7.0,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: false,
    sourceRef: 'Brochure Page 13, Rule 7(6)(a) Sr. 02 & Page 93, Sr. 7',
    admissionConditions: [
      'Applicable strictly to candidates belonging to Maharashtra State only (Rule 7(6)).',
      'Eligible for 5% relaxation in minimum qualifying marks (e.g., 40% for UG instead of 45%; 45% for PG instead of 50%).',
      'Mandatory: Tribe Certificate AND Tribe Validity Certificate issued by Scheduled Tribe Scrutiny Committee.',
      'Non-Creamy Layer (NCL) is NOT required for ST category candidates.',
      'Rule 9(3)(e)(iii): Failure to submit Tribe Validity results in conversion to General Category.'
    ]
  },
  'VJ/DT-NT(A)': {
    code: 'VJ/DT-NT(A)',
    name: 'Vimukta Jati (VJ) / De-Notified Tribes (DT) (NT-A)',
    marathiName: 'विमुक्त जाती / भटक्या जमाती (अ)',
    quotaDescription: '3.0% of Maharashtra State CAP seats',
    quotaPercentage: 3.0,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: true,
    nclValidityDate: '31st March 2027',
    sourceRef: 'Brochure Page 13, Rule 7(6)(a) Sr. 03 & Page 93, Sr. 8',
    admissionConditions: [
      'Applicable strictly to candidates belonging to Maharashtra State only (Rule 7(6)).',
      'Eligible for 5% relaxation in minimum qualifying marks.',
      'Mandatory: Caste Certificate, Caste Validity Certificate, AND Non-Creamy Layer (NCL) valid up to 31st March 2027.',
      'Rule 9(3)(e)(iii): Without Validity and valid NCL, converted to General Category during CAP scrutiny.'
    ]
  },
  'NT(B)': {
    code: 'NT(B)',
    name: 'Nomadic Tribes 1 (NT-B)',
    marathiName: 'भटक्या जमाती (ब)',
    quotaDescription: '2.5% of Maharashtra State CAP seats',
    quotaPercentage: 2.5,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: true,
    nclValidityDate: '31st March 2027',
    sourceRef: 'Brochure Page 13, Rule 7(6)(a) Sr. 04 & Page 93, Sr. 8',
    admissionConditions: [
      'Applicable strictly to Maharashtra State candidates.',
      'Eligible for 5% relaxation in qualifying marks.',
      'Mandatory: Caste Certificate, Caste Validity, and NCL valid up to 31st March 2027.'
    ]
  },
  'NT(C)': {
    code: 'NT(C)',
    name: 'Nomadic Tribes 2 (NT-C - Dhangar and allied)',
    marathiName: 'भटक्या जमाती (क - धनगर व तत्सम)',
    quotaDescription: '3.5% of Maharashtra State CAP seats',
    quotaPercentage: 3.5,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: true,
    nclValidityDate: '31st March 2027',
    sourceRef: 'Brochure Page 13, Rule 7(6)(a) Sr. 05 & Page 93, Sr. 8',
    admissionConditions: [
      'Applicable strictly to Maharashtra State candidates.',
      'Eligible for 5% relaxation in qualifying marks.',
      'Mandatory: Caste Certificate, Caste Validity, and NCL valid up to 31st March 2027.'
    ]
  },
  'NT(D)': {
    code: 'NT(D)',
    name: 'Nomadic Tribes 3 (NT-D - Vanjari and allied)',
    marathiName: 'भटक्या जमाती (ड - वंजारी व तत्सम)',
    quotaDescription: '2.0% of Maharashtra State CAP seats',
    quotaPercentage: 2.0,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: true,
    nclValidityDate: '31st March 2027',
    sourceRef: 'Brochure Page 13, Rule 7(6)(a) Sr. 06 & Page 93, Sr. 8',
    admissionConditions: [
      'Applicable strictly to Maharashtra State candidates.',
      'Eligible for 5% relaxation in qualifying marks.',
      'Mandatory: Caste Certificate, Caste Validity, and NCL valid up to 31st March 2027.'
    ]
  },
  OBC: {
    code: 'OBC',
    name: 'Other Backward Classes',
    marathiName: 'इतर मागास प्रवर्ग',
    quotaDescription: '19.0% of Maharashtra State CAP seats',
    quotaPercentage: 19.0,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: true,
    nclValidityDate: '31st March 2027',
    sourceRef: 'Brochure Page 13, Rule 7(6)(a) Sr. 07 & Page 93, Sr. 8',
    admissionConditions: [
      'Applicable strictly to Maharashtra State candidates.',
      'Eligible for 5% relaxation in qualifying marks (e.g., 40% for UG instead of 45%).',
      'Mandatory: Caste Certificate, Caste Validity, and Non-Creamy Layer (NCL) certificate valid up to 31st March 2027.',
      'Rule 9(3)(e)(iii): Without Validity and valid NCL, converted to General Category during CAP scrutiny.'
    ]
  },
  SBC: {
    code: 'SBC',
    name: 'Special Backward Class',
    marathiName: 'विशेष मागास प्रवर्ग',
    quotaDescription: 'Stage III Allocation up to 2.0% of vacant reserved seats',
    quotaPercentage: 2.0,
    isConstitutionalReservation: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: true,
    nclValidityDate: '31st March 2027',
    sourceRef: 'Brochure Page 77 Rule 10(1)(d), Page 79 Rule 10(1) Stage III & Page 93 Sr. 8',
    admissionConditions: [
      'SBC candidates are considered for allotment in General Category by virtue of merit, and in original Reserved Class prior to SBC inclusion (Rule 10(1) Stage I(d)).',
      'If Reserved class category seats remain vacant, such seats are considered for allotment to SBC candidates up to 2% of seats in Stage III (Rule 10(1) Stage III, Page 79).',
      'Eligible for 5% relaxation in qualifying marks for Maharashtra State candidates.',
      'Mandatory: Caste Certificate, Caste Validity, and Non-Creamy Layer (NCL) valid up to 31st March 2027.'
    ]
  },
  SEBC: {
    code: 'SEBC',
    name: 'Socially and Educationally Backward Classes',
    marathiName: 'सामाजिक व शैक्षणिकदृष्ट्या मागास प्रवर्ग',
    quotaDescription: '10.0% of Maharashtra State CAP seats (*Sub Judice)',
    quotaPercentage: 10.0,
    isConstitutionalReservation: true,
    isSubJudice: true,
    requiresCasteCertificate: true,
    requiresCasteValidity: true,
    requiresNonCreamyLayer: true,
    nclValidityDate: '31st March 2027',
    sourceRef: 'Brochure Page 14, Rule 7(6)(a) Sr. 08 & Page 93, Sr. 8',
    admissionConditions: [
      '*Official Footnote (Brochure page 14): In case of SEBC Candidates, reservation policy is subject to the decision of the Hon’ble High Court in related Writ Petitions.',
      'Eligible for 5% relaxation in qualifying marks for Maharashtra State candidates.',
      'Mandatory: SEBC Caste Certificate, Caste Validity Certificate, and Non-Creamy Layer (NCL) valid up to 31st March 2027.'
    ]
  },
  EWS: {
    code: 'EWS',
    name: 'Economically Weaker Section',
    marathiName: 'आर्थिक दुर्बल घटक',
    quotaDescription: '10.0% over & above sanctioned intake',
    quotaPercentage: 10.0,
    isConstitutionalReservation: false,
    requiresCasteCertificate: false,
    requiresCasteValidity: false,
    requiresNonCreamyLayer: false,
    proforma: 'Proforma - V',
    sourceRef: 'Brochure Page 15, Rule 7(6)(d) & Page 94, Sr. 9',
    admissionConditions: [
      '10% seats over & above sanctioned intake as per GR dated 12.02.2019 and 31.05.2021.',
      'Candidate must be domiciled in Maharashtra State and not belong to SC, ST, VJ/NT, OBC, or SBC.',
      'Family gross annual income from all sources must be less than ₹ 8,00,000/- (Rupees Eight Lakh only).',
      'Mandatory: Eligibility Certificate for EWS in Proforma - V valid for AY 2026-27 issued by Tehsildar (GR Code 202105311250599407).',
      'Eligible for 5% relaxation in minimum qualifying marks for Maharashtra State candidates.'
    ]
  },
  PWD: {
    code: 'PWD',
    name: 'Persons with Benchmark Disability',
    marathiName: 'दिव्यांग प्रवर्ग',
    quotaDescription: '5.0% of total CAP seats for Maharashtra candidates',
    quotaPercentage: 5.0,
    isConstitutionalReservation: false,
    requiresCasteCertificate: false,
    requiresCasteValidity: false,
    requiresNonCreamyLayer: false,
    sourceRef: 'Brochure Page 14-15, Rule 7(6)(c) & Page 94, Sr. 13',
    admissionConditions: [
      'Minimum 40% permanent benchmark disability across 21 recognized categories (Locomotor, Visual, Hearing, Intellectual, Autism, Mental Illness, Multiple Disabilities, etc.).',
      'Available only for Maharashtra domiciled candidates in HU/SL seats.',
      'Mandatory: Disability Certificate / UDID Card issued by competent medical authority.',
      'Eligible for 5% relaxation in minimum qualifying marks.'
    ]
  }
};


export interface SpecialReservation {
  id: string;
  name: string;
  percentageOrQuota: string;
  description: string;
  eligibility: string[];
  documents: string[];
  proforma?: string;
  sourceRef: string;
}

export const specialReservations: SpecialReservation[] = [
  {
    id: 'ews',
    name: 'Economically Weaker Section (EWS)',
    percentageOrQuota: '10% over & above sanctioned intake',
    description: 'As per GR No. राआधो-4019/प्र.क्र.31/16-अ dated 12.02.2019 and 31.05.2021, 10% seats are reserved for EWS candidates in general seats over and above the sanctioned intake.',
    eligibility: [
      'Candidate must be domiciled in Maharashtra State.',
      'Candidate does not belong to SC, ST, VJ/NT, OBC, or SBC categories.',
      'Family gross annual income from all sources must be less than ₹ 8,00,000/- (Rupees Eight Lakh only).'
    ],
    documents: [
      'Eligibility Certificate for Economically Weaker Section in Proforma - V valid for 2026-27 (issued by Competent Authority / Tehsildar as per GR Code 202105311250599407)',
      'Maharashtra State Domicile Certificate'
    ],
    proforma: 'Proforma - V',
    sourceRef: 'Brochure Page 15, Rule 7(6)(d) & Page 94, Sr. 9'
  },
  {
    id: 'tfws',
    name: 'Tuition Fee Waiver Scheme (TFWS)',
    percentageOrQuota: 'Up to 5% supernumerary seats',
    description: 'Mandatory AICTE scheme for all technical institutions offering UG, Integrated, Dual Degree, MBA/MMS, and MCA programs where at least 50% approved intake was filled in the previous academic year. Grants complete waiver of approved tuition fees.',
    eligibility: [
      'Only Maharashtra State Candidature candidates are eligible.',
      'Parents’ annual income from all sources must be less than ₹ 8,00,000/- (Rupees Eight Lakh only).',
      'Waiver is limited to tuition fees only; all other fees (development, exam, gymkhana, etc.) must be paid by the student.',
      'Admitted candidates cannot change institution or course under any circumstances.',
      'Applicable to First Year of Engineering & Technology, Hotel Management & Catering Technology, Pharmacy, Design, Planning, MBA, and MCA.'
    ],
    documents: [
      'Income Certificate issued by Appropriate Competent Authority of Maharashtra State stating annual parental income is less than ₹ 8 Lakh',
      'Maharashtra State Domicile Certificate'
    ],
    sourceRef: 'Brochure Page 12, Rule 7(5)(c) & Page 95, Sr. 19'
  },
  {
    id: 'defence',
    name: 'Children of Defence Service Personnel (DEF 1, 2, 3)',
    percentageOrQuota: '5% of CAP seats (State Level)',
    description: '5% seats reserved for children of Defence personnel domiciled in Maharashtra or active personnel transferred to Maharashtra. A single merit list is prepared according to strict priority order (Priorities I to IX).',
    eligibility: [
      'Children of Defence service personnel domiciled in Maharashtra, OR active Defence personnel transferred to Maharashtra before last date of CAP.',
      'Not available to civilian staff working in Indian Defence Service.',
      'Priority order: Priority-I (Widows/wards killed in action), Priority-II (Disabled in action & boarded out), Priority-III (Died in service), Priority-IV (Disabled in service), Priority-V (Gallantry award winners), Priority-VI (Wards of Ex-Servicemen), Priority-VII (Wives of disabled/gallantry awardees), Priority-VIII (Wards of serving personnel), Priority-IX (Wives of serving personnel).'
    ],
    documents: [
      'Defence Service Certificate in Proforma - C (for Maharashtra Domiciled)',
      'Defence Service Certificate in Proforma - D (for non-domiciled transferred to MS) with Transfer order & Joining report',
      'Parent’s Domicile Certificate'
    ],
    proforma: 'Proforma - C & Proforma - D',
    sourceRef: 'Brochure Page 14, Rule 7(6)(b) & Page 94, Sr. 11-12'
  },
  {
    id: 'pwd',
    name: 'Persons with Benchmark Disabilities (PwD)',
    percentageOrQuota: '5% of total CAP seats',
    description: '5% seats reserved for Maharashtra domiciled candidates with minimum 40% permanent benchmark disability across 21 recognized categories.',
    eligibility: [
      'Maharashtra domiciled candidate with minimum 40% benchmark disability.',
      '21 recognized disabilities: Locomotor disability, Leprosy cured, Cerebral palsy, Dwarfism, Muscular dystrophy, Acid attack victims, Blindness, Low-vision, Deaf, Hard of hearing, Speech and language disability, Intellectual disability, Specific learning disabilities, Autism spectrum disorder, Mental illness, Multiple sclerosis, Parkinson’s disease, Haemophilia, Thalassemia, Sickle cell disease, Multiple Disabilities.',
      'Allotment done on inter-se merit within respective Reserved or General category.'
    ],
    documents: [
      'Disability Certificate from competent medical authority / UDID card stating minimum 40% permanent disability',
      'Maharashtra State Domicile Certificate'
    ],
    sourceRef: 'Brochure Page 14-15, Rule 7(6)(c) & Page 94, Sr. 13'
  },
  {
    id: 'orphan',
    name: 'Orphan Candidates (अनाथ)',
    percentageOrQuota: '1% of CAP seats',
    description: 'As per GR No. अनाथ-2022/प्र.क्र.122/का-03 dated 06.04.2023, 1% of CAP seats (excluding minority institutions and All India seats) are reserved for Orphan candidates.',
    eligibility: [
      'Candidate recognized as an orphan under Women and Child Welfare Department norms.',
      'Categorized into Institutional orphan (संस्थात्मक) and Non-institutional orphan (संस्थाबाह्य).'
    ],
    documents: [
      'Orphan Certificate in Proforma - U issued by Divisional Deputy Commissioner (विभागीय उपायुक्त, महिला व बाल विकास विभाग)'
    ],
    proforma: 'Proforma - U',
    sourceRef: 'Brochure Page 15, Rule 7(6)(e), Page 94, Sr. 10 & Page 119'
  },
  {
    id: 'female',
    name: 'Female Candidates Reservation',
    percentageOrQuota: '30% horizontal reservation',
    description: 'As per GR No. GEC-1000/(123/2000)/Tech.Edu.-1 dated 17.04.2000, 30% seats are horizontally reserved for female candidates across Open and Reserved categories. No separate female reservation under Defence, PwD, or Orphan categories.',
    eligibility: [
      'Female candidates of Maharashtra State candidature.'
    ],
    documents: [
      'Non-Creamy Layer Certificate (if claiming female seat under OBC/SBC/VJNT/SEBC)'
    ],
    sourceRef: 'Brochure Page 15-16, Rule 7(6)(f)'
  }
];

export interface SeatDistributionModel {
  institutionType: string;
  level: string;
  msSeats: string;
  allIndiaSeats: string;
  instituteQuota: string;
  minorityQuota: string;
  notes: string;
  sourceRef: string;
}

export const seatDistributionSummary: SeatDistributionModel[] = [
  {
    institutionType: 'Government / Govt Aided Autonomous Institutes (e.g. VJTI, GCoE)',
    level: 'First Year UG',
    msSeats: '100% State Level',
    allIndiaSeats: 'Nil',
    instituteQuota: 'Nil',
    minorityQuota: 'Nil',
    notes: '100% seats filled through CAP based on Maharashtra State Candidature.',
    sourceRef: 'Schedule I A(1), p. 98'
  },
  {
    institutionType: 'Government / Govt Aided Non-Autonomous & University Depts',
    level: 'First Year UG',
    msSeats: '70% Home University (HU), 30% Other than Home University (OHU)',
    allIndiaSeats: 'Nil',
    instituteQuota: 'Nil',
    minorityQuota: 'Nil',
    notes: 'Districts of home university given in Rule 4.1.',
    sourceRef: 'Schedule I A(1), p. 98'
  },
  {
    institutionType: 'COEP Technological University, Pune',
    level: 'First Year UG',
    msSeats: '80% State Level',
    allIndiaSeats: '20% (via JEE Main)',
    instituteQuota: 'Nil',
    minorityQuota: 'Nil',
    notes: 'Autonomous state university with 20% All India seats.',
    sourceRef: 'Schedule I A(1), p. 98'
  },
  {
    institutionType: 'ICT Mumbai / LIT University Nagpur',
    level: 'First Year UG',
    msSeats: '70% State Level',
    allIndiaSeats: '30% (via JEE Main)',
    instituteQuota: 'Nil',
    minorityQuota: 'Nil',
    notes: 'Premier state chemical technology universities.',
    sourceRef: 'Schedule I A(1), p. 98'
  },
  {
    institutionType: 'Dr. BATU Lonere',
    level: 'First Year UG',
    msSeats: '85% State Level + 15% for Konkan Region districts (Thane, Raigad, Ratnagiri, Sindhudurg, Palghar)',
    allIndiaSeats: 'Nil',
    instituteQuota: 'Nil',
    minorityQuota: 'Nil',
    notes: 'Special 15% quota for Konkan region districts.',
    sourceRef: 'Schedule I A(1), p. 98'
  },
  {
    institutionType: 'Unaided Private Engineering / Tech Colleges (Non-Minority)',
    level: 'First Year UG',
    msSeats: 'Autonomous: 65% State Level | Non-Autonomous: 45.5% HU, 19.5% OHU',
    allIndiaSeats: '15% (JEE Main / CET)',
    instituteQuota: '20% (includes 5% NRI quota)',
    minorityQuota: 'Nil',
    notes: 'Institutional quota seats filled transparently on inter-se merit under Rule 13.',
    sourceRef: 'Schedule I A(2), p. 99'
  },
  {
    institutionType: 'Unaided Private Minority Engineering / Tech Colleges',
    level: 'First Year UG',
    msSeats: 'MS Seats = Balance under CAP (Autonomous: 100% SL | Non-Auto: 70% HU, 30% OHU)',
    allIndiaSeats: '15% under CAP',
    instituteQuota: '20%',
    minorityQuota: 'Minimum 51% (up to 100%)',
    notes: 'Linguistic or religious minority quota filled through CAP.',
    sourceRef: 'Schedule I A(2), p. 99'
  },
  {
    institutionType: 'Direct Second Year (Engineering, Pharmacy, HMCT) - Unaided',
    level: 'Direct Second Year',
    msSeats: '100% of (10% Lateral Entry Seats + Vacant Seats)',
    allIndiaSeats: 'Nil',
    instituteQuota: 'Nil (Working Pro division has 20%)',
    minorityQuota: 'Nil (51% in minority colleges)',
    notes: 'No institutional quota for regular lateral entry in unaided colleges.',
    sourceRef: 'Schedule II A(2), p. 104'
  }
];
