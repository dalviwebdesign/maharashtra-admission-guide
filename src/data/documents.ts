export interface MasterDocument {
  id: string;
  name: string;
  marathiName?: string;
  category: 'Common' | 'Educational' | 'Entrance' | 'Candidature' | 'Reserved Category' | 'Special Scheme' | 'Institutional Reporting';
  applicability: string;
  description: string;
  proforma?: string;
  formatAndSpecs: string;
  brochureSource: string;
}

export const masterDocumentsList: MasterDocument[] = [
  // Common & Educational
  {
    id: 'ssc-marksheet',
    name: 'SSC (Std. X) Mark Sheet',
    marathiName: '१० वी गुणपत्रिका',
    category: 'Educational',
    applicability: 'Mandatory for ALL Candidates',
    description: 'Serves as proof of date of birth, mother tongue, and tie-breaking merit calculation.',
    formatAndSpecs: 'Original scan in .jpg or .gif (150+ dpi, max 1MB)',
    brochureSource: 'Brochure Page 92, Rule 17, Sr. 1'
  },
  {
    id: 'hsc-marksheet',
    name: 'HSC (Std. XII) / Equivalent Mark Sheet',
    marathiName: '१२ वी गुणपत्रिका',
    category: 'Educational',
    applicability: 'All candidates applying for UG / Integrated courses',
    description: 'Marksheet showing marks in Physics, Mathematics, Chemistry, Biology, or relevant subjects to substantiate minimum percentage eligibility.',
    formatAndSpecs: 'Original scan in .jpg or .gif (150+ dpi, max 1MB)',
    brochureSource: 'Brochure Page 92, Rule 17, Sr. 1'
  },
  {
    id: 'diploma-degree-marksheet',
    name: 'Diploma / Graduation Marksheet (All Semesters)',
    marathiName: 'पदविका / पदवी सर्व सत्र गुणपत्रिका',
    category: 'Educational',
    applicability: 'All candidates applying for Lateral Entry (DSE/DSP) or PG courses (MBA, MCA, M.Tech, M.Pharm, M.Arch)',
    description: 'Qualifying examination mark sheet of all semesters / final consolidated marksheet showing minimum required aggregate.',
    formatAndSpecs: 'Original scan in .jpg or .gif (150+ dpi, max 1MB)',
    brochureSource: 'Brochure Page 92, Rule 17, Sr. 1'
  },
  {
    id: 'score-card',
    name: 'Entrance Examination Scorecard',
    marathiName: 'प्रवेश परीक्षा गुणपत्रिका (MHT-CET / JEE / NEET / GPAT / GATE / CAT etc.)',
    category: 'Entrance',
    applicability: 'Candidates applying on basis of entrance exam',
    description: 'Official scorecard of MHT-CET 2026, JEE Main, NEET, NATA, UCEED, CUET, MAH-MBA-CET, CAT, CMAT, MAH-MCA-CET, GPAT, GATE, CEED, or PGETA.',
    formatAndSpecs: 'Downloaded official scorecard scan',
    brochureSource: 'Brochure Page 92, Rule 17, Sr. 1'
  },
  {
    id: 'school-leaving',
    name: 'School Leaving Certificate (TC / LC)',
    marathiName: 'शाळा सोडल्याचा दाखला',
    category: 'Common',
    applicability: 'Mandatory for all candidates (substantiates nationality, mother tongue, and place of birth)',
    description: 'Issued by the junior college or high school last attended. If place of birth is in Maharashtra and nationality is stated as Indian, it serves as Type-A and Nationality proof.',
    formatAndSpecs: 'Original scan in .jpg or .gif (150+ dpi, max 1MB)',
    brochureSource: 'Brochure Page 92, Rule 17, Sr. 1'
  },
  {
    id: 'indian-nationality',
    name: 'Certificate of Indian Nationality',
    marathiName: 'भारतीय राष्ट्रीयत्व प्रमाणपत्र',
    category: 'Common',
    applicability: 'Mandatory for all Candidates',
    description: 'School Leaving Certificate specifying nationality as "Indian", OR Indian Passport, OR Domicile Certificate issued by Competent Authority.',
    formatAndSpecs: 'Original scan',
    brochureSource: 'Brochure Page 92, Rule 17, Sr. 1'
  },

  // Candidature Domicile
  {
    id: 'domicile-candidate',
    name: 'Domicile Certificate of Candidate (Maharashtra)',
    marathiName: 'महाराष्ट्र अधिवास प्रमाणपत्र (उमेदवाराचे)',
    category: 'Candidature',
    applicability: 'Candidates claiming Maharashtra State Candidature (Type A / B)',
    description: 'Issued by Executive Magistrate / Tehsildar / Competent Authority establishing domicile in the State of Maharashtra.',
    formatAndSpecs: 'Barcoded digital certificate / signed certificate',
    brochureSource: 'Brochure Page 93, Rule 17, Sr. 2-3'
  },
  {
    id: 'proforma-a',
    name: 'Proforma - A (Central Govt / PSU Employee Posted in MS)',
    marathiName: 'प्रपत्र - अ (केंद्रीय शासकीय कर्मचारी)',
    category: 'Candidature',
    applicability: 'Type-C Candidates',
    description: 'Certificate from employer certifying parent is working in Central Govt / Undertaking and transferred to Maharashtra before last date of CAP.',
    proforma: 'Proforma - A',
    formatAndSpecs: 'Accompanied by attested copy of Transfer Order & Joining Report',
    brochureSource: 'Brochure Page 93, Sr. 4 & Page 108'
  },
  {
    id: 'proforma-b1-b2',
    name: 'Proforma - B1 / B2 (Maharashtra Govt Employee Serving / Retired)',
    marathiName: 'प्रपत्र - ब१ / ब२ (महाराष्ट्र राज्य शासकीय कर्मचारी)',
    category: 'Candidature',
    applicability: 'Type-D Candidates',
    description: 'Employer certificate (B1) for serving Maharashtra Govt employee or Undertaking (B2) with Pension Pay Order & proof of settlement for retired employee.',
    proforma: 'Proforma - B1 & B2',
    formatAndSpecs: 'Original seal and signature of Head of Office',
    brochureSource: 'Brochure Page 93, Sr. 5 & Pages 109-110'
  },
  {
    id: 'proforma-g1-g2',
    name: 'Proforma - G1 & G2 (Maharashtra-Karnataka Border Area)',
    marathiName: 'प्रपत्र - जी१ आणि जी२ (महाराष्ट्र-कर्नाटक सीमाभाग)',
    category: 'Candidature',
    applicability: 'Type-E Candidates',
    description: 'G1 issued by District Magistrate certifying residence in notified border village; G2 issued by Principal certifying Marathi is mother tongue and passed Std X/XII with Marathi.',
    proforma: 'Proforma - G1 & G2',
    formatAndSpecs: 'Official seals from DM and College Principal',
    brochureSource: 'Brochure Page 93, Sr. 6 & Page 113'
  },

  // Category & Social Reservations
  {
    id: 'caste-certificate',
    name: 'Caste Certificate / Tribe Certificate',
    marathiName: 'जात / जमात प्रमाणपत्र',
    category: 'Reserved Category',
    applicability: 'All Reserved Category Candidates (SC, ST, VJ/NT, OBC, SBC, SEBC)',
    description: 'Issued by Sub-Divisional Officer / Executive Magistrate in Maharashtra mentioning specific caste/tribe and GR reference.',
    formatAndSpecs: 'Official certificate issued in Maharashtra State',
    brochureSource: 'Brochure Page 93, Sr. 7-8'
  },
  {
    id: 'caste-validity',
    name: 'Caste Validity Certificate / Tribe Validity Certificate',
    marathiName: 'जात / जमात वैधता प्रमाणपत्र',
    category: 'Reserved Category',
    applicability: 'MANDATORY for ALL Reserved Category Candidates (SC, ST, VJ/NT, OBC, SBC, SEBC)',
    description: 'Issued by Divisional Caste Certificate Scrutiny Committee. Failure to submit converts candidate to General/Open category.',
    formatAndSpecs: 'Original validity certificate with barcoded validity order',
    brochureSource: 'Brochure Page 93, Sr. 7-8'
  },
  {
    id: 'non-creamy-layer',
    name: 'Non-Creamy Layer Certificate (Valid upto 31st March 2027)',
    marathiName: 'नॉन-क्रिमीलेअर प्रमाणपत्र (३१ मार्च २०२७ पर्यंत वैध)',
    category: 'Reserved Category',
    applicability: 'Candidates belonging to VJ/DT-NT(A), NT(B), NT(C), NT(D), OBC, SBC, SEBC',
    description: 'Certifies that the candidate does not belong to creamy layer. Must be valid up to 31st March 2027. (Not required for SC and ST).',
    formatAndSpecs: 'Sub-Divisional Officer / Tehsildar issued digital certificate',
    brochureSource: 'Brochure Page 93, Sr. 8'
  },
  {
    id: 'ews-proforma-v',
    name: 'EWS Eligibility Certificate (Proforma - V for 2026-27)',
    marathiName: 'आर्थिक दुर्बल घटक पात्रता प्रमाणपत्र (प्रपत्र - व्ही २०२६-२७)',
    category: 'Special Scheme',
    applicability: 'Economically Weaker Section (EWS) candidates',
    description: 'Issued by Competent Authority / Tehsildar as per GR No. राआधो/4019 प्र.क्र.31/16 अ dated 31.05.2021 (GR Code 202105311250599407) certifying family annual income < ₹ 8 Lakh.',
    proforma: 'Proforma - V',
    formatAndSpecs: 'Valid for Financial Year 2026-27',
    brochureSource: 'Brochure Page 94, Sr. 9 & Page 120'
  },
  {
    id: 'tfws-income-cert',
    name: 'Income Certificate for TFWS (< ₹ 8 Lakh)',
    marathiName: 'उत्पन्न प्रमाणपत्र (८ लाखापेक्षा कमी - टीएफडब्ल्यूएस)',
    category: 'Special Scheme',
    applicability: 'Candidates claiming Tuition Fee Waiver Scheme (TFWS)',
    description: 'Issued by Tehsildar / Competent Authority stating parent’s annual income from all sources is less than ₹ 8 Lakh.',
    formatAndSpecs: 'Current financial year valid income certificate',
    brochureSource: 'Brochure Page 95, Sr. 19'
  },
  {
    id: 'pwd-certificate',
    name: 'Disability Certificate (Min 40% Benchmark Disability)',
    marathiName: 'दिव्यांग प्रमाणपत्र (किमान ४०% कायमस्वरूपी)',
    category: 'Special Scheme',
    applicability: 'Candidates with Benchmark Disabilities (PwD)',
    description: 'UDID card or certificate from competent medical board clearly stating disability is not less than 40% and is permanent in nature.',
    formatAndSpecs: 'Government Medical Board / UDID Card',
    brochureSource: 'Brochure Page 94, Sr. 13'
  },
  {
    id: 'defence-proforma-c-d',
    name: 'Defence Service Certificate (Proforma - C or D)',
    marathiName: 'संरक्षण दल प्रमाणपत्र (प्रपत्र - सी किंवा डी)',
    category: 'Special Scheme',
    applicability: 'Children of Defence Service Personnel',
    description: 'Proforma C for Maharashtra Domiciled defence personnel; Proforma D with Transfer order and Joining report for personnel transferred to Maharashtra.',
    proforma: 'Proforma - C & D',
    formatAndSpecs: 'Signed by Authority not below rank of Commandant / District Sainik Welfare Officer',
    brochureSource: 'Brochure Page 94, Sr. 11-12 & Pages 111-112'
  },
  {
    id: 'orphan-proforma-u',
    name: 'Orphan Certificate (Proforma - U)',
    marathiName: 'अनाथ प्रमाणपत्र (प्रपत्र - यु)',
    category: 'Special Scheme',
    applicability: 'Orphan Candidates claiming 1% reservation',
    description: 'Issued by Divisional Deputy Commissioner, Women and Child Development Department as per GR dated 06.04.2023.',
    proforma: 'Proforma - U',
    formatAndSpecs: 'Signed by Divisional Deputy Commissioner WCD',
    brochureSource: 'Brochure Page 94, Sr. 10 & Page 119'
  },
  {
    id: 'minority-proforma-o',
    name: 'Minority Declaration (Proforma - O) / School Leaving Cert',
    marathiName: 'अल्पसंख्याक स्वयंघोषणापत्र (प्रपत्र - ओ)',
    category: 'Special Scheme',
    applicability: 'Candidates claiming Minority Quota (Linguistic or Religious)',
    description: 'Self-declaration in Proforma - O if mother tongue/religion not mentioned on Leaving Certificate, plus Domicile Certificate of Maharashtra.',
    proforma: 'Proforma - O',
    formatAndSpecs: 'Signed by candidate and parent',
    brochureSource: 'Brochure Page 95, Sr. 20 & Page 117'
  },
  {
    id: 'working-pro-w1-w2',
    name: 'Working Professional Documents (Proforma - W1 & W2)',
    marathiName: 'नोकरदार व्यावसायिक प्रमाणपत्र (प्रपत्र - डब्ल्यू१ आणि डब्ल्यू२)',
    category: 'Special Scheme',
    applicability: 'Candidates applying under Working Professionals Division',
    description: 'Proforma W1: Employer Experience Certificate (min 1 year) with workplace latitude & longitude; Proforma W2: Self-declaration of working within 50 KM radial distance from college.',
    proforma: 'Proforma - W1 & W2',
    formatAndSpecs: 'Company letterhead with outward number and seal',
    brochureSource: 'Brochure Page 95, Sr. 22 & Pages 121-122'
  },
  {
    id: 'pci-approval-letter',
    name: 'PCI Approval Letter under Section 12',
    marathiName: 'फार्मसी कौन्सिल मान्यता पत्र',
    category: 'Educational',
    applicability: 'Direct Second Year Pharmacy (DSP) and B.Pharm (Practice)',
    description: 'Approval letter of Pharmacy Council of India given to the candidate’s D.Pharm. institution under section 12 of the Pharmacy Act, 1948.',
    formatAndSpecs: 'PCI official college approval copy',
    brochureSource: 'Brochure Page 93, Sr. 7'
  }
];
