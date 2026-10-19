import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types/admission';
import { Clock, GraduationCap, Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const levelColor = 
    course.level === 'UG' ? 'bg-sky-50 text-sky-700 border-sky-200' :
    course.level === 'PG' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
    course.level === 'Integrated' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
    'bg-purple-50 text-purple-700 border-purple-200';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
      <div className="p-5">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${levelColor}`}>
            {course.level} · {course.entryType}
          </span>
          <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/courses/${course.slug}`}>
          <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors text-base line-clamp-2 mb-1">
            {course.title}
          </h3>
        </Link>
        <span className="text-xs font-mono font-medium text-slate-500 block mb-3">
          {course.abbreviation}
        </span>

        {/* Quick Specs */}
        <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
          <div className="flex items-start gap-2">
            <GraduationCap className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block text-[11px]">Qualifying Exam:</span>
              <span className="font-medium text-slate-800 line-clamp-1">{course.qualifyingExam}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block text-[11px]">Entrance Test / Merit:</span>
              <span className="font-medium text-slate-800 line-clamp-1">{course.entranceExams.primaryExam}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block text-[11px]">Min. Marks (Gen / Reserved MS):</span>
              <span className="font-semibold text-slate-900">
                {course.eligibility.maharashtraState.minMarksGeneral}% / {course.eligibility.maharashtraState.minMarksReserved}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-400 font-mono text-[11px]">
          Brochure p. {course.brochureSource.printedPage}
        </span>
        <Link
          to={`/courses/${course.slug}`}
          className="text-teal-700 group-hover:text-teal-900 font-bold inline-flex items-center gap-1 transition-colors"
        >
          <span>View Full Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
