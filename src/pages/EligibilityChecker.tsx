import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { casteCategoriesMetadata, CasteCategoryInfo } from '../data/reservations';
import { evaluateEligibility, EligibilityInput, EligibilityResult } from '../utils/eligibilityChecker';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  ShieldAlert, 
  Check, 
  X, 
  AlertTriangle,
  FileText,
  Percent,
  Scale,
  Info,
  ChevronDown,
  Building,
  CheckSquare,
  Square,
  Filter
} from 'lucide-react';

export const EligibilityChecker: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || 'be-btech-first-year';

  const [selectedCourseId, setSelectedCourseId] = useState<string>(preselectedCourse);
  const [candidatureType, setCandidatureType] = useState<string>('Maharashtra State');
  const [category, setCategory] = useState<string>('Open');
  const [qualification, setQualification] = useState<string>('HSC (10+2)');
  const [percentageMarks, setPercentageMarks] = useState<string>('55.0');
  const [hasMandatorySubjects, setHasMandatorySubjects] = useState<boolean>(true);
  const [entranceExamTaken, setEntranceExamTaken] = useState<string>('MHT-CET 2026 (PCM Group)');
  const [entranceScorePositive, setEntranceScorePositive] = useState<boolean>(true);

  // Dropdown UI states
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);
  const [categoryFilterTab, setCategoryFilterTab] = useState<'ALL' | 'CONSTITUTIONAL' | 'SPECIAL' | 'OPEN'>('ALL');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Caste / Category certificate possession flags
  const [hasCasteCertificate, setHasCasteCertificate] = useState<boolean>(true);
  const [hasCasteValidity, setHasCasteValidity] = useState<boolean>(true);
  const [hasNonCreamyLayer, setHasNonCreamyLayer] = useState<boolean>(true);
  const [hasEwsCertificate, setHasEwsCertificate] = useState<boolean>(true);
  const [hasPwdCertificate, setHasPwdCertificate] = useState<boolean>(true);

  // Special course questions
  const [hasRegisteredPharmacist, setHasRegisteredPharmacist] = useState<boolean>(true);
  const [yearsPharmacyExperience, setYearsPharmacyExperience] = useState<number>(4);
  const [hasWorkingProExperience, setHasWorkingProExperience] = useState<boolean>(true);
  const [isWithin50Km, setIsWithin50Km] = useState<boolean>(true);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsCategoryDropdownOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectedCourse = useMemo(() => {
    return coursesData.find(c => c.id === selectedCourseId) || coursesData[0];
  }, [selectedCourseId]);

  // Selected Category Metadata
  const currentCategoryMeta: CasteCategoryInfo = useMemo(() => {
    const key = category === 'General' ? 'Open' : category;
    return casteCategoriesMetadata[key] || casteCategoriesMetadata['Open'];
  }, [category]);

  // Handle Category selection and configure certificate defaults intelligently
  const handleCategorySelect = (newCategory: string) => {
    setCategory(newCategory);
    setIsCategoryDropdownOpen(false);

    // Reset document flags to active defaults for the selected category
    if (newCategory === 'Open' || newCategory === 'General') {
      setHasCasteCertificate(true);
      setHasCasteValidity(true);
      setHasNonCreamyLayer(true);
    } else if (newCategory === 'SC' || newCategory === 'ST') {
      setHasCasteCertificate(true);
      setHasCasteValidity(true);
      setHasNonCreamyLayer(true); // Exemption applies per Sec 17 Sr. 7
    } else if (['VJ/DT-NT(A)', 'NT(B)', 'NT(C)', 'NT(D)', 'OBC', 'SBC', 'SEBC'].includes(newCategory)) {
      setHasCasteCertificate(true);
      setHasCasteValidity(true);
      setHasNonCreamyLayer(true);
    } else if (newCategory === 'EWS') {
      setHasEwsCertificate(true);
    } else if (newCategory === 'PWD') {
      setHasPwdCertificate(true);
    }
  };

  // Update defaults when course changes
  const handleCourseChange = (newCourseId: string) => {
    setSelectedCourseId(newCourseId);
    const crs = coursesData.find(c => c.id === newCourseId);
    if (crs) {
      setEntranceExamTaken(crs.entranceExams.primaryExam);
    }
  };

  const isMS = candidatureType === 'Maharashtra State';
  const isReserved = currentCategoryMeta.code !== 'Open' && currentCategoryMeta.code !== 'General';
  const isPgLateralEntry = selectedCourse.entryType === 'Direct Second Year' && selectedCourse.level === 'PG';

  const evaluationResult: EligibilityResult = useMemo(() => {
    const input: EligibilityInput = {
      courseId: selectedCourseId,
      category,
      candidatureType,
      qualification,
      percentageMarks: parseFloat(percentageMarks) || 0,
      hasMandatorySubjects,
      entranceExamTaken,
      entranceScorePositive,
      hasCasteCertificate,
      hasCasteValidity,
      hasNonCreamyLayer,
      hasEwsCertificate,
      hasPwdCertificate,
      hasRegisteredPharmacist,
      yearsPharmacyExperience,
      hasWorkingProExperience,
      isWithin50Km
    };
    return evaluateEligibility(input, selectedCourse);
  }, [
    selectedCourseId,
    category,
    candidatureType,
    qualification,
    percentageMarks,
    hasMandatorySubjects,
    entranceExamTaken,
    entranceScorePositive,
    hasCasteCertificate,
    hasCasteValidity,
    hasNonCreamyLayer,
    hasEwsCertificate,
    hasPwdCertificate,
    hasRegisteredPharmacist,
    yearsPharmacyExperience,
    hasWorkingProExperience,
    isWithin50Km,
    selectedCourse
  ]);

  const handleReset = () => {
    setCategory('Open');
    setCandidatureType('Maharashtra State');
    setPercentageMarks('55.0');
    setHasMandatorySubjects(true);
    setEntranceScorePositive(true);
    setHasCasteCertificate(true);
    setHasCasteValidity(true);
    setHasNonCreamyLayer(true);
    setHasEwsCertificate(true);
    setHasPwdCertificate(true);
    setIsCategoryDropdownOpen(false);
  };

  // Category List for Dropdown and Quick Chips
  const categoryOptions = [
    { code: 'Open', label: 'Open / General', marathi: 'खुला प्रवर्ग', percentage: 'Unreserved', group: 'OPEN' as const, note: 'Purely on inter-se merit' },
    { code: 'SC', label: 'Scheduled Castes (SC)', marathi: 'अनुसूचित जाती', percentage: '13.0%', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity required (No NCL)' },
    { code: 'ST', label: 'Scheduled Tribes (ST)', marathi: 'अनुसूचित जमाती', percentage: '7.0%', group: 'CONSTITUTIONAL' as const, note: 'Tribe + Validity required (No NCL)' },
    { code: 'VJ/DT-NT(A)', label: 'VJ / DT - NT(A)', marathi: 'विमुक्त जाती / भटक्या जमाती (अ)', percentage: '3.0%', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity + NCL (31.03.2027)' },
    { code: 'NT(B)', label: 'Nomadic Tribes 1 (NT-B)', marathi: 'भटक्या जमाती (ब)', percentage: '2.5%', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity + NCL (31.03.2027)' },
    { code: 'NT(C)', label: 'Nomadic Tribes 2 (NT-C)', marathi: 'भटक्या जमाती (क - धनगर)', percentage: '3.5%', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity + NCL (31.03.2027)' },
    { code: 'NT(D)', label: 'Nomadic Tribes 3 (NT-D)', marathi: 'भटक्या जमाती (ड - वंजारी)', percentage: '2.0%', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity + NCL (31.03.2027)' },
    { code: 'OBC', label: 'Other Backward Classes (OBC)', marathi: 'इतर मागास प्रवर्ग', percentage: '19.0%', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity + NCL (31.03.2027)' },
    { code: 'SBC', label: 'Special Backward Class (SBC)', marathi: 'विशेष मागास प्रवर्ग', percentage: 'Stage III (2%)', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity + NCL (Stage III 2% Vacancy)' },
    { code: 'SEBC', label: 'Socially & Educationally Backward (SEBC)', marathi: 'सामाजिक व शैक्षणिकदृष्ट्या मागास', percentage: '10.0%*', group: 'CONSTITUTIONAL' as const, note: 'Caste + Validity + NCL (*Sub Judice)' },
    { code: 'EWS', label: 'Economically Weaker Section (EWS)', marathi: 'आर्थिक दुर्बल घटक', percentage: '10.0%', group: 'SPECIAL' as const, note: 'Proforma-V Income < ₹8 Lakhs' },
    { code: 'PWD', label: 'Persons with Benchmark Disability (PwD)', marathi: 'दिव्यांग प्रवर्ग', percentage: '5.0%', group: 'SPECIAL' as const, note: 'UDID / Min 40% Disability' }
  ];

  // Filtered categories for the opened dropdown tabs
  const filteredCategoryOptions = useMemo(() => {
    if (categoryFilterTab === 'ALL') return categoryOptions;
    return categoryOptions.filter(opt => opt.group === categoryFilterTab);
  }, [categoryFilterTab, categoryOptions]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Eligibility Checker' }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Rule-Based Preliminary Screening · AY 2026–27</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Maharashtra Technical Admission Eligibility Checker
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Evaluate course eligibility against official State CET Cell Brochure rules. Checks minimum marks, subject combinations, entrance test scores, and category concessions with full transparency.
        </p>
      </div>

      <DisclaimerBanner compact={true} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Inputs (Left Column) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">1. Select Desired Course & Candidature</h2>
              <p className="text-xs text-slate-500">Provide details to evaluate against official brochure rules</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-800 font-semibold inline-flex items-center gap-1"
              title="Reset all inputs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Desired Course Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">Desired Course / Program</label>
            <select
              value={selectedCourseId}
              onChange={(e) => handleCourseChange(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500/30 bg-slate-50"
            >
              {coursesData.map(c => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Candidature Type Selection */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700">Candidature Type (Rule 5 & 6)</label>
              {!isMS && (
                <span className="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  All India Seats = Open Merit (Rule 7(6))
                </span>
              )}
            </div>
            <select
              value={candidatureType}
              onChange={(e) => setCandidatureType(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/30 bg-slate-50"
            >
              <option value="Maharashtra State">Maharashtra State (Type A to E) · Eligible for Category Reservations</option>
              <option value="All India">All India Candidature (OMS) · General Merit on AI Seats</option>
              <option value="JK Migrant">J&K / Ladakh Migrant · Supernumerary Merit Quota</option>
              <option value="NRI/OCI">NRI / OCI / Foreign National · Supernumerary NRI Quota</option>
            </select>
          </div>

          {/* ========================================================================= */}
          {/* INTERACTIVE CASTE / CATEGORY DROPDOWN COMPONENT */}
          {/* ========================================================================= */}
          <div className="space-y-2 relative" ref={dropdownRef}>
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-teal-600" />
                <span>Caste / Category (प्रवर्ग)</span>
              </label>
              <span className="text-[11px] font-semibold text-teal-700">
                {currentCategoryMeta.code === 'Open' ? 'Unreserved' : `${currentCategoryMeta.code} Selected`}
              </span>
            </div>

            {/* Accessible Native Select (Synchronized for keyboard / form accessibility) */}
            <div className="relative">
              <select
                id="caste-category-native-select"
                aria-label="Select Caste or Category"
                value={category}
                onChange={(e) => handleCategorySelect(e.target.value)}
                className="sr-only"
              >
                {categoryOptions.map(opt => (
                  <option key={opt.code} value={opt.code}>
                    {opt.code} - {opt.label} ({opt.marathi}) - {opt.percentage}
                  </option>
                ))}
              </select>

              {/* Custom Interactive Dropdown Trigger Button */}
              <button
                type="button"
                onClick={() => setIsCategoryDropdownOpen(prev => !prev)}
                aria-expanded={isCategoryDropdownOpen}
                aria-controls="caste-dropdown-panel"
                className={`w-full py-2.5 px-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all ${
                  isCategoryDropdownOpen
                    ? 'border-teal-500 ring-2 ring-teal-500/30 bg-white shadow-sm'
                    : 'border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-teal-600 text-white font-mono shrink-0 shadow-xs">
                    {currentCategoryMeta.code}
                  </span>
                  <div className="min-w-0">
                    <span className="font-bold text-slate-900 text-xs truncate block">
                      {currentCategoryMeta.name}
                    </span>
                    <span className="text-[11px] text-slate-500 truncate block">
                      मराठी: {currentCategoryMeta.marathiName} · Quota: {currentCategoryMeta.quotaPercentage ? `${currentCategoryMeta.quotaPercentage}%` : currentCategoryMeta.quotaDescription}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-extrabold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded border border-teal-200 hidden sm:inline-block">
                    {currentCategoryMeta.quotaPercentage ? `${currentCategoryMeta.quotaPercentage}%` : 'Unreserved'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180 text-teal-600' : ''}`} />
                </div>
              </button>
            </div>

            {/* Quick Selection Category Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider shrink-0 mr-1">
                Quick Select:
              </span>
              {categoryOptions.map(opt => {
                const isSelected = category === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => handleCategorySelect(opt.code)}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-medium border transition-colors ${
                      isSelected
                        ? 'bg-teal-700 text-white border-teal-800 font-bold shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span>{opt.code}</span>
                    {opt.percentage !== 'Unreserved' && (
                      <span className={`ml-1 text-[10px] ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                        {opt.percentage}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Expandable Category Dropdown Menu */}
            {isCategoryDropdownOpen && (
              <div 
                id="caste-dropdown-panel"
                className="absolute z-30 left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-teal-300 shadow-xl p-3 space-y-3 animate-in fade-in zoom-in-95 duration-150 max-h-[420px] overflow-y-auto"
              >
                {/* Tabs inside dropdown */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
                    <Filter className="w-3 h-3 text-teal-600" />
                    <span>Filter Categories:</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {(['ALL', 'CONSTITUTIONAL', 'SPECIAL', 'OPEN'] as const).map(tab => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setCategoryFilterTab(tab)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-colors ${
                          categoryFilterTab === tab 
                            ? 'bg-teal-600 text-white shadow-xs' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        {tab === 'CONSTITUTIONAL' ? '60% Quota' : tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Option Cards */}
                <div className="space-y-1.5">
                  {filteredCategoryOptions.map(opt => {
                    const isSelected = category === opt.code;
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        onClick={() => handleCategorySelect(opt.code)}
                        className={`w-full p-2.5 rounded-xl text-left border flex items-start justify-between gap-3 transition-colors ${
                          isSelected
                            ? 'bg-teal-50/90 border-teal-400 text-teal-950 font-semibold ring-1 ring-teal-400'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold shrink-0 mt-0.5 ${
                            isSelected ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {opt.code}
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-xs text-slate-900 block truncate">
                                {opt.label}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 block">
                              मराठी: {opt.marathi}
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">
                              {opt.note}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                            {opt.percentage}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-teal-600 shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* COMPREHENSIVE CASTE & CATEGORY INFORMATION PANEL */}
          {/* Always displayed, immediately updates upon clicking/selecting any caste */}
          {/* ========================================================================= */}
          <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/80 via-slate-50/50 to-white p-5 space-y-4 shadow-sm animate-in fade-in duration-200">
            {/* Header: Name, Marathi, Code & Quota */}
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-teal-100 pb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-teal-700 text-white font-mono shadow-xs">
                    {currentCategoryMeta.code}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {currentCategoryMeta.name}
                  </h3>
                  {currentCategoryMeta.isConstitutionalReservation && (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                      Statutory Constitutional Quota
                    </span>
                  )}
                  {currentCategoryMeta.code === 'EWS' && (
                    <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200">
                      10% Supernumerary
                    </span>
                  )}
                  {currentCategoryMeta.code === 'PWD' && (
                    <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded border border-purple-200">
                      5% Horizontal Quota
                    </span>
                  )}
                  {currentCategoryMeta.code === 'Open' && (
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded border border-slate-300">
                      General / Unreserved Merit
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-semibold text-teal-900 block mt-1">
                  मराठी अधिकृत नाव: {currentCategoryMeta.marathiName}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-extrabold text-teal-900 bg-teal-100 px-3 py-1 rounded-lg border border-teal-300 inline-block">
                  Quota: {currentCategoryMeta.quotaDescription}
                </span>
              </div>
            </div>

            {/* Course-Specific Minimum Marks Relaxation Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-xs">
                <span className="text-slate-500 block text-[11px] font-bold uppercase tracking-wider">
                  Qualifying Marks for {selectedCourse.abbreviation}:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-teal-700">
                    {isReserved && isMS && !isPgLateralEntry 
                      ? `${selectedCourse.eligibility.maharashtraState.minMarksReserved}%` 
                      : `${selectedCourse.eligibility.maharashtraState.minMarksGeneral}%`}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {isReserved && isMS && !isPgLateralEntry
                      ? '(5% Category Relaxation applied)'
                      : '(General / Unreserved minimum)'}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 flex justify-between">
                  <span>General Cutoff: {selectedCourse.eligibility.maharashtraState.minMarksGeneral}%</span>
                  <span>Reserved Cutoff: {selectedCourse.eligibility.maharashtraState.minMarksReserved}%</span>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-xs">
                <span className="text-slate-500 block text-[11px] font-bold uppercase tracking-wider">
                  CAP Application Fee Category:
                </span>
                <span className="font-extrabold text-slate-900 text-sm block">
                  {isReserved && isMS ? '₹ 1,000/- (Reserved Category MS)' : '₹ 1,300/- (General / OMS)'}
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">
                  Brochure Rule 9(1)(iii), Page 70
                </span>
              </div>
            </div>

            {/* Candidature Warning if All India */}
            {!isMS && isReserved && (
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Maharashtra Domicile Requirement (Brochure Rule 7(6), Page 13)</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Per Brochure Section 7(6), statutory category reservations and 5% qualifying mark relaxation apply <strong>exclusively to Maharashtra State Candidature Candidates (Types A to E)</strong>. Because your Candidature Type is "{candidatureType}", you will be considered under General / Open merit without caste concessions on All India seats.
                </p>
              </div>
            )}

            {/* PG Lateral Entry General Seat Rule Notice */}
            {isPgLateralEntry && isReserved && (
              <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <Info className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Post Graduate Lateral Entry Rule 10(2)(ii)(i)</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Per Brochure Rule 10(2)(ii)(i) (page 81), all seats for Post Graduate Lateral Entry (e.g. Direct Second Year MBA / MCA) are treated as General Category seats, and no category reservation is provided.
                </p>
              </div>
            )}

            {/* Sub-Judice note for SEBC */}
            {currentCategoryMeta.isSubJudice && (
              <div className="p-3 bg-amber-50/90 rounded-xl border border-amber-300 text-[11px] text-amber-900 space-y-0.5">
                <span className="font-bold text-amber-950 block">Official Sub Judice Footnote (Brochure Page 14):</span>
                <p>In case of SEBC Candidates, the reservation policy will be subject to the decision of the Hon’ble High Court in related Writ Petitions.</p>
              </div>
            )}

            {/* SBC Stage III rule */}
            {currentCategoryMeta.code === 'SBC' && (
              <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 text-[11px] text-sky-950 space-y-1">
                <span className="font-bold text-sky-900 block">Special Backward Class (SBC) Allocation Rules:</span>
                <p>• <strong>Stage I (Rule 10(1)(d), p. 77):</strong> SBC candidates are considered in General Category by virtue of merit, and in their original Reserved Class prior to SBC inclusion.</p>
                <p>• <strong>Stage III (Rule 10(1), p. 79):</strong> If Reserved category seats remain vacant, they are considered for allotment to SBC candidates up to 2% of seats.</p>
              </div>
            )}

            {/* Official Admission Conditions from Brochure */}
            {currentCategoryMeta.admissionConditions && currentCategoryMeta.admissionConditions.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-teal-100">
                <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-teal-600" />
                  <span>Key Admission Conditions & Rules for {currentCategoryMeta.code}:</span>
                </span>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1 leading-relaxed">
                  {currentCategoryMeta.admissionConditions.map((cond, idx) => (
                    <li key={idx} className="text-[11px]">
                      {cond}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Required Documents Checklist for Selected Category */}
            <div className="space-y-2 pt-2 border-t border-teal-100">
              <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-teal-600" />
                <span>Mandatory Documents for {currentCategoryMeta.code} Verification (Section 17):</span>
              </span>

              {currentCategoryMeta.code === 'Open' || currentCategoryMeta.code === 'General' ? (
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <p className="font-semibold text-slate-900">
                    No Caste Certificate, Validity Certificate, or Non-Creamy Layer is required.
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Open category candidates only require standard educational marksheets (SSC, HSC/Diploma/Degree), Indian Nationality Certificate, and Maharashtra Domicile/Birth Certificate (for Maharashtra State Types A to E).
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-xs">
                  {/* Caste Certificate Toggle */}
                  {currentCategoryMeta.requiresCasteCertificate && (
                    <label className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-teal-300 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasCasteCertificate}
                        onChange={(e) => setHasCasteCertificate(e.target.checked)}
                        className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block">
                          1. Caste Certificate / Tribe Certificate
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Issued by the Competent Authority of Maharashtra State stating caste/sub-caste clearly.
                        </span>
                      </div>
                    </label>
                  )}

                  {/* Caste Validity Certificate Toggle */}
                  {currentCategoryMeta.requiresCasteValidity && (
                    <label className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-teal-300 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasCasteValidity}
                        onChange={(e) => setHasCasteValidity(e.target.checked)}
                        className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block">
                          2. Caste / Tribe Validity Certificate (MANDATORY)
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Issued by the Divisional Caste Certificate Scrutiny Committee. (Rule 9(3)(e)(iii): Missing validity converts candidate to General Category).
                        </span>
                      </div>
                    </label>
                  )}

                  {/* Non-Creamy Layer Certificate Toggle (OBC, SBC, VJ/NT, SEBC) */}
                  {currentCategoryMeta.requiresNonCreamyLayer ? (
                    <label className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-teal-300 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasNonCreamyLayer}
                        onChange={(e) => setHasNonCreamyLayer(e.target.checked)}
                        className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block">
                          3. Non-Creamy Layer (NCL) Certificate (Valid up to 31st March 2027)
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Mandatory for VJ/DT, NT, OBC, SBC, and SEBC (Section 17 Sr. 8, p. 93). Must be valid up to 31.03.2027.
                        </span>
                      </div>
                    </label>
                  ) : (
                    (currentCategoryMeta.code === 'SC' || currentCategoryMeta.code === 'ST') && (
                      <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900">
                        ✓ <strong>Official Exemption (Section 17 Sr. 7, p. 93):</strong> Non-Creamy Layer (NCL) certificate is <strong>NOT required</strong> for SC and ST candidates.
                      </div>
                    )
                  )}

                  {/* EWS Proforma V Toggle */}
                  {currentCategoryMeta.code === 'EWS' && (
                    <label className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-teal-300 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasEwsCertificate}
                        onChange={(e) => setHasEwsCertificate(e.target.checked)}
                        className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block">
                          EWS Eligibility Certificate in Proforma - V (Valid for 2026-27)
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Issued by Tehsildar as per GR dated 31.05.2021 certifying family annual income &lt; ₹ 8,00,000/-.
                        </span>
                      </div>
                    </label>
                  )}

                  {/* PWD Certificate Toggle */}
                  {currentCategoryMeta.code === 'PWD' && (
                    <label className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-teal-300 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasPwdCertificate}
                        onChange={(e) => setHasPwdCertificate(e.target.checked)}
                        className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block">
                          Permanent Disability Certificate (Min 40% Benchmark)
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Issued by Competent Medical Authority / UDID card covering one of the 21 recognized disabilities.
                        </span>
                      </div>
                    </label>
                  )}

                  {/* Rule 9(3)(e)(iii) Dynamic Warning if certificates unchecked */}
                  {isMS && (
                    (!hasCasteValidity && currentCategoryMeta.requiresCasteValidity) ||
                    (!hasNonCreamyLayer && currentCategoryMeta.requiresNonCreamyLayer) ||
                    (!hasEwsCertificate && currentCategoryMeta.code === 'EWS')
                  ) && (
                    <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-900 space-y-1">
                      <span className="font-bold text-rose-950 block flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
                        Rule 9(3)(e)(iii) Consequence at ARC:
                      </span>
                      <p className="text-[11px] leading-relaxed">
                        Because you indicated that your Validity or Non-Creamy Layer certificate is missing, the Competent Authority will convert your application to <strong>General / Open Category</strong> during document verification. You will be evaluated against the General qualifying marks ({selectedCourse.eligibility.maharashtraState.minMarksGeneral}%) and will compete for Open seats only.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Official Source Reference */}
            <div className="pt-2 border-t border-teal-100/70 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Brochure Reference:</span>
              <span className="text-teal-800 font-bold">{currentCategoryMeta.sourceRef}</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 2: ACADEMIC & ENTRANCE DETAILS */}
          {/* ========================================================================= */}
          <div className="border-t border-slate-100 pt-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">2. Academic & Entrance Details</h3>

            {/* Percentage Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700">
                  Aggregate Percentage in Qualifying Examination
                </label>
                <span className="text-[11px] text-teal-700 font-mono font-medium">
                  Rule 8(3)(a) Rounding Applied
                </span>
              </div>
              <input
                type="number"
                step="0.01"
                min="0"
                max="100"
                value={percentageMarks}
                onChange={(e) => setPercentageMarks(e.target.value)}
                placeholder="e.g. 44.80 or 52.50"
                className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500/30 bg-slate-50"
              />
              <span className="text-[11px] text-slate-500 block">
                Enter aggregate percentage. Note: Brochure states 44.50% to 44.99% rounds to 45% (Rule 8(3)(a), p. 61).
              </span>
            </div>

            {/* Mandatory Subject Checkbox */}
            {selectedCourse.eligibility.maharashtraState.mandatorySubjects && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3 text-xs">
                <input
                  type="checkbox"
                  id="chk-subjects"
                  checked={hasMandatorySubjects}
                  onChange={(e) => setHasMandatorySubjects(e.target.checked)}
                  className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="chk-subjects" className="text-slate-700 cursor-pointer">
                  I have passed with the mandatory subject combination: <strong>{selectedCourse.eligibility.maharashtraState.mandatorySubjects.join(', ')}</strong> (plus at least one optional subject as listed in Section 7).
                </label>
              </div>
            )}

            {/* Entrance Exam Selection */}
            {!selectedCourse.entranceExams.primaryExam.includes('Exempt') && (
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Entrance Test Appeared</label>
                  <select
                    value={entranceExamTaken}
                    onChange={(e) => setEntranceExamTaken(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/30 bg-slate-50"
                  >
                    <option value={selectedCourse.entranceExams.primaryExam}>{selectedCourse.entranceExams.primaryExam}</option>
                    {selectedCourse.entranceExams.alternativeExams?.map((alt, i) => (
                      <option key={i} value={alt}>{alt}</option>
                    ))}
                    <option value="None">Have Not Appeared for Any Exam</option>
                  </select>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3 text-xs">
                  <input
                    type="checkbox"
                    id="chk-score"
                    checked={entranceScorePositive}
                    onChange={(e) => setEntranceScorePositive(e.target.checked)}
                    className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="chk-score" className="text-slate-700 cursor-pointer">
                    I have obtained a <strong>non-zero / positive score</strong> in the entrance test (Score &gt; 0).
                  </label>
                </div>
              </div>
            )}

            {/* Conditional Questions: B.Pharm Practice */}
            {selectedCourse.id === 'b-pharm-practice' && (
              <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 space-y-3 text-xs">
                <span className="font-bold text-teal-950 block">Pharmacy Practice Specific Requirements (Rule 7(A)(16)):</span>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="chk-reg-pharm"
                    checked={hasRegisteredPharmacist}
                    onChange={(e) => setHasRegisteredPharmacist(e.target.checked)}
                    className="mt-0.5"
                  />
                  <label htmlFor="chk-reg-pharm" className="text-teal-900 font-medium">
                    I am a Registered Pharmacist holding a valid State Pharmacy Council registration.
                  </label>
                </div>
                <div className="space-y-1">
                  <label className="block text-teal-900 font-medium">Years of Community / Hospital Pharmacy Practice Experience:</label>
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={yearsPharmacyExperience}
                    onChange={(e) => setYearsPharmacyExperience(parseInt(e.target.value) || 0)}
                    className="py-1.5 px-3 rounded-lg border border-teal-300 w-32 bg-white"
                  />
                  <span className="text-[11px] text-teal-700 block">Minimum 4 years required by brochure.</span>
                </div>
              </div>
            )}

            {/* Conditional Questions: Working Professionals */}
            {selectedCourse.entryType === 'Working Professional' && (
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-3 text-xs">
                <span className="font-bold text-purple-950 block">Working Professional Specifics (Rule 7(A)(21) / 7(B)(10)):</span>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="chk-wp-exp"
                    checked={hasWorkingProExperience}
                    onChange={(e) => setHasWorkingProExperience(e.target.checked)}
                    className="mt-0.5"
                  />
                  <label htmlFor="chk-wp-exp" className="text-purple-900 font-medium">
                    I have minimum 1 year of regular full-time experience in registered industry / MSME (Proforma W1).
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="chk-wp-dist"
                    checked={isWithin50Km}
                    onChange={(e) => setIsWithin50Km(e.target.checked)}
                    className="mt-0.5"
                  />
                  <label htmlFor="chk-wp-dist" className="text-purple-900 font-medium">
                    My working workplace is located within 50 KM radial distance from the admitting institution (Proforma W2).
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Evaluation Verdict & Criteria Breakdown (Right Column) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Verdict Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 sticky top-6">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Screening Verdict</span>
            
            <div className={`p-4 rounded-xl border ${evaluationResult.badgeClass} space-y-1`}>
              <div className="flex items-center gap-2">
                {evaluationResult.verdict === 'POTENTIALLY_ELIGIBLE' && <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />}
                {evaluationResult.verdict === 'NOT_ELIGIBLE' && <AlertCircle className="w-5 h-5 text-rose-700 shrink-0" />}
                {evaluationResult.verdict === 'MORE_INFO_REQUIRED' && <HelpCircle className="w-5 h-5 text-amber-700 shrink-0" />}
                <h3 className="font-bold text-base">{evaluationResult.headline}</h3>
              </div>
              <p className="text-xs leading-relaxed opacity-90">{evaluationResult.summary}</p>
            </div>

            {/* Criteria Checklist Breakdown */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Detailed Rule Breakdown</h4>
              <div className="space-y-2">
                {evaluationResult.evaluations.map((ev, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">{ev.ruleName}</span>
                      {ev.status === 'PASS' && <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded"><Check className="w-3 h-3" /> Met</span>}
                      {ev.status === 'FAIL' && <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded"><X className="w-3 h-3" /> Not Met</span>}
                      {ev.status === 'WARNING' && <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded"><AlertTriangle className="w-3 h-3" /> Note</span>}
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{ev.message}</p>
                    <span className="text-[10px] text-slate-400 font-mono block">{ev.brochureSource}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            {evaluationResult.recommendations.length > 0 && (
              <div className="p-4 bg-teal-50 rounded-xl border border-teal-100 text-xs space-y-1.5">
                <span className="font-bold text-teal-950 block">Next Recommended Steps:</span>
                <ul className="list-disc list-inside space-y-1 text-teal-900 text-[11px]">
                  {evaluationResult.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Links */}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to={`/courses/${selectedCourse.slug}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-semibold text-xs text-center hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>View Full {selectedCourse.abbreviation} Course Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to={`/documents?course=${selectedCourse.id}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs text-center hover:bg-slate-200 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Generate Document Checklist for this Program</span>
              </Link>
            </div>
          </div>

          {/* Legal Warning Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
            <span className="font-bold text-amber-950 block flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
              Important Advisory
            </span>
            <p className="text-[11px] leading-relaxed">
              This screening is rule-based and informational only. It does not constitute official admission approval or guarantee seat allotment. Official eligibility is confirmed solely by the Competent Authority (State CET Cell) upon physical/E-Scrutiny verification of original documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
