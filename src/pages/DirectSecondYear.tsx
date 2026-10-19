import React from 'react';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Compass, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DirectSecondYear: React.FC = () => {
  const lateralCourses = coursesData.filter(c => c.level === 'Lateral Entry' || c.entryType === 'Direct Second Year');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Courses', path: '/courses' }, { label: 'Lateral Entry' }, { label: 'Direct Second Year Admissions' }]} />

      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
          <Compass className="w-3.5 h-3.5" />
          <span>Schedule II & Rules 7, 8(4)(b)</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Direct Second Year & Lateral Entry Admissions (2026–27)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Lateral entry opportunities directly into the second year for Diploma in Engineering, Diploma in Pharmacy, Diploma in Hotel Management, B.Sc. graduates, and Working Professionals without requiring a CET.
        </p>
      </div>

      {/* Critical Lateral Entry Policy Callout Box */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 text-sm text-purple-950 space-y-3">
        <div className="flex items-center gap-2 font-bold text-base text-purple-900">
          <ShieldCheck className="w-5 h-5 text-purple-700" />
          <span>Key Lateral Entry Rules in Brochure AY 2026–27</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-purple-900/90">
          <div>
            <strong className="block text-purple-950 mb-1">1. 10% Supernumerary Seats + Vacant Seats</strong>
            Lateral entry seats in Engineering, Pharmacy, and HMCT equal 10% of sanctioned intake over and above approved intake, plus any unfilled vacant seats from the first year (Schedule II, p. 103).
          </div>
          <div>
            <strong className="block text-purple-950 mb-1">2. No CET Required</strong>
            Admissions to Direct Second Year B.E./B.Tech, B.Pharm, and B.HMCT are conducted on the basis of marks obtained in the qualifying diploma/degree examination without any CET score requirement (Rule 8(4)(b), p. 62).
          </div>
          <div>
            <strong className="block text-purple-950 mb-1">3. Priority of Diploma over B.Sc.</strong>
            In B.E./B.Tech lateral entry, vacant seats are offered first to Diploma candidates on inter-se merit; only if seats remain vacant are B.Sc. candidates considered, followed by D.Voc. (Rule 10(1) Stage V, p. 79).
          </div>
          <div>
            <strong className="block text-purple-950 mb-1">4. PCI Approval Mandatory for DSP</strong>
            D.Pharm graduates applying for Direct Second Year Pharmacy must provide the PCI approval letter given to their diploma institute under Section 12 (Rule 17, Sr. 7, p. 93).
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
        <span>Showing <strong>{lateralCourses.length}</strong> Lateral Entry & Working Professional Routes</span>
        <Link to="/checker" className="text-teal-700 font-bold hover:underline inline-flex items-center gap-1">
          <span>Check Lateral Entry Eligibility</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lateralCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
