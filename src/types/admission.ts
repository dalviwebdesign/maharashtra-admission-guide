/**
 * Data structures for Maharashtra Technical Admission Guide 2026-27
 * Sourced directly from the official State CET Cell Information Brochure AY 2026-27
 */

export type ProgrammeLevel = 'UG' | 'PG' | 'Integrated' | 'Lateral Entry';

export type AdmissionEntry = 
  | 'First Year' 
  | 'Direct Second Year' 
  | 'Direct Third Year' 
  | 'Direct Final Year' 
  | 'Working Professional' 
  | 'Collaborative/Twinning';

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  requirementType: 'Required for all' | 'Category specific' | 'Candidature specific' | 'Special / Conditional' | 'Reporting stage';
  categoryApplicability?: string[];
  candidatureApplicability?: string[];
  proforma?: string;
  sourceRef: string;
}

export interface EligibilityCriterion {
  qualification: string;
  mandatorySubjects?: string[];
  optionalSubjects?: string[];
  minMarksGeneral: number; // e.g. 45 for 45%
  minMarksReserved: number; // e.g. 40 for 40%
  entranceExam: string;
  entranceExamDetails: string;
  allIndiaExam?: string;
  notes?: string[];
  brochureSource: {
    section: string;
    printedPage: number;
    ruleNumber?: string;
  };
}

export interface CourseFAQ {
  question: string;
  answer: string;
  brochureRef?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  abbreviation: string;
  level: ProgrammeLevel;
  entryType: AdmissionEntry;
  duration: string;
  category: 'Engineering' | 'Pharmacy' | 'Architecture' | 'Management' | 'Computer Applications' | 'Design' | 'Planning' | 'Hotel Management' | 'Special Mode';
  qualifyingExam: string;
  overview: string;
  eligibility: {
    maharashtraState: EligibilityCriterion;
    allIndia: EligibilityCriterion;
    nriOci?: {
      criteria: string;
      sourceRef: string;
    };
    lateralEntry?: string;
    workingProfessional?: string;
    tieBreakingRules: string[];
  };
  entranceExams: {
    primaryExam: string;
    alternativeExams?: string[];
    subjectsOrGroups: string;
    scoreRequirement: string;
    officialExamPortal?: string;
  };
  documentsRequired: DocumentItem[];
  admissionProcedure: {
    steps: {
      stepNumber: number;
      title: string;
      description: string;
    }[];
    applicationFeeGeneral: string;
    applicationFeeReserved: string;
    applicationFeeNRI: string;
  };
  specialProvisions: {
    tfwsEligible: boolean;
    tfwsDetails?: string;
    reservationsApplicable: boolean;
    institutionalQuota: string;
    minorityQuota?: string;
    supernumeraryQuota?: string;
    exceptions?: string[];
  };
  faqs: CourseFAQ[];
  brochureSource: {
    section: string;
    printedPage: number;
    ruleClause: string;
  };
}

export interface CandidatureTypeInfo {
  type: string;
  title: string;
  description: string;
  eligibilityRequirement: string;
  homeUniversityRule: string;
  requiredDocuments: string[];
  proforma?: string;
  sourceRef: string;
}

export interface ReservationCategoryInfo {
  code: string;
  name: string;
  percentage: number;
  isSubJudice?: boolean;
  notes?: string;
  requiredDocuments: string[];
  proforma?: string;
  sourceRef: string;
}
