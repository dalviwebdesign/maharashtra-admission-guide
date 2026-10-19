export interface UniversityJurisdiction {
  srNo: number;
  universityName: string;
  districts: string[];
}

export const universitiesJurisdiction: UniversityJurisdiction[] = [
  { srNo: 1, universityName: 'Dr. Babasaheb Ambedkar Marathwada University', districts: ['Chhatrapati Sambhajinagar', 'Beed', 'Jalna', 'Dharashiv'] },
  { srNo: 2, universityName: 'Swami Ramanand Teerth Marathwada University, Nanded', districts: ['Hingoli', 'Latur', 'Nanded', 'Parbhani'] },
  { srNo: 3, universityName: 'Mumbai University', districts: ['Mumbai City', 'Mumbai Suburban', 'Ratnagiri', 'Raigad', 'Palghar', 'Sindhudurg', 'Thane'] },
  { srNo: 4, universityName: 'Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon', districts: ['Dhule', 'Jalgaon', 'Nandurbar'] },
  { srNo: 5, universityName: 'Savitribai Phule Pune University', districts: ['Ahmednagar', 'Nashik', 'Pune'] },
  { srNo: 6, universityName: 'Shivaji University', districts: ['Kolhapur', 'Sangli', 'Satara'] },
  { srNo: 7, universityName: 'Punyashlok Ahilyabai Holkar Solapur University', districts: ['Solapur'] },
  { srNo: 8, universityName: 'Sant Gadge Baba Amravati University', districts: ['Akola', 'Amravati', 'Buldana', 'Washim', 'Yavatmal'] },
  { srNo: 9, universityName: 'Rashtrasant Tukdoji Maharaj Nagpur University', districts: ['Bhandara', 'Gondia', 'Nagpur', 'Wardha'] },
  { srNo: 10, universityName: 'Gondwana University', districts: ['Chandrapur', 'Gadchiroli'] }
];

export interface CandidatureDetails {
  type: string;
  title: string;
  eligibilityDescription: string;
  homeUniversityDetermination: string;
  documentsRequired: string[];
  proforma?: string;
  sourceRef: string;
}

export const maharashtraCandidatureTypes: CandidatureDetails[] = [
  {
    type: 'Type-A',
    title: 'Maharashtra State Candidature Type A (Domicile / Born in Maharashtra & Studied in Maharashtra)',
    eligibilityDescription: 'Candidate passing SSC and HSC (10+2) or Diploma in Engineering / D.Voc. examination from a recognized institution located in Maharashtra State; AND the candidate is either domiciled in Maharashtra and/or born in Maharashtra.',
    homeUniversityDetermination: 'Place of passing of Qualifying Examination falling within the jurisdiction of the respective University area.',
    documentsRequired: [
      'Domicile Certificate of Candidate indicating place of birth in Maharashtra State, OR',
      'Birth Certificate indicating place of birth in Maharashtra State, OR',
      'School Leaving Certificate indicating place of birth in Maharashtra State'
    ],
    sourceRef: 'Brochure Page 6, Rule 5(1)(Type A) & Page 93, Sr. 2'
  },
  {
    type: 'Type-B',
    title: 'Maharashtra State Candidature Type B (Parent Domiciled in Maharashtra)',
    eligibilityDescription: 'Candidate who does not fall in Type A above, but who or whose father or mother is domiciled in the State of Maharashtra and possesses a Domicile Certificate.',
    homeUniversityDetermination: 'Place of domicile Certificate issuing authority falling within the jurisdiction of the respective University area.',
    documentsRequired: [
      'Domicile Certificate of Candidate, Father, or Mother indicating that he/she is domiciled in the State of Maharashtra'
    ],
    sourceRef: 'Brochure Page 7, Rule 5(1)(Type B) & Page 93, Sr. 3'
  },
  {
    type: 'Type-C',
    title: 'Maharashtra State Candidature Type C (Central Government / PSU Employee Transferred to Maharashtra)',
    eligibilityDescription: 'Candidate who does not fall in Type A or Type B, but whose father or mother is an employee of the Government of India or Government of India Undertaking who has been posted and reported to duty in Maharashtra State before the last date for submitting the CAP application form.',
    homeUniversityDetermination: 'Place of posting of father or mother of candidate falling within the jurisdiction of the respective University area.',
    documentsRequired: [
      'Certificate from the employer in Proforma - A',
      'Attested copy of Transfer Order',
      'Attested copy of Joining Report'
    ],
    proforma: 'Proforma - A',
    sourceRef: 'Brochure Page 7, Rule 5(1)(Type C), Page 93, Sr. 4 & Page 108'
  },
  {
    type: 'Type-D',
    title: 'Maharashtra State Candidature Type D (Maharashtra State Government / Undertaking Employee or Retired)',
    eligibilityDescription: 'Candidate who does not fall in Type A, B, or C, but whose father or mother is an employee or retired employee of the Government of Maharashtra or Government of Maharashtra Undertaking.',
    homeUniversityDetermination: 'Place of posting of father/mother, or place of settlement if retired, or place of last posting if deputed outside Maharashtra.',
    documentsRequired: [
      'Certificate from employer in Proforma - B1 (for serving employees) with Transfer Order & Joining Report, OR',
      'Undertaking in Proforma - B2 (for retired employees) accompanied by Pension Pay Order and proof of settlement (Ration Card/Electricity Bill/Aadhaar/Property doc)'
    ],
    proforma: 'Proforma - B1 & B2',
    sourceRef: 'Brochure Page 7, Rule 5(1)(Type D), Page 93, Sr. 5 & Pages 109-110'
  },
  {
    type: 'Type-E',
    title: 'Maharashtra State Candidature Type E (Maharashtra-Karnataka Disputed Border Area Residents)',
    eligibilityDescription: 'Candidates passing qualifying examination from a recognized institution located in the Maharashtra-Karnataka Border area (or Maharashtra), residing in the border area, and whose mother tongue is Marathi.',
    homeUniversityDetermination: 'Candidate shall be considered for the Outside Home University (OHU) or State Level Seats.',
    documentsRequired: [
      'Certificate stating that candidate belongs to the Maharashtra-Karnataka border area in Proforma - G1 (issued by District Collector/DM/Taluka Executive Magistrate)',
      'Certificate stating that the mother tongue of the candidate is Marathi in Proforma - G2 (issued by Head Master/Principal stating student passed Std X/XII with Marathi)'
    ],
    proforma: 'Proforma - G1 & G2',
    sourceRef: 'Brochure Page 7-9, Rule 5(1)(Type E), Page 93, Sr. 6 & Page 113'
  }
];

export interface OtherCandidatureType {
  code: string;
  name: string;
  description: string;
  rulesAndProvisions: string[];
  sourceRef: string;
}

export const otherCandidatureTypes: OtherCandidatureType[] = [
  {
    code: 'All-India',
    name: 'All India Candidature',
    description: 'Candidates having Indian nationality are eligible under this category for All India seats (15% in unaided private institutions).',
    rulesAndProvisions: [
      'Allotted on the basis of national level entrance exams (JEE Main Paper 1 for B.E., NEET for Pharmacy, NATA/JEE Paper 2 for B.Arch, CUET/MAH-CET for BCA/BBA, CAT/CMAT/XAT/MAT/ATMA/GMAT for MBA, GPAT for M.Pharm, GATE for M.Tech).',
      'Preference is given to candidates with national examination positive score over MHT-CET score.',
      'All seats in this category are treated as General/Open with no caste reservation benefits.'
    ],
    sourceRef: 'Brochure Page 9, Rule 5(2) & Page 79-81'
  },
  {
    code: 'Minority',
    name: 'Minority Candidature',
    description: 'Maharashtra domiciled candidate belonging to a particular linguistic or religious minority community within the State as notified by the Government.',
    rulesAndProvisions: [
      'Eligible for seats earmarked for minority communities in linguistic or religious minority educational institutions (minimum 51% quota under CAP).',
      'Candidate must submit Self-Declaration in Proforma - O or School Leaving Certificate specifying religion/mother tongue, plus Domicile Certificate of Maharashtra / Type A proof.',
      'Covers 22 recognized minority statuses including Muslim, Buddhist, Christian, Sikh, Jain, Parsi/Zoroastrian, and Linguistic minorities (Gujarati, Hindi, Sindhi, Punjabi, Kannada, Malayalam, Tamil, Konkani, etc.).'
    ],
    sourceRef: 'Brochure Page 9, Rule 5(3), Page 95, Sr. 20, Page 117-118'
  },
  {
    code: 'JK-Migrant',
    name: 'Jammu & Kashmir as well as Ladakh Migrant Candidature',
    description: 'Children of citizens displaced from J&K/Ladakh to any part of India from 1990 onwards; children of IAS/IPS/IFS/Military/Police combating terrorism; and Kashmiri Pandits / Hindu families living in Kashmir valley.',
    rulesAndProvisions: [
      'Supernumerary seats created over and above sanctioned intake.',
      'Counselling round conducted at identified Admission Centre in Maharashtra strictly on inter-se merit.',
      'Document evidence strictly as per Proforma J (for defence/police/officers posted in disturbed area), Proforma K (migrants in refugee camps), Proforma L (displaced staying with relatives), or Proforma M (Kashmiri Pandits non-migrants living in valley).',
      'Fee payable is capped at the level of Non-Autonomous Government Institutes (Brochure p. 77, 82).',
      'Admissions once confirmed are final; candidates cannot change course or college in any year of study.'
    ],
    sourceRef: 'Brochure Page 9, Rule 5(6), Page 81-82, Page 94, Sr. 14 & Pages 114-116'
  },
  {
    code: 'NRI-OCI-PIO-FN',
    name: 'NRI / OCI / PIO / Children of Indian Workers in Gulf Countries (CIWGC) / Foreign Nationals',
    description: 'Supernumerary seats up to 15% of sanctioned intake in approved institutions (1/3rd for CIWGC, 2/3rd for OCI/PIO/FN).',
    rulesAndProvisions: [
      'OCI candidates who obtained OCI status before 04th March 2021 are eligible for Maharashtra Candidature if passed 10th and 12th from Maharashtra and lived for 10+ years in Maharashtra, or All India Candidature if lived 10+ years in India (as per Supreme Court Order in W.P. (C) No. 891 of 2021).',
      'Vacant seats in CIWGC quota can be filled from OCI/PIO/FN and vice versa.',
      'Application fee is USD 50 through online mode.'
    ],
    sourceRef: 'Brochure Page 9, Rule 5(4-5), Page 11, Rule 7(5)(a)'
  }
];
