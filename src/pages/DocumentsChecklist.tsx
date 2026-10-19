import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { masterDocumentsList, MasterDocument } from '../data/documents';
import { coursesData } from '../data/courses';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { 
  FileText, 
  CheckSquare, 
  Square, 
  Printer, 
  RotateCcw, 
  AlertTriangle, 
  ShieldCheck, 
  Download, 
  ExternalLink,
  Filter,
  CheckCircle2,
  Info,
  HelpCircle,
  PlusCircle,
  Eye,
  Building,
  UserCheck
} from 'lucide-react';

export const DocumentsChecklist: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get('course') || 'all';

  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialCourse);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCandidature, setSelectedCandidature] = useState<string>('all');
  
  // Special Quota & Scheme Toggles
  const [isTFWSClaimed, setIsTFWSClaimed] = useState<boolean>(false);
  const [isDefenceClaimed, setIsDefenceClaimed] = useState<boolean>(false);
  const [isPwDClaimed, setIsPwDClaimed] = useState<boolean>(false);
  const [isOrphanClaimed, setIsOrphanClaimed] = useState<boolean>(false);

  // Minority Status States (Brochure Rule 5(3), Rule 7(4) & Rule 17 Sr. 20)
  const [isMinorityClaimed, setIsMinorityClaimed] = useState<boolean>(false);
  const [minorityType, setMinorityType] = useState<'Religious' | 'Linguistic'>('Religious');
  const [specificMinorityCommunity, setSpecificMinorityCommunity] = useState<string>('Muslim');
  const [leavingCertMentionsMinority, setLeavingCertMentionsMinority] = useState<boolean>(false);

  // Active view tab: REQUIRED, OPTIONAL, or ALL
  const [activeTab, setActiveTab] = useState<'REQUIRED' | 'OPTIONAL' | 'ALL'>('REQUIRED');

  // Checked state stored in localStorage
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('mah_admission_checked_docs');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mah_admission_checked_docs', JSON.stringify(checkedDocs));
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [checkedDocs]);

  const toggleCheck = (id: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleResetChecklist = () => {
    setCheckedDocs({});
  };

  const handlePrint = () => {
    window.print();
  };

  // 1. Filter Required Documents strictly applicable to current profile
  const requiredDocs = useMemo(() => {
    return masterDocumentsList.filter(doc => {
      // 1. Mandatory Common, Educational & Entrance docs
      if (doc.category === 'Common' || doc.category === 'Educational' || doc.category === 'Entrance') {
        // Course-specific filtering
        if (selectedCourseId !== 'all') {
          if (doc.id === 'pci-approval-letter' && !selectedCourseId.includes('pharm')) {
            return false;
          }
          if (doc.id === 'diploma-degree-marksheet') {
            const crs = coursesData.find(c => c.id === selectedCourseId);
            if (crs && crs.level === 'UG' && crs.entryType === 'First Year') {
              return false; // Not needed for standard UG 1st Year (B.E., B.Pharm, etc.)
            }
          }
          if (doc.id === 'hsc-marksheet') {
            const crs = coursesData.find(c => c.id === selectedCourseId);
            if (crs && crs.entryType === 'Direct Second Year' && crs.id !== 'dse-engineering') {
              // Diploma mark sheet is primary for DSY
            }
          }
        }
        return true;
      }

      // 2. Reserved Category Documents (SC, ST, VJ/NT, OBC, SBC, SEBC)
      if (doc.category === 'Reserved Category') {
        if (selectedCategory === 'Open') return false;
        if (selectedCategory === 'EWS') return false; // EWS uses Proforma V under Special Scheme

        // Non-Creamy Layer (NCL) Certificate
        if (doc.id === 'non-creamy-layer') {
          if (selectedCategory === 'SC' || selectedCategory === 'ST') {
            return false; // SC and ST are officially EXEMPT from NCL (Section 17 Sr. 7, p. 93)
          }
          if (selectedCategory === 'all') return true;
          return ['VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC'].includes(selectedCategory);
        }

        // Caste Certificate & Caste Validity
        if (selectedCategory === 'all') return true;
        return ['SC', 'ST', 'VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC'].includes(selectedCategory);
      }

      // 3. Candidature specific domicile & proformas
      if (doc.category === 'Candidature') {
        if (selectedCandidature === 'all') return true;
        if (doc.id === 'domicile-candidate') {
          return ['Type-A', 'Type-B', 'all'].includes(selectedCandidature);
        }
        if (doc.id === 'proforma-a') return selectedCandidature === 'Type-C';
        if (doc.id === 'proforma-b1-b2') return selectedCandidature === 'Type-D';
        if (doc.id === 'proforma-g1-g2') return selectedCandidature === 'Type-E';
        return false;
      }

      // 4. Special Schemes & Quotas
      if (doc.category === 'Special Scheme') {
        // EWS Proforma - V
        if (doc.id === 'ews-proforma-v') {
          return selectedCategory === 'EWS';
        }

        // TFWS Income Certificate (< ₹ 8 Lakh)
        if (doc.id === 'tfws-income-cert') {
          return isTFWSClaimed;
        }

        // Defence Proforma C / D
        if (doc.id === 'defence-proforma-c-d') {
          return isDefenceClaimed;
        }

        // PwD Disability Certificate
        if (doc.id === 'pwd-certificate') {
          return isPwDClaimed;
        }

        // Orphan Proforma U
        if (doc.id === 'orphan-proforma-u') {
          return isOrphanClaimed;
        }

        // Working Professionals Proforma W1 / W2
        if (doc.id === 'working-pro-w1-w2') {
          return selectedCourseId.includes('working');
        }

        // MINORITY DECLARATION (PROFORMA - O)
        // Rule: Only required when applicant explicitly claims Minority Quota under Rule 5(3)
        if (doc.id === 'minority-proforma-o') {
          return isMinorityClaimed === true;
        }
      }

      return false;
    });
  }, [
    selectedCourseId, 
    selectedCategory, 
    selectedCandidature, 
    isTFWSClaimed, 
    isDefenceClaimed, 
    isPwDClaimed, 
    isOrphanClaimed, 
    isMinorityClaimed
  ]);

  // 2. Filter Conditional / Optional Documents (Available if student claims that quota)
  const optionalDocs = useMemo(() => {
    const list: { doc: MasterDocument; reason: string; actionText?: string; onAction?: () => void }[] = [];

    // Minority Declaration (Proforma - O) if NOT currently claimed
    if (!isMinorityClaimed) {
      const minDoc = masterDocumentsList.find(d => d.id === 'minority-proforma-o');
      if (minDoc) {
        list.push({
          doc: minDoc,
          reason: 'Applicable ONLY if you are claiming Linguistic or Religious Minority Quota (Brochure Rule 5(3) & 7(4)) in minority educational institutions (minimum 51% CAP quota).',
          actionText: 'I am claiming Minority Quota',
          onAction: () => setIsMinorityClaimed(true)
        });
      }
    }

    // TFWS Income Certificate if NOT claimed
    if (!isTFWSClaimed) {
      const tfwsDoc = masterDocumentsList.find(d => d.id === 'tfws-income-cert');
      if (tfwsDoc) {
        list.push({
          doc: tfwsDoc,
          reason: 'Applicable if you are applying for 100% Tuition Fee Waiver Scheme (TFWS) with family annual income less than ₹ 8,00,000/- (Brochure Rule 7(6)(e)).',
          actionText: 'I am claiming TFWS Scheme',
          onAction: () => setIsTFWSClaimed(true)
        });
      }
    }

    // Defence Certificate if NOT claimed
    if (!isDefenceClaimed) {
      const defDoc = masterDocumentsList.find(d => d.id === 'defence-proforma-c-d');
      if (defDoc) {
        list.push({
          doc: defDoc,
          reason: 'Applicable if father/mother is an active or retired Defence Personnel (Brochure Page 14, Rule 7(6)(b)).',
          actionText: 'I am claiming Defence Quota',
          onAction: () => setIsDefenceClaimed(true)
        });
      }
    }

    // PwD Disability Certificate if NOT claimed
    if (!isPwDClaimed) {
      const pwdDoc = masterDocumentsList.find(d => d.id === 'pwd-certificate');
      if (pwdDoc) {
        list.push({
          doc: pwdDoc,
          reason: 'Applicable if candidate has benchmark disability of 40% or more (Brochure Page 14-15, Rule 7(6)(c)).',
          actionText: 'I am claiming PwD Quota',
          onAction: () => setIsPwDClaimed(true)
        });
      }
    }

    // Orphan Certificate if NOT claimed
    if (!isOrphanClaimed) {
      const orphDoc = masterDocumentsList.find(d => d.id === 'orphan-proforma-u');
      if (orphDoc) {
        list.push({
          doc: orphDoc,
          reason: 'Applicable if claiming 1% institutional orphan reservation under Proforma - U (Brochure Page 15).',
          actionText: 'I am claiming Orphan Quota',
          onAction: () => setIsOrphanClaimed(true)
        });
      }
    }

    // EWS Proforma - V if Open category
    if (selectedCategory === 'Open') {
      const ewsDoc = masterDocumentsList.find(d => d.id === 'ews-proforma-v');
      if (ewsDoc) {
        list.push({
          doc: ewsDoc,
          reason: 'Applicable if Open category candidate qualifies for 10% EWS quota with family annual income < ₹ 8 Lakh (Brochure Page 15, Rule 7(6)(d)).',
          actionText: 'Switch Category to EWS',
          onAction: () => setSelectedCategory('EWS')
        });
      }
    }

    return list;
  }, [isMinorityClaimed, isTFWSClaimed, isDefenceClaimed, isPwDClaimed, isOrphanClaimed, selectedCategory]);

  // Documents to show based on the active tab
  const displayedDocs = useMemo(() => {
    if (activeTab === 'ALL') return masterDocumentsList;
    if (activeTab === 'OPTIONAL') return optionalDocs.map(o => o.doc);
    return requiredDocs;
  }, [activeTab, masterDocumentsList, optionalDocs, requiredDocs]);

  const readyCount = displayedDocs.filter(d => !!checkedDocs[d.id]).length;
  const progressPercent = displayedDocs.length > 0 ? Math.round((readyCount / displayedDocs.length) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Documents Checklist' }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <FileText className="w-3.5 h-3.5" />
          <span>Rule 17 · Centralized Admission Process Upload Checklist</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Maharashtra CAP Document Preparation Checklist
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Prepare original certificates scanned in .jpg or .gif format (minimum 150 dpi, max 1MB) for online CAP upload and Facilitation Centre (FC) / E-Scrutiny verification.
        </p>
      </div>

      <DisclaimerBanner compact={true} />

      {/* Filter and Criteria Customizer */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5 print:hidden">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-teal-600" />
            <h2 className="text-sm font-bold text-slate-900">1. Customize Checklist for Your Profile</h2>
          </div>
          <span className="text-xs text-slate-500">Only relevant documents will be marked mandatory</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Target Course */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 block">Target Course / Program</label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
            >
              <option value="all">All Technical Courses (General List)</option>
              {coursesData.map(c => (
                <option key={c.id} value={c.id}>{c.abbreviation} - {c.entryType}</option>
              ))}
            </select>
          </div>

          {/* Social / Caste Category */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 block">Social / Caste Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/30 font-medium"
            >
              <option value="all">Show All Categories</option>
              <option value="Open">Open / General (No caste cert required)</option>
              <option value="SC">SC (Scheduled Caste - 13.0%)</option>
              <option value="ST">ST (Scheduled Tribe - 7.0%)</option>
              <option value="VJ/DT-NT(A)">VJ/DT-NT(A) (3.0% + NCL)</option>
              <option value="NT(B)">NT(B) (2.5% + NCL)</option>
              <option value="NT(C)">NT(C) (3.5% + NCL)</option>
              <option value="NT(D)">NT(D) (2.0% + NCL)</option>
              <option value="OBC">OBC (19.0% + NCL)</option>
              <option value="SBC">SBC (Stage III 2% + NCL)</option>
              <option value="SEBC">SEBC (10.0%* + NCL)</option>
              <option value="EWS">EWS (Economically Weaker Section - Proforma V)</option>
            </select>
          </div>

          {/* Candidature Type */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 block">Candidature Type (Rule 5 & 6)</label>
            <select
              value={selectedCandidature}
              onChange={(e) => setSelectedCandidature(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
            >
              <option value="all">All Candidature Types</option>
              <option value="Type-A">Maharashtra State Type A (Born/Studied in MS)</option>
              <option value="Type-B">Maharashtra State Type B (Parent Domicile)</option>
              <option value="Type-C">Maharashtra State Type C (Proforma A)</option>
              <option value="Type-D">Maharashtra State Type D (Proforma B)</option>
              <option value="Type-E">Maharashtra State Type E (Proforma G1/G2)</option>
              <option value="All India">All India Candidature (OMS)</option>
              <option value="JK Migrant">J&K / Ladakh Migrant (Proforma J/K/L/M)</option>
            </select>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MINORITY STATUS QUESTION SECTION (Brochure Rule 5(3), 7(4) & 17 Sr. 20) */}
        {/* ========================================================================= */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-teal-600" />
                <span>Minority Quota Status (Linguistic / Religious Minority - Rule 5(3))</span>
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Applicable ONLY if claiming seats earmarked in minority educational institutions (minimum 51% CAP quota).
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMinorityClaimed(false)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  !isMinorityClaimed
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                No / Not Claiming
              </button>
              <button
                type="button"
                onClick={() => setIsMinorityClaimed(true)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  isMinorityClaimed
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Yes, Claiming Minority Quota
              </button>
            </div>
          </div>

          {/* Conditional Minority Sub-Questionnaire */}
          {isMinorityClaimed && (
            <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 space-y-3 text-xs animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-teal-950 font-bold">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Minority Quota Verification Criteria (Brochure Rule 17, Sr. 20, Page 95):</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-teal-900 block text-[11px]">Minority Category Type:</label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => { setMinorityType('Religious'); setSpecificMinorityCommunity('Muslim'); }}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                        minorityType === 'Religious'
                          ? 'bg-teal-700 text-white border-teal-800'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      Religious Minority
                    </button>
                    <button
                      type="button"
                      onClick={() => { setMinorityType('Linguistic'); setSpecificMinorityCommunity('Hindi'); }}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                        minorityType === 'Linguistic'
                          ? 'bg-teal-700 text-white border-teal-800'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      Linguistic Minority
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-teal-900 block text-[11px]">
                    Notified Minority Community in Maharashtra:
                  </label>
                  <select
                    value={specificMinorityCommunity}
                    onChange={(e) => setSpecificMinorityCommunity(e.target.value)}
                    className="w-full py-1.5 px-2.5 rounded-lg border border-teal-300 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                  >
                    {minorityType === 'Religious' ? (
                      <>
                        <option value="Muslim">Muslim (मुस्लिम)</option>
                        <option value="Buddhist">Buddhist (बौद्ध)</option>
                        <option value="Christian">Christian (ख्रिश्चन)</option>
                        <option value="Jain">Jain (जैन)</option>
                        <option value="Sikh">Sikh (शीख)</option>
                        <option value="Parsi">Parsi / Zoroastrian (पारशी)</option>
                        <option value="Jewish">Jewish (ज्यू)</option>
                      </>
                    ) : (
                      <>
                        <option value="Hindi">Hindi (हिंदी भाषिक)</option>
                        <option value="Gujarati">Gujarati (गुजराती भाषिक)</option>
                        <option value="Sindhi">Sindhi (सिंधी भाषिक)</option>
                        <option value="Punjabi">Punjabi (पंजाबी भाषिक)</option>
                        <option value="Kannada">Kannada (कन्नड भाषिक)</option>
                        <option value="Urdu">Urdu (उर्दू भाषिक)</option>
                        <option value="Tamil">Tamil (तमिळ भाषिक)</option>
                        <option value="Malayalam">Malayalam (मल्याळम भाषिक)</option>
                        <option value="Telugu">Telugu (तेलुगू भाषिक)</option>
                        <option value="Bengali">Bengali (बंगाली भाषिक)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* School Leaving Certificate Clarification Question */}
              <div className="p-3 bg-white rounded-lg border border-teal-200 space-y-1.5">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={leavingCertMentionsMinority}
                    onChange={(e) => setLeavingCertMentionsMinority(e.target.checked)}
                    className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">
                      My School / College Leaving Certificate explicitly states my {minorityType === 'Religious' ? 'Religion' : 'Mother Tongue'}.
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-relaxed">
                      {leavingCertMentionsMinority ? (
                        <span className="text-emerald-700 font-medium">
                          ✓ Per Brochure Rule 17 Sr. 20 (p. 95): Your Leaving Certificate containing religion/mother tongue is accepted directly as valid proof. Proforma - O self-declaration serves as an optional supplement.
                        </span>
                      ) : (
                        <span className="text-amber-700 font-medium">
                          ⚠ Per Brochure Rule 17 Sr. 20 & Page 117: Because your Leaving Certificate does not mention religion/mother tongue, a signed Self-Declaration in <strong>Proforma - O</strong> is <strong>MANDATORY</strong> along with Maharashtra Domicile proof.
                        </span>
                      )}
                    </span>
                  </div>
                </label>
              </div>

              {selectedCandidature === 'All India' && (
                <div className="p-2.5 bg-amber-100/70 border border-amber-300 rounded-lg text-amber-900 text-[11px] flex items-start gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Rule 5(3) Requirement:</strong> Minority Candidature applies strictly to candidates domiciled in Maharashtra State (Types A to E). All India Candidature seats in unaided institutions are allotted on All India merit without minority reservation.
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Special Quota Toggles (TFWS, Defence, PwD, Orphan) */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs">
          <span className="font-bold text-slate-700 text-xs">Other Special Quotas:</span>
          
          <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 hover:text-slate-900">
            <input
              type="checkbox"
              checked={isTFWSClaimed}
              onChange={(e) => setIsTFWSClaimed(e.target.checked)}
              className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
            />
            <span>TFWS Fee Waiver (Income &lt; ₹ 8 Lakh)</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 hover:text-slate-900">
            <input
              type="checkbox"
              checked={isDefenceClaimed}
              onChange={(e) => setIsDefenceClaimed(e.target.checked)}
              className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
            />
            <span>Defence Child (Proforma C / D)</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 hover:text-slate-900">
            <input
              type="checkbox"
              checked={isPwDClaimed}
              onChange={(e) => setIsPwDClaimed(e.target.checked)}
              className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
            />
            <span>PwD Benchmark Disability</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 hover:text-slate-900">
            <input
              type="checkbox"
              checked={isOrphanClaimed}
              onChange={(e) => setIsOrphanClaimed(e.target.checked)}
              className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
            />
            <span>Orphan Quota (Proforma U)</span>
          </label>
        </div>
      </div>

      {/* View Tabs & Document Counter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-b border-slate-100 pb-3">
          {/* Tabs */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('REQUIRED')}
              className={`px-3 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors ${
                activeTab === 'REQUIRED'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mandatory for Your Profile ({requiredDocs.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('OPTIONAL')}
              className={`px-3 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors ${
                activeTab === 'OPTIONAL'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Conditional / Optional ({optionalDocs.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ALL')}
              className={`px-3 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors ${
                activeTab === 'ALL'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>All Master Documents ({masterDocumentsList.length})</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handleResetChecklist}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-semibold"
              title="Reset all checkboxes"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Checks</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Checklist</span>
            </button>
          </div>
        </div>

        {/* Status and Progress bar */}
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center justify-between text-slate-600">
            <span className="font-semibold text-slate-900">
              {activeTab === 'REQUIRED' && 'Mandatory Profile Documents Readiness'}
              {activeTab === 'OPTIONAL' && 'Conditional Documents Readiness'}
              {activeTab === 'ALL' && 'Master Document Catalog Readiness'}
            </span>
            <span>
              {readyCount} of {displayedDocs.length} checked ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-teal-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Print-Only Title Header */}
      <div className="hidden print:block border-b-2 border-slate-800 pb-4 space-y-1">
        <h2 className="text-2xl font-bold text-slate-900">Maharashtra State CET Cell CAP Document Preparation Checklist</h2>
        <p className="text-xs text-slate-600">
          Generated from admissionguide.dalvihub.com · Target: {selectedCourseId} · Category: {selectedCategory} · Minority Claimed: {isMinorityClaimed ? `Yes (${specificMinorityCommunity} ${minorityType})` : 'No'}
        </p>
      </div>

      {/* Document Items List */}
      <div className="space-y-4">
        {displayedDocs.map((doc) => {
          const isChecked = !!checkedDocs[doc.id];
          const isMinorityDoc = doc.id === 'minority-proforma-o';
          const optionalMeta = optionalDocs.find(o => o.doc.id === doc.id);

          return (
            <div
              key={doc.id}
              onClick={() => toggleCheck(doc.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                isChecked
                  ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                  : isMinorityDoc && isMinorityClaimed
                  ? 'bg-teal-50/40 border-teal-300 hover:border-teal-400'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="pt-0.5 text-teal-600 shrink-0">
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400" />
                )}
              </div>

              <div className="space-y-2 flex-1 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`font-bold text-sm ${isChecked ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                      {doc.name}
                    </h3>
                    {doc.marathiName && (
                      <span className="text-slate-500 font-medium">({doc.marathiName})</span>
                    )}
                    {isMinorityDoc && isMinorityClaimed && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-100 text-teal-800 border border-teal-200">
                        {specificMinorityCommunity} {minorityType} Quota
                      </span>
                    )}
                    {activeTab === 'OPTIONAL' && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                        Conditional Quota
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {doc.brochureSource}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed">{doc.description}</p>

                {/* Minority-specific active verification feedback */}
                {isMinorityDoc && isMinorityClaimed && (
                  <div className="p-2.5 rounded-xl bg-white border border-teal-200 space-y-1 text-[11px] text-teal-950">
                    <span className="font-bold flex items-center gap-1 text-teal-900">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      Official Scrutiny Instructions (Rule 17, Sr. 20, p. 95):
                    </span>
                    {leavingCertMentionsMinority ? (
                      <p className="text-emerald-800">
                        ✓ Your School Leaving Certificate specifies your {minorityType === 'Religious' ? 'Religion' : 'Mother Tongue'}. That certificate alone is legally sufficient proof under Rule 17. Proforma - O self-declaration is an optional supplement.
                      </p>
                    ) : (
                      <p className="text-amber-800">
                        ⚠ Because your School Leaving Certificate does not mention religion/mother tongue, a Self-Declaration in <strong>Proforma - O</strong> signed by both candidate and parent is <strong>strictly mandatory</strong> for CAP verification.
                      </p>
                    )}
                  </div>
                )}

                {/* Optional Document Context Explanation */}
                {activeTab === 'OPTIONAL' && optionalMeta && (
                  <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-amber-950">
                    <span>{optionalMeta.reason}</span>
                    {optionalMeta.actionText && optionalMeta.onAction && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          optionalMeta.onAction!();
                          setActiveTab('REQUIRED');
                        }}
                        className="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] shrink-0 inline-flex items-center gap-1"
                      >
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>{optionalMeta.actionText}</span>
                      </button>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px]">
                  <span className="text-slate-500">
                    <strong>Applicability:</strong> {doc.applicability}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">
                    <strong>Format:</strong> {doc.formatAndSpecs}
                  </span>
                  {doc.proforma && (
                    <>
                      <span className="text-slate-300">•</span>
                      <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        {doc.proforma}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {displayedDocs.length === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
            <Info className="w-6 h-6 text-slate-400 mx-auto" />
            <h4 className="font-bold text-slate-700 text-sm">No Documents in this Tab</h4>
            <p className="text-xs text-slate-500">Try switching to the "Mandatory Profile Documents" tab to view your requirements.</p>
          </div>
        )}
      </div>

      {/* Mandatory Advisory Notice */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
        <span className="font-bold text-amber-950 block flex items-center gap-1">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          Mandatory Warning from State CET Cell (Brochure Page 92)
        </span>
        <p className="leading-relaxed">
          Candidates must upload ALL Original Certificates/Documents in support of their claim. Candidates shall carry original documents for scrutiny & verification at identified Facilitation Centres. Failure to substantiate any claim made in the application form will result in cancellation of the allotted seat or conversion from reserved to General category.
        </p>
      </div>
    </div>
  );
};
