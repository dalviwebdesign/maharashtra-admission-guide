import React from 'react';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UndergraduateCourses: React.FC = () => {
  const ugCourses = coursesData.filter(c => c.level === 'UG');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Courses', path: '/courses' }, { label: 'Undergraduate Courses' }]} />

      <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Section 7(A) — Professional Education UG Courses</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Undergraduate Degree Programmes (2026–27)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Full-time professional technical bachelor’s degree programs for candidates passing 10+2 (HSC) or qualifying diploma, covering Engineering, Pharmacy, Architecture, Planning, Design, Computer Applications, Management, and Hotel Management.
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
        <span>Showing <strong>{ugCourses.length}</strong> Undergraduate Programs</span>
        <Link to="/checker" className="text-teal-700 font-bold hover:underline inline-flex items-center gap-1">
          <span>Check UG Eligibility</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ugCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
