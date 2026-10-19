import React from 'react';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IntegratedCourses: React.FC = () => {
  const integratedCourses = coursesData.filter(c => c.level === 'Integrated');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Courses', path: '/courses' }, { label: 'Integrated Courses' }]} />

      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
          <Layers className="w-3.5 h-3.5" />
          <span>Integrated Dual Degree Programs</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Integrated & Dual Degree Courses (2026–27)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Integrated 4-year and 5-year combined technical programs offered directly after 10+2: M.Tech Integrated (5 Yrs), M.Plan Integrated (5 Yrs), M.HMCT Integrated (5 Yrs), MCA Integrated (4 Yrs), and MBA Integrated (4 Yrs).
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
        <span>Showing <strong>{integratedCourses.length}</strong> Integrated Degree Programs</span>
        <Link to="/checker" className="text-teal-700 font-bold hover:underline inline-flex items-center gap-1">
          <span>Check Eligibility</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integratedCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
