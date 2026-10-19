export interface SourceMappingEntry {
  topic: string;
  category: 'Rule' | 'Eligibility' | 'Reservation' | 'CAP' | 'Schedule' | 'Proforma';
  section: string;
  printedPage: number;
  pdfViewerPage: number;
  summary: string;
  officialReference: string;
}

export const brochureSourceMapping: SourceMappingEntry[] = [
  // Legal & Definitions
  {
    topic: 'Introduction & Legal Basis of Admissions',
    category: 'Rule',
    section: 'Section 1',
    printedPage: 1,
    pdfViewerPage: 6,
    summary: 'Maharashtra Professional Educational Institutions Act, 2015 (Mah. XXVIII of 2015), rules published 24.03.2025 and amended 19.06.2025, 02.07.2026.',
    officialReference: 'Maharashtra Act No. XXVIII of 2015; GR Higher & Technical Education No. TEM-2016/CR (473/16)/TE-4'
  },
  {
    topic: 'Official Definitions (Act, ARC, All India Seats, CAP, TFWS, Working Pro)',
    category: 'Rule',
    section: 'Section 2',
    printedPage: 1,
    pdfViewerPage: 6,
    summary: 'Definitions of Competent Authority, Facilitation Centre, Home University, Inter-Se-Merit, TFWS, Sponsored Candidate, Working Professional.',
    officialReference: 'Brochure Section 2(a) to 2(ff)'
  },
  {
    topic: 'Home Universities in Maharashtra & Their District Jurisdictions',
    category: 'Rule',
    section: 'Section 4.1',
    printedPage: 5,
    pdfViewerPage: 10,
    summary: 'Jurisdiction list of 10 state universities (BAMU, SRTMU, Mumbai, NMU, SPPU, Shivaji, PAH Solapur, SGBAU, RTMNU, Gondwana).',
    officialReference: 'Brochure Table 4.1 Jurisdiction of the Universities'
  },
  {
    topic: 'Maharashtra State Candidature Types (Type A, B, C, D, E)',
    category: 'Rule',
    section: 'Section 5(1)',
    printedPage: 6,
    pdfViewerPage: 11,
    summary: 'Rules governing domicile, birth, parents employment, and Karnataka border areas (Type A to E) and Home University determination.',
    officialReference: 'Brochure Section 5(1)'
  },
  {
    topic: 'All India, Minority, NRI, OCI/PIO, and J&K Migrant Candidature',
    category: 'Rule',
    section: 'Section 5(2)-(6)',
    printedPage: 9,
    pdfViewerPage: 14,
    summary: 'Conditions for All India, Minority (Linguistic/Religious), NRI/OCI/PIO, and J&K/Ladakh Migrants. Supreme Court order W.P.(C) 891/2021 regarding OCI status before 04.03.2021.',
    officialReference: 'Brochure Section 5(2) to 5(6)'
  },

  // Allocations & Reservations
  {
    topic: 'Allocation of Seats (MS, All India, Minority, Institutional Quota)',
    category: 'Reservation',
    section: 'Section 7(1)-(4)',
    printedPage: 10,
    pdfViewerPage: 15,
    summary: 'Percentages for Home University, Other than Home University, State Level, Institutional Quota (max 20% with 5% NRI), and Minority Quota (min 51%).',
    officialReference: 'Brochure Section 7(1) to 7(4)'
  },
  {
    topic: 'Tuition Fee Waiver Scheme (TFWS) 5% Supernumerary Seats',
    category: 'Reservation',
    section: 'Section 7(5)(c)',
    printedPage: 12,
    pdfViewerPage: 17,
    summary: 'Mandatory 5% supernumerary seats in institutions with ≥50% filled intake. Annual parent income < ₹ 8 Lakh. Complete tuition fee waiver.',
    officialReference: 'Brochure Section 7(5)(c)'
  },
  {
    topic: 'Reserved Class Categories (SC, ST, VJ/NT, OBC, SEBC - Total 60%)',
    category: 'Reservation',
    section: 'Section 7(6)(a)',
    printedPage: 13,
    pdfViewerPage: 18,
    summary: 'Statutory percentages: SC 13%, ST 7%, VJ/DT-NT(A) 3%, NT-B 2.5%, NT-C 3.5%, NT-D 2%, OBC 19%, SEBC 10% (sub judice). Total 60%.',
    officialReference: 'Brochure Section 7(6)(a) Table'
  },
  {
    topic: 'Defence Personnel Children Reservation (5% State Level, Priority I to IX)',
    category: 'Reservation',
    section: 'Section 7(6)(b)',
    printedPage: 14,
    pdfViewerPage: 19,
    summary: '5% seats within sanctioned intake. Priority I to IX as per Ministry of Defence circular F.No.6(1)/2017/D(Res.II).',
    officialReference: 'Brochure Section 7(6)(b)'
  },
  {
    topic: 'Persons with Benchmark Disabilities (PwD) 5% Reservation',
    category: 'Reservation',
    section: 'Section 7(6)(c)',
    printedPage: 14,
    pdfViewerPage: 19,
    summary: '5% seats for MS domiciled candidates with min 40% permanent benchmark disability across 21 recognized disabilities.',
    officialReference: 'Brochure Section 7(6)(c)'
  },
  {
    topic: 'Economically Weaker Section (EWS) 10% Reservation',
    category: 'Reservation',
    section: 'Section 7(6)(d)',
    printedPage: 15,
    pdfViewerPage: 20,
    summary: '10% seats over & above sanctioned intake as per GR dated 12.02.2019 and 31.05.2021. Income < ₹ 8 Lakh.',
    officialReference: 'Brochure Section 7(6)(d)'
  },
  {
    topic: 'Orphan Candidates (1% Reservation) & Female Candidates (30% Horizontal)',
    category: 'Reservation',
    section: 'Section 7(6)(e)-(f)',
    printedPage: 15,
    pdfViewerPage: 20,
    summary: '1% CAP seats for Orphan candidates (GR 06.04.2023). 30% horizontal reservation for female candidates (GR 17.04.2000).',
    officialReference: 'Brochure Section 7(6)(e)-(f)'
  },

  // UG Course Eligibility
  {
    topic: 'First Year B.E. / B.Tech. Eligibility & Tie-Breaking Rules',
    category: 'Eligibility',
    section: 'Section 7(A)(1) & 8(4)(a)',
    printedPage: 16,
    pdfViewerPage: 21,
    summary: '10+2 with Physics & Maths (min 45% Gen, 40% Reserved MS) + MHT-CET PCM (or JEE Main for All India). 9 specific branches accept PCB.',
    officialReference: 'Brochure Section 7(A)(1), p. 16-20 & Section 8(4)(a), p. 61-62'
  },
  {
    topic: 'Master of Engineering & Technology Integrated [M.Tech Integrated] (5 Years)',
    category: 'Eligibility',
    section: 'Section 7(A)(2) & 8(4)(a)',
    printedPage: 21,
    pdfViewerPage: 26,
    summary: '10+2 with Physics & Maths (45% / 40%) + PCM CET (or JEE Main).',
    officialReference: 'Brochure Section 7(A)(2), p. 21-25'
  },
  {
    topic: 'Direct Second Year Engineering (B.E. / B.Tech. Lateral Entry)',
    category: 'Eligibility',
    section: 'Section 7(A)(3) & 8(4)(b)',
    printedPage: 25,
    pdfViewerPage: 30,
    summary: '3-year Diploma in Engineering (45% / 40%) or B.Sc. with Maths at 10+2 or D.Voc. Merit based solely on qualifying marks.',
    officialReference: 'Brochure Section 7(A)(3), p. 25-26 & Section 8(4)(b), p. 62-63'
  },
  {
    topic: 'Direct Third Year & Direct Final Year Engineering (Lateral Entry)',
    category: 'Eligibility',
    section: 'Section 7(A)(4)-(5)',
    printedPage: 26,
    pdfViewerPage: 31,
    summary: 'Direct Third Year for UG Diploma holders; Direct Final Year for B.Voc. graduates against institutional vacant seats.',
    officialReference: 'Brochure Section 7(A)(4)-(5), p. 26-27'
  },
  {
    topic: 'First Year B.Pharm. & Direct Second Year B.Pharm. (DSP)',
    category: 'Eligibility',
    section: 'Section 7(A)(6)-(7)',
    printedPage: 27,
    pdfViewerPage: 32,
    summary: 'First Year: 10+2 with English, Physics, Chem, Maths/Bio (45% / 40%) + MHT-CET (PCB/PCM) / NEET. DSE: D.Pharm from PCI approved institute.',
    officialReference: 'Brochure Section 7(A)(6)-(7), p. 27-28'
  },
  {
    topic: 'First Year Pharm. D. (6 Years)',
    category: 'Eligibility',
    section: 'Section 7(A)(8)',
    printedPage: 28,
    pdfViewerPage: 33,
    summary: '10+2 with Physics, Chem, Maths/Bio or D.Pharm + MHT-CET / NEET.',
    officialReference: 'Brochure Section 7(A)(8), p. 28-30'
  },
  {
    topic: 'First Year B.Arch. (5 Years)',
    category: 'Eligibility',
    section: 'Section 7(A)(9)',
    printedPage: 30,
    pdfViewerPage: 35,
    summary: '10+2 with Physics & Maths (45% / 40%) or 10+3 Diploma with Maths + Qualified NATA or JEE Main Paper 2.',
    officialReference: 'Brochure Section 7(A)(9), p. 30-31'
  },
  {
    topic: 'First Year B.Planning & M.Planning Integrated',
    category: 'Eligibility',
    section: 'Section 7(A)(10)-(11)',
    printedPage: 31,
    pdfViewerPage: 36,
    summary: '10+2 with Mathematics compulsory + 2 specified subjects (45% / 40%) + MHT-CET / JEE B.Planning.',
    officialReference: 'Brochure Section 7(A)(10)-(11), p. 31-36'
  },
  {
    topic: 'First Year B.HMCT & Direct Second Year B.HMCT & M.HMCT Integrated',
    category: 'Eligibility',
    section: 'Section 7(A)(12)-(14)',
    printedPage: 36,
    pdfViewerPage: 41,
    summary: '10+2 with 45% (40%) + MAH-B.HMCT-CET / NCHM JEE. DSE: Diploma in HMCT with 45% (40%).',
    officialReference: 'Brochure Section 7(A)(12)-(14), p. 36-39'
  },
  {
    topic: 'Bachelor of Design (B.Design)',
    category: 'Eligibility',
    section: 'Section 7(A)(15)',
    printedPage: 39,
    pdfViewerPage: 44,
    summary: '10+2 with 45% (40%) + MAH-B.Design CET 2026 or UCEED (IIT).',
    officialReference: 'Brochure Section 7(A)(15), p. 39-40'
  },
  {
    topic: 'Bachelor of Pharmacy (Practice) [B.Pharm Practice]',
    category: 'Eligibility',
    section: 'Section 7(A)(16)',
    printedPage: 40,
    pdfViewerPage: 45,
    summary: 'D.Pharm + Registered Pharmacist + 4 Years Pharmacy Practice Experience in hospital/community pharmacy + Employer NOC.',
    officialReference: 'Brochure Section 7(A)(16), p. 40-41'
  },
  {
    topic: 'BCA & BBA / BMS / BBM Under Graduate Management Programs',
    category: 'Eligibility',
    section: 'Section 7(A)(17)-(19)',
    printedPage: 41,
    pdfViewerPage: 46,
    summary: '10+2 as per university policy + MAH-BCA/BBA/BMS/BBM CET 2026 / CUET (UG) / MHT-CET.',
    officialReference: 'Brochure Section 7(A)(17)-(19), p. 41-44'
  },
  {
    topic: 'MCA Integrated & MBA Integrated (4 Years)',
    category: 'Eligibility',
    section: 'Section 7(A)(18) & (20)',
    printedPage: 42,
    pdfViewerPage: 47,
    summary: 'MCA Integrated: 10+2 with Maths/Stats/Accounts (45%/40%) + CET. MBA Integrated: 10+2 with 45% (40%) + CET.',
    officialReference: 'Brochure Section 7(A)(18) & (20), p. 42-45'
  },
  {
    topic: 'Working Professionals Lateral Entry (UG) & Twinning Modes',
    category: 'Eligibility',
    section: 'Section 7(A)(21)-(22)',
    printedPage: 46,
    pdfViewerPage: 51,
    summary: '1 year full-time regular experience in registered industry within 50 km radial distance from college. Proforma W1 & W2.',
    officialReference: 'Brochure Section 7(A)(21)-(22), p. 46-47'
  },

  // PG Course Eligibility
  {
    topic: 'Post Graduate Management (MBA / MMS) First Year & Second Year Lateral',
    category: 'Eligibility',
    section: 'Section 7(B)(1)',
    printedPage: 48,
    pdfViewerPage: 53,
    summary: 'Graduation in any discipline (min 50% Gen, 45% Reserved) + MAH-MBA-CET / CAT / CMAT / XAT / MAT / ATMA / GMAT. Lateral entry for 4-year B.E./B.Tech/BBA/BMS.',
    officialReference: 'Brochure Section 7(B)(1), p. 48-50'
  },
  {
    topic: 'Post Graduate Computer Applications (MCA) First Year & Lateral Entry',
    category: 'Eligibility',
    section: 'Section 7(B)(2)',
    printedPage: 50,
    pdfViewerPage: 55,
    summary: 'Graduation degree preferably with Maths at 10+2 or degree (50% / 45%) + MAH-MCA-CET. Lateral entry for 4-year BCA or B.Tech CSE/IT.',
    officialReference: 'Brochure Section 7(B)(2), p. 50-51'
  },
  {
    topic: 'M.Pharm. & Pharm. D. (Post Baccalaureate)',
    category: 'Eligibility',
    section: 'Section 7(B)(3)-(4)',
    printedPage: 51,
    pdfViewerPage: 56,
    summary: 'M.Pharm: B.Pharm with min 55% (50% reserved) + GPAT. Pharm.D (PB): B.Pharm + GPAT.',
    officialReference: 'Brochure Section 7(B)(3)-(4), p. 51-52'
  },
  {
    topic: 'M.E. / M.Tech., M.Arch., M.Planning & M.Design',
    category: 'Eligibility',
    section: 'Section 7(B)(5)-(9)',
    printedPage: 52,
    pdfViewerPage: 57,
    summary: 'M.Tech: B.E./B.Tech with 50% (45%) + GATE/GPAT. M.Arch: B.Arch with 50% (45%) + PGETA. M.Plan: Planning/Arch/Civil + CEED/GATE. M.Design: 4-year degree + GATE.',
    officialReference: 'Brochure Section 7(B)(5)-(9), p. 52-58'
  },
  {
    topic: 'PG Courses for Working Professionals & Re-allocation Protocol',
    category: 'Eligibility',
    section: 'Section 7(B)(10) & 12(p)',
    printedPage: 58,
    pdfViewerPage: 63,
    summary: 'Degree + 1 yr experience within 50 km. Only 2 CAP rounds. Mandatory reallocation within 50 km if college intake < 1/3rd.',
    officialReference: 'Brochure Section 7(B)(10) & Rule 12(p), p. 58-60 & 85-87'
  },

  // Merit Calculation & CAP Procedures
  {
    topic: 'Method of Calculating Percentage & Rounding-Off Rules',
    category: 'Rule',
    section: 'Section 8(3)',
    printedPage: 61,
    pdfViewerPage: 66,
    summary: 'Rounding-off to nearest integer: 44.50% to 44.99% is rounded to 45%; 44.01% to 44.49% is rounded to 44%. Calculation out of 300 for group subjects.',
    officialReference: 'Brochure Section 8(3)(a)-(b)'
  },
  {
    topic: 'CAP Process Stages, Choice Filling (Max 300), and Application Fees',
    category: 'CAP',
    section: 'Section 9(1)',
    printedPage: 69,
    pdfViewerPage: 74,
    summary: 'Detailed stages of CAP. Up to 300 options. Application fees: ₹ 1300/- General/OMS, ₹ 1000/- Reserved/EWS/PwD, USD 50 NRI.',
    officialReference: 'Brochure Section 9(1)'
  },
  {
    topic: 'Auto-Freeze, Self-Freeze, Betterment, and Conduct of Rounds I to IV',
    category: 'CAP',
    section: 'Section 9(2)-(3) & 11',
    printedPage: 72,
    pdfViewerPage: 77,
    summary: 'Round I: 1st preference auto-freezed. Round II: top 3 auto-freezed. Round III: top 6 auto-freezed. Round IV: final round without further betterment.',
    officialReference: 'Brochure Section 9(2)-(3) & Section 11'
  },
  {
    topic: 'Permitted Rectifications at Scrutiny / ARC (Rule 9(3)(e))',
    category: 'CAP',
    section: 'Section 9(3)(e)',
    printedPage: 75,
    pdfViewerPage: 80,
    summary: 'Permitted corrections: gender, marks without increasing merit, reserved to general upon lack of validity, removal of minority/disability/defence/orphan/TFWS, candidature type, HU, qualification.',
    officialReference: 'Brochure Section 9(3)(e)(i)-(xi)'
  },
  {
    topic: 'Institutional Quota Admissions & Vacancy Round (Rule 13)',
    category: 'CAP',
    section: 'Section 13',
    printedPage: 88,
    pdfViewerPage: 93,
    summary: 'Transparent merit-based admission after CAP. Priority to MS over All India candidates. Notice board and website merit publishing.',
    officialReference: 'Brochure Section 13(a)-(j)'
  },
  {
    topic: 'Cancellation of Admission & Refund of Fees (Rule 15)',
    category: 'Rule',
    section: 'Section 15',
    printedPage: 90,
    pdfViewerPage: 95,
    summary: 'Full refund after ₹ 1,000/- deduction before cut-off date. Return of original documents within 2 days. Institutions strictly cannot withhold documents.',
    officialReference: 'Brochure Section 15(a)-(d)'
  },

  // Schedules & Proformas
  {
    topic: 'Schedule I: Allocation of Seats within Sanctioned Intake (First Year UG & PG)',
    category: 'Schedule',
    section: 'Schedule - I',
    printedPage: 98,
    pdfViewerPage: 103,
    summary: 'Complete percentage matrices for Govt, Aided, Autonomous, BATU, COEP, ICT, Unaided Private, and Minority institutions.',
    officialReference: 'Brochure Schedule - I A(1), A(2), B(1), B(2), p. 98-102'
  },
  {
    topic: 'Schedule II: Direct Second Year Lateral Entry Seat Distribution',
    category: 'Schedule',
    section: 'Schedule - II',
    printedPage: 103,
    pdfViewerPage: 108,
    summary: '10% lateral entry supernumerary seats + vacant seats of first year. 100% CAP in unaided institutions.',
    officialReference: 'Brochure Schedule - II A(1), A(2), B, p. 103-105'
  },
  {
    topic: 'Schedule III: Approved D.Voc. Streams for B.E. / B.Tech. Branches',
    category: 'Schedule',
    section: 'Schedule - III',
    printedPage: 106,
    pdfViewerPage: 111,
    summary: 'Mapping of Graphics & Multimedia, Electronics Manufacturing, and Automobile Servicing D.Voc streams to engineering branches.',
    officialReference: 'Brochure Schedule - III'
  },
  {
    topic: 'Schedule IV: 9 Major Disciplines & Corresponding UG Degree Branches',
    category: 'Schedule',
    section: 'Schedule - IV',
    printedPage: 107,
    pdfViewerPage: 112,
    summary: 'Full list of 9 major engineering disciplines accepting PCB / biology background (Agriculture, Biotech, Food, Leather, Packaging, Pharma, Printing, Fashion, Textile).',
    officialReference: 'Brochure Schedule - IV'
  },
  {
    topic: 'All Official Proformas (A to W2)',
    category: 'Proforma',
    section: 'Proformas A through W2',
    printedPage: 108,
    pdfViewerPage: 113,
    summary: 'Full text and formats: Proforma A (Type C), B1 & B2 (Type D), C & D (Defence), G1 & G2 (Border Area), J, K, L, M (J&K Migrant), O (Minority), U (Orphan), V (EWS), W1 & W2 (Working Professional).',
    officialReference: 'Brochure Pages 108 to 122'
  }
];
