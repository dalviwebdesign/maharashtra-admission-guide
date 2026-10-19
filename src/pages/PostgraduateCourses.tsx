import React from 'react';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PostgraduateCourses: React.FC = () => {
  const pgCourses = coursesData.filter(c => c.level === 'PG');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Courses', path: '/courses' }, { label: 'Postgraduate Courses' }]} />

      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Section 7(B) — Professional Education PG Courses</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Postgraduate Technical Degree Programmes (2026–27)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Full-time professional master’s degree programs for graduates holding a bachelor’s degree in relevant disciplines: MBA/MMS, MCA, M.Tech/M.E., M.Pharm, M.Arch, M.Planning, M.Design, and Pharm.D (PB).
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
        <span>Showing <strong>{pgCourses.length}</strong> Postgraduate Programs</span>
        <Link to="/checker" className="text-teal-700 font-bold hover:underline inline-flex items-center gap-1">
          <span>Check PG Eligibility</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pgCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
