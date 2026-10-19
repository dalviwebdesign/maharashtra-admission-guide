import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Search, Filter, RotateCcw, BookOpen, Layers } from 'lucide-react';

export const AllCourses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All';
  const initialLevel = searchParams.get('level') || 'All';
  const initialEntry = searchParams.get('entry') || 'All';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [selectedEntry, setSelectedEntry] = useState(initialEntry);

  const categories = ['All', 'Engineering', 'Pharmacy', 'Architecture', 'Management', 'Computer Applications', 'Design', 'Planning', 'Hotel Management', 'Special Mode'];
  const levels = ['All', 'UG', 'PG', 'Integrated', 'Lateral Entry'];
  const entries = ['All', 'First Year', 'Direct Second Year', 'Direct Third Year', 'Direct Final Year', 'Working Professional', 'Collaborative/Twinning'];

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      // Search term matching title, abbreviation, qualifying exam, entrance exam
      const matchesSearch = searchTerm.trim() === '' || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.entranceExams.primaryExam.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.qualifyingExam.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesEntry = selectedEntry === 'All' || course.entryType === selectedEntry;

      return matchesSearch && matchesCategory && matchesLevel && matchesEntry;
    });
  }, [searchTerm, selectedCategory, selectedLevel, selectedEntry]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedEntry('All');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'All Courses' }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-lg">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Year 2026–27 Master Course Directory</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Official Course Directory
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Browse all 35+ professional technical undergraduate, postgraduate, integrated dual degree, and lateral entry admission routes covered in the Maharashtra State CET Cell Information Brochure.
          </p>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by course name, abbreviation, entrance test, or qualification..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
          />
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Level Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Programme Level</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/30 bg-slate-50"
            >
              {levels.map(lvl => (
                <option key={lvl} value={lvl}>{lvl === 'All' ? 'All Levels (UG, PG, Integrated)' : lvl}</option>
              ))}
            </select>
          </div>

          {/* Discipline Category Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Discipline / Branch</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/30 bg-slate-50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'All' ? 'All Disciplines' : cat}</option>
              ))}
            </select>
          </div>

          {/* Entry Type Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Admission Entry Route</label>
            <select
              value={selectedEntry}
              onChange={(e) => setSelectedEntry(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/30 bg-slate-50"
            >
              {entries.map(ent => (
                <option key={ent} value={ent}>{ent === 'All' ? 'All Entry Routes (First Yr, DSE, etc.)' : ent}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Status & Reset */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredCourses.length}</strong> of {coursesData.length} course routes
          </span>
          {(searchTerm || selectedCategory !== 'All' || selectedLevel !== 'All' || selectedEntry !== 'All') && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching courses found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search keywords or resetting the filters to view all available programs.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-teal-600 text-white font-semibold text-xs shadow hover:bg-teal-700 transition-colors inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
