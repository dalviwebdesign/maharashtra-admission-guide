import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Search, BookOpen } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 mx-auto flex items-center justify-center">
        <Compass className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider">Error 404</span>
        <h1 className="text-3xl font-extrabold text-slate-900">Page Not Found</h1>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          The admission guide page or course route you requested could not be located. It may have been moved or updated.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
        <Link
          to="/"
          className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 inline-flex items-center gap-1.5 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
        <Link
          to="/courses"
          className="px-5 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 inline-flex items-center gap-1.5 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Browse All Courses</span>
        </Link>
      </div>
    </div>
  );
};
