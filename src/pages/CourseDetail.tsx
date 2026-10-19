import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { 
  GraduationCap, 
  Clock, 
  Award, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  Share2, 
  ExternalLink, 
  BookOpen, 
  ShieldCheck, 
  ChevronRight, 
  HelpCircle,
  Percent,
  Layers,
  Building2,
  Calendar
} from 'lucide-react';

export const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find(c => c.slug === slug || c.id === slug);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Course Not Found</h1>
        <p className="text-slate-600 text-sm">The course or admission route you are looking for does not exist in the 2026–27 catalog.</p>
        <Link to="/courses" className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-xl text-sm font-semibold hover:bg-teal-700">
          <span>Browse All Courses</span>
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Courses', path: '/courses' },
        { label: course.level, path: course.level === 'UG' ? '/undergraduate-courses' : course.level === 'PG' ? '/postgraduate-courses' : '/integrated-courses' },
        { label: course.abbreviation }
      ]} />

      {/* Top Header Card */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-slate-800">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30">
              {course.level} · {course.entryType}
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 font-medium border border-slate-700">
              {course.category}
            </span>
            <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 font-mono text-[11px] border border-amber-500/20">
              Brochure AY 2026–27 · Section {course.brochureSource.section} · Printed Page {course.brochureSource.printedPage}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {course.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {course.overview}
          </p>

          {/* Quick metadata strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Course Duration</span>
              <span className="font-bold text-teal-300 text-sm">{course.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Qualifying Qualification</span>
              <span className="font-semibold text-white line-clamp-1">{course.qualifyingExam}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Primary Entrance / Merit</span>
              <span className="font-semibold text-white line-clamp-1">{course.entranceExams.primaryExam}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Min. Marks (General / Reserved)</span>
              <span className="font-bold text-teal-300 text-sm">
                {course.eligibility.maharashtraState.minMarksGeneral}% / {course.eligibility.maharashtraState.minMarksReserved}%
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Link
              to={`/checker?course=${course.id}`}
              className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl shadow inline-flex items-center gap-1.5 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-slate-950" />
              <span>Check Eligibility For This Course</span>
            </Link>
            <Link
              to={`/documents?course=${course.id}`}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>Document Checklist</span>
            </Link>
          </div>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
            title="Print or Save PDF of this Course Guide"
          >
            <Printer className="w-4 h-4" />
            <span>Print Guide</span>
          </button>
        </div>
      </div>

      {/* Independent Status Banner */}
      <DisclaimerBanner compact={true} />

      {/* Main Content Grid: Sections A through H */}
      <div className="space-y-12">

        {/* ========================================================= */}
        {/* SECTION A: Course Overview */}
        {/* ========================================================= */}
        <section id="section-overview" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Section A</span>
              <h2 className="text-xl font-bold text-slate-900">Course Overview & Classification</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Full Course Name</span>
              <p className="font-bold text-slate-900 text-sm">{course.title}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Common Abbreviation</span>
              <p className="font-bold font-mono text-slate-900 text-sm">{course.abbreviation}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Programme Level & Route</span>
              <p className="font-bold text-slate-900 text-sm">{course.level} · {course.entryType}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Duration</span>
              <p className="font-bold text-slate-900 text-sm">{course.duration}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100 md:col-span-2">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Qualifying Examination</span>
              <p className="font-semibold text-slate-800 text-sm">{course.qualifyingExam}</p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION B: Eligibility Criteria */}
        {/* ========================================================= */}
        <section id="section-eligibility" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Section B</span>
              <h2 className="text-xl font-bold text-slate-900">Eligibility Criteria (Brochure Sourced)</h2>
            </div>
          </div>

          {/* Maharashtra State Candidature Criteria */}
          <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sky-950 text-base">
                1. Maharashtra State Candidature Candidates
              </h3>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-sky-100 text-sky-800">
                Rule {course.eligibility.maharashtraState.brochureSource.ruleNumber || '7'}
              </span>
            </div>

            <div className="space-y-3 text-xs text-sky-950/90 leading-relaxed">
              <p>
                <strong>Educational Qualification:</strong> {course.eligibility.maharashtraState.qualification}
              </p>

              {course.eligibility.maharashtraState.mandatorySubjects && (
                <p>
                  <strong>Compulsory Subjects:</strong> {course.eligibility.maharashtraState.mandatorySubjects.join(', ')}
                </p>
              )}

              {course.eligibility.maharashtraState.optionalSubjects && (
                <p>
                  <strong>Optional Subjects (at least one):</strong> {course.eligibility.maharashtraState.optionalSubjects.join(', ')}
                </p>
              )}

              {/* Minimum Marks Highlight Box */}
              <div className="p-3 bg-white rounded-xl border border-sky-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-slate-500 block">General / Open Category Min. Marks</span>
                  <span className="text-base font-extrabold text-slate-900">{course.eligibility.maharashtraState.minMarksGeneral}%</span>
                </div>
                <div className="sm:border-l sm:border-slate-200 sm:pl-4">
                  <span className="text-[11px] text-slate-500 block">Reserved / EWS / PwD (MS Only) Min. Marks</span>
                  <span className="text-base font-extrabold text-teal-700">{course.eligibility.maharashtraState.minMarksReserved}%</span>
                </div>
                <div className="sm:border-l sm:border-slate-200 sm:pl-4">
                  <span className="text-[11px] text-slate-500 block">Official Rounding-Off Rule (p. 61)</span>
                  <span className="text-xs font-semibold text-slate-700">44.50%–44.99% rounds to 45%</span>
                </div>
              </div>

              <p>
                <strong>Entrance Exam Requirement:</strong> {course.eligibility.maharashtraState.entranceExamDetails}
              </p>

              {course.eligibility.maharashtraState.notes && (
                <div className="p-3 bg-sky-100/50 rounded-xl space-y-1">
                  <span className="font-bold text-sky-900 block text-[11px]">Special Notes & Relaxations:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-sky-900 text-[11px]">
                    {course.eligibility.maharashtraState.notes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* All India Candidature Criteria */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs leading-relaxed">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-base">
                2. All India Candidature Candidates (OMS)
              </h3>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-200 text-slate-700">
                Rule {course.eligibility.allIndia.brochureSource.ruleNumber || '7'}
              </span>
            </div>
            <p>
              <strong>Eligibility:</strong> {course.eligibility.allIndia.qualification}
            </p>
            <p>
              <strong>Entrance Examination:</strong> {course.eligibility.allIndia.entranceExamDetails}
            </p>
            <p className="text-slate-500 text-[11px]">
              <em>Note: For All India Candidature seats, no category reservation concessions apply; all seats are filled on general merit.</em>
            </p>
          </div>

          {/* NRI / OCI Criteria if applicable */}
          {course.eligibility.nriOci && (
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
              <h4 className="font-bold text-amber-900">3. NRI / OCI / PIO / Foreign Nationals / CIWGC</h4>
              <p>{course.eligibility.nriOci.criteria}</p>
              <span className="text-[10px] text-amber-700 font-mono block pt-1">{course.eligibility.nriOci.sourceRef}</span>
            </div>
          )}

          {/* Tie Breaking Methodology */}
          <div className="space-y-2 pt-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Brochure Prescribed Tie-Breaking Order (Section 8(4))
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {course.eligibility.tieBreakingRules.map((rule, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-medium text-slate-800">{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION C: Entrance Examination Details */}
        {/* ========================================================= */}
        <section id="section-entrance" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Section C</span>
              <h2 className="text-xl font-bold text-slate-900">Entrance Examination & Score Requirements</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Primary Examination</span>
              <p className="font-bold text-slate-900 text-sm">{course.entranceExams.primaryExam}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Recognized National / Alternative Tests</span>
              <p className="font-semibold text-slate-800 text-sm">
                {course.entranceExams.alternativeExams && course.entranceExams.alternativeExams.length > 0 
                  ? course.entranceExams.alternativeExams.join(', ') 
                  : 'None declared (Primary exam or qualifying merit only)'}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Subjects / Examination Group</span>
              <p className="font-semibold text-slate-800 text-sm">{course.entranceExams.subjectsOrGroups}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Score Requirement</span>
              <p className="font-semibold text-slate-800 text-sm">{course.entranceExams.scoreRequirement}</p>
            </div>
          </div>

          <div className="pt-2 text-xs">
            <a
              href="https://cetcell.mahacet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 font-semibold inline-flex items-center gap-1.5"
            >
              <span>Visit Official State CET Cell Examination Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION D: Documents Required */}
        {/* ========================================================= */}
        <section id="section-documents" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Section D</span>
                <h2 className="text-xl font-bold text-slate-900">Documents Required for Verification</h2>
              </div>
            </div>
            <Link
              to={`/documents?course=${course.id}`}
              className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
            >
              <span>Interactive Checklist</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            All original documents must be scanned in <strong>.jpg or .gif format (minimum 150 dpi, max 1MB)</strong> and uploaded during online CAP registration. Original physical copies must be produced at the Facilitation Centre (FC) or Admission Reporting Centre (ARC) (Rule 17).
          </p>

          <div className="space-y-3">
            {course.documentsRequired.map((doc, idx) => {
              const typeBadgeColor = 
                doc.requirementType === 'Required for all' ? 'bg-slate-100 text-slate-800 border-slate-200' :
                doc.requirementType === 'Category specific' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                doc.requirementType === 'Candidature specific' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                'bg-emerald-50 text-emerald-800 border-emerald-200';

              return (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{doc.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${typeBadgeColor}`}>
                        {doc.requirementType}
                      </span>
                      {doc.proforma && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-100 text-purple-800">
                          {doc.proforma}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600">{doc.description}</p>
                    {doc.categoryApplicability && (
                      <p className="text-[11px] text-amber-800">
                        Applicable to: {doc.categoryApplicability.join(', ')}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0">
                    {doc.sourceRef}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION E: Admission Procedure (CAP) */}
        {/* ========================================================= */}
        <section id="section-procedure" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Section E</span>
              <h2 className="text-xl font-bold text-slate-900">CAP Admission Procedure (Rule 9 & 11)</h2>
            </div>
          </div>

          {/* Fee Table Box */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
            <span className="font-bold text-slate-900 block text-sm">Official Non-Refundable Application Fees (Rule 9(1)(iii)):</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[11px]">General / OMS / J&K Migrant</span>
                <span className="font-extrabold text-slate-900 text-sm">{course.admissionProcedure.applicationFeeGeneral}</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[11px]">Reserved / EWS / PwD (MS Only)</span>
                <span className="font-extrabold text-teal-700 text-sm">{course.admissionProcedure.applicationFeeReserved}</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[11px]">NRI / OCI / PIO / Foreign Nationals</span>
                <span className="font-extrabold text-slate-900 text-sm">{course.admissionProcedure.applicationFeeNRI}</span>
              </div>
            </div>
          </div>

          {/* Step Sequence */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Step-by-Step CAP Stages</h4>
            <div className="space-y-3">
              {course.admissionProcedure.steps.map((st, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    {st.stepNumber}
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{st.title}</h5>
                    <p className="text-slate-600 leading-relaxed mt-0.5">{st.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION F: Special Provisions & Seat Matrix */}
        {/* ========================================================= */}
        <section id="section-provisions" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Section F</span>
              <h2 className="text-xl font-bold text-slate-900">Special Provisions & Seat Distribution</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Tuition Fee Waiver Scheme (TFWS)</span>
              <span className={`inline-block font-bold px-2 py-0.5 rounded text-xs ${course.specialProvisions.tfwsEligible ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}`}>
                {course.specialProvisions.tfwsEligible ? 'Eligible (Up to 5% Supernumerary Seats)' : 'Not Applicable for this route'}
              </span>
              {course.specialProvisions.tfwsDetails && (
                <p className="text-slate-600 pt-1">{course.specialProvisions.tfwsDetails}</p>
              )}
            </div>

            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Constitutional Reservations</span>
              <span className={`inline-block font-bold px-2 py-0.5 rounded text-xs ${course.specialProvisions.reservationsApplicable ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-700'}`}>
                {course.specialProvisions.reservationsApplicable ? 'Applicable (60% Quota for MS Candidates)' : 'General Category Only'}
              </span>
              <p className="text-slate-600 pt-1">
                SC (13%), ST (7%), VJ/NT (11%), OBC (19%), SEBC (10%*), plus EWS (10%), Orphan (1%), Female (30%), PwD (5%), Defence (5%).
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Institutional Quota</span>
              <p className="font-semibold text-slate-800">{course.specialProvisions.institutionalQuota}</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl space-y-1 border border-slate-100">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Minority Quota</span>
              <p className="font-semibold text-slate-800">
                {course.specialProvisions.minorityQuota || 'Minimum 51% in minority institutions as per Schedule I & II.'}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION G: Course-Specific FAQs */}
        {/* ========================================================= */}
        <section id="section-faqs" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Section G</span>
              <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="space-y-3">
            {course.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                <h4 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                  <span className="text-teal-600">Q{idx + 1}:</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION H: Official Brochure Source Citation */}
        {/* ========================================================= */}
        <section id="section-source" className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 text-xs">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <div className="p-2 bg-slate-200 text-slate-800 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Section H</span>
              <h2 className="text-xl font-bold text-slate-900">Official Source Verification</h2>
            </div>
          </div>

          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p>
              <strong>Official Reference:</strong> Government of Maharashtra State Common Entrance Test Cell Information Brochure for Academic Year 2026–27.
            </p>
            <p>
              <strong>Brochure Section:</strong> {course.brochureSource.ruleClause}
            </p>
            <p>
              <strong>Printed Page Number:</strong> Page {course.brochureSource.printedPage}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <a
              href="https://cetcell.mahacet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 underline inline-flex items-center gap-1"
            >
              State CET Cell Portal (cetcell.mahacet.org) <ExternalLink className="w-3 h-3" />
            </a>
            <Link to="/disclaimer" className="text-teal-700 hover:text-teal-900 underline">
              View Master Brochure Mapping Table
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
