export interface CAPRoundRule {
  round: string;
  autoFreezeRule: string;
  selfFreezeRule: string;
  bettermentRule: string;
  eligibility: string;
}

export const capRoundsDetails: CAPRoundRule[] = [
  {
    round: 'CAP Round-I',
    autoFreezeRule: 'If a candidate is allotted the seat as per their FIRST PREFERENCE (Choice Code #1), such allotment is AUTO-FREEZED. The candidate MUST accept the allotment, pay seat acceptance fee online, and report to ARC/college. Such candidates SHALL NOT be eligible for subsequent rounds.',
    selfFreezeRule: 'Candidates allotted seat other than 1st preference (e.g., 2nd to 300th) and satisfied with the seat can freeze it through candidate login, pay seat acceptance fee, and report to college as final allotment.',
    bettermentRule: 'Candidates allotted seat other than 1st preference who want to seek higher preferences in next rounds must choose "Betterment", confirm seat acceptance by paying seat acceptance fee online, and report for verification. Previous allotted seat remains reserved until a higher preference is allotted.',
    eligibility: 'All candidates listed in the Final Merit List.'
  },
  {
    round: 'CAP Round-II',
    autoFreezeRule: 'If a candidate is allotted a seat as per their FIRST THREE PREFERENCES (Choice 1, 2, or 3) in Round-II, such allotment is AUTO-FREEZED. Candidate cannot participate in subsequent rounds and must confirm admission.',
    selfFreezeRule: 'Candidates allotted seat other than first three preferences who are satisfied can self-freeze.',
    bettermentRule: 'Candidates allotted seat other than first 3 preferences who accepted seat can participate in Round-III for betterment.',
    eligibility: 'Candidates who opted for betterment in Round-I, candidates who were not allotted any seat in Round-I, and newly eligible candidates.'
  },
  {
    round: 'CAP Round-III',
    autoFreezeRule: 'If a candidate is allotted a seat as per their FIRST SIX PREFERENCES (Choice 1 to 6) in Round-III, such allotment is AUTO-FREEZED.',
    selfFreezeRule: 'Candidates allotted seat other than first six preferences can self-freeze if satisfied.',
    bettermentRule: 'Candidates allotted seat other than first 6 preferences can participate in Round-IV for betterment.',
    eligibility: 'Candidates seeking betterment from Round-II, non-allotted candidates, and registered candidates who missed previous rounds.'
  },
  {
    round: 'CAP Round-IV',
    autoFreezeRule: 'This is the FINAL Centralized Admission Round. There is NO further betterment option after Round-IV. Whatever seat is allotted or retained in Round-IV is FINAL and binding.',
    selfFreezeRule: 'All allotments made/retained are final. Candidate must report to the allotted institute.',
    bettermentRule: 'No further betterment available. Unfilled seats are converted through Stage I to VI vacancy conversion rules.',
    eligibility: 'All eligible candidates not admitted or seeking final allotment.'
  }
];

export interface CAPStep {
  step: number;
  title: string;
  shortDesc: string;
  detailedProcess: string[];
  keyRules: string[];
  brochureSource: string;
}

export const capProcessSteps: CAPStep[] = [
  {
    step: 1,
    title: 'Brochure Publication & Online Registration',
    shortDesc: 'Competent Authority publishes official brochure and opens online CAP registration portal.',
    detailedProcess: [
      'Candidate visits the official admission portal (cetcell.mahacet.org).',
      'Candidate creates an account using registration number and credentials.',
      'Fills personal, academic, entrance test (MHT-CET / JEE / NEET / NATA / GATE / GPAT / CAT / CUET), and category details.'
    ],
    keyRules: [
      'Candidates who already registered and paid CET fee do not need to pay application fee again.',
      'Candidates applying solely through National exams (JEE, NEET, CAT, CUET, etc.) must pay online non-refundable fee: ₹ 1300/- (General/OMS/J&K), ₹ 1000/- (Reserved/EWS/PwD), USD 50 (NRI/OCI/PIO/FN).'
    ],
    brochureSource: 'Brochure Page 69-70, Rule 9(1)(a)-(c)'
  },
  {
    step: 2,
    title: 'Document Upload & Scrutiny (E-Scrutiny or FC)',
    shortDesc: 'Uploading scanned original documents and verification by Facilitation Centre officers.',
    detailedProcess: [
      'Upload high-quality scanned copies in .jpg or .gif format (minimum 150 dpi, max 1MB each).',
      'Choose mode of verification: E-Scrutiny (completely online) or Physical Scrutiny (at designated Facilitation Centre).',
      'FC officer inspects documents against claims made in application form.',
      'Candidate receives signed / digital acknowledgement receipt.'
    ],
    keyRules: [
      'Facilitation Centres assist candidates in scanning and uploading documents free of cost.',
      'After confirmation of application at FC, candidate cannot alter the information except permitted rectifications during grievance period.'
    ],
    brochureSource: 'Brochure Page 71, Rule 9(1)(c)-(d)'
  },
  {
    step: 3,
    title: 'Provisional Merit List & Grievance Redressal',
    shortDesc: 'Publication of provisional merit status and opportunity to resolve any discrepancies.',
    detailedProcess: [
      'State CET Cell publishes the Provisional Merit List on the portal displaying candidate merit rank, marks, category, and candidature type.',
      'Candidate checks their name, category, marks, and home university status.',
      'If any error exists (e.g. marks entered incorrectly, caste document rejected), candidate submits an online grievance with supporting proof within specified window.',
      'Competent Authority resolves grievances and publishes the Final Merit List.'
    ],
    keyRules: [
      'Merit list gives relative position and DOES NOT guarantee admission to any college or branch.',
      'No new documents will be accepted after the grievance deadline.',
      'Permitted rectifications at ARC: Gender, marks (without increasing merit), caste from reserved to general (upon failure to submit validity/NCL), removal of minority/PwD/defence/orphan/TFWS status, change in Candidature Type or Home University.'
    ],
    brochureSource: 'Brochure Page 71 & 75, Rule 9(1)(e) & Rule 9(3)(e)'
  },
  {
    step: 4,
    title: 'Seat Matrix & Option Form Submission (Choice Filling)',
    shortDesc: 'Seat matrix published for each round; candidates fill 1 to 300 preferences.',
    detailedProcess: [
      'CET Cell displays the Category-wise Seat Matrix (Sanctioned intake, open seats, reserved seats, TFWS, and supernumerary seats) for every institute.',
      'Candidate logs into portal and enters college choice codes in decreasing order of preference.',
      'Can fill minimum 1 and maximum 300 choices.',
      'Candidate must confirm option form by re-entering Application ID and Password.'
    ],
    keyRules: [
      'Choice in block No. 1 is treated as First Preference (Highest Priority).',
      'Option form once confirmed cannot be altered for that round.',
      'Never share Application ID and Password with cyber cafes or agents to avoid impersonation.'
    ],
    brochureSource: 'Brochure Page 71-72, Rule 9(1)(f)-(g)'
  },
  {
    step: 5,
    title: 'Provisional Allotment & Seat Acceptance (ARC Reporting)',
    shortDesc: 'System computerized allotment based on inter-se merit and choice preference.',
    detailedProcess: [
      'Provisional Allotment list published online indicating allotted institute and course.',
      'Candidate downloads Provisional Seat Allotment Letter.',
      'Completes online self-scrutiny and pays Seat Acceptance Fee online.',
      'Chooses Freeze or Betterment based on allotted preference.'
    ],
    keyRules: [
      'First preference allotment = AUTO-FREEZE. Failure to accept forfeits claim on seat and disqualifies from subsequent CAP rounds.',
      'Preferences 2 to 300 = Candidate can accept and opt for Betterment to try for higher preferences in next round while retaining current seat.',
      'If upward preference is allotted in next round, previous seat automatically cancels; if no upward seat is allotted, previous seat is retained.'
    ],
    brochureSource: 'Brochure Page 72-75, Rule 9(1)(h)-(j) & Rule 9(2)-(3)'
  },
  {
    step: 6,
    title: 'Reporting to Allotted Institute & Final Confirmation',
    shortDesc: 'Submitting original certificates and paying tuition fee at the college.',
    detailedProcess: [
      'Candidate reports to the allotted institution within prescribed schedule.',
      'College verifies original certificates and uploads candidate confirmation in CET portal immediately.',
      'Institute issues system-generated Receipt of Confirmation of Admission.',
      'Candidate is enrolled on the "Academic Bank of Credits" (ABC) portal within 8 days.'
    ],
    keyRules: [
      'If original certificates are retained by another college, candidate must submit bonafide retention certificate and submit originals within 4 working days.',
      'Cancellation before cutoff: Full fee refund after deduction of ₹ 1,000/- processing fee; originals returned within 2 days.',
      'Institutions are strictly prohibited from retaining original documents or demanding subsequent years’ fees upon cancellation (Rule 15(c)-(d)).'
    ],
    brochureSource: 'Brochure Page 76 & 90, Rule 9(4) & Rule 15'
  }
];

export interface VacancyStage {
  stage: string;
  name: string;
  description: string;
  sourceRef: string;
}

export const capVacancyStages: VacancyStage[] = [
  { stage: 'Stage I', name: 'All Candidates (Inter-Se-Merit)', description: 'All candidates (Open, Reserved, Male, Female) considered as per merit. EWS/Orphan considered in reserved quota first, then General.', sourceRef: 'Brochure Page 77, Rule 10(1)' },
  { stage: 'Stage II', name: 'Female to Male Conversion', description: 'Vacant female category seats allotted to male candidates of respective reserved class or general category.', sourceRef: 'Brochure Page 79, Rule 10(1)' },
  { stage: 'Stage III', name: 'Special Backward Class (SBC) Allocation', description: 'Vacant reserved class seats allotted to eligible SBC category candidates up to 2%.', sourceRef: 'Brochure Page 79, Rule 10(1)' },
  { stage: 'Stage IV', name: 'Inter-Se Merit Without Reservation', description: 'Seats considered for allotment to all candidates based purely on general merit.', sourceRef: 'Brochure Page 79, Rule 10(1)' },
  { stage: 'Stage V', name: 'All India & DSE Conversions', description: 'Remaining vacant seats allotted to All India candidates. In DSE, Diploma seats convert to B.Sc candidates, then to D.Voc.', sourceRef: 'Brochure Page 79, Rule 10(1)' },
  { stage: 'Stage VI', name: 'First Year Vacant Seat Conversions', description: 'Vacant seats in First Year after Stage V allotted to Diploma candidates, then D.Voc. candidates.', sourceRef: 'Brochure Page 79, Rule 10(1)' }
];
