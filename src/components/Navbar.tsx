import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown, 
  CheckCircle2, 
  FileText, 
  BookOpen, 
  ExternalLink,
  ShieldAlert,
  Search,
  Scale
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isRulesDropdownOpen, setIsRulesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCoursesDropdownOpen(false);
    setIsRulesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      {/* Top micro bar for Academic Year & Official Disclaimer */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              AY 2026–27
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-slate-300">
              Information Brochure for Technical Degree Admissions
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-amber-400/90 font-medium hidden md:inline">
              Independent Guide
            </span>
            <a 
              href="https://cetcell.mahacet.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 font-medium transition-colors"
            >
              Official CET Cell Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-900/40 group-hover:bg-teal-500 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-teal-300 transition-colors block leading-tight">
                Maharashtra Admission Guide
              </span>
              <span className="text-[11px] text-slate-400 block tracking-normal">
                Course-wise Eligibility & CAP 2026–27
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') ? 'bg-slate-800 text-teal-300' : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
                  setIsRulesDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/courses') || 
                  location.pathname === '/undergraduate-courses' || 
                  location.pathname === '/postgraduate-courses' || 
                  location.pathname === '/integrated-courses' || 
                  location.pathname === '/direct-second-year'
                    ? 'bg-slate-800 text-teal-300' 
                    : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
                }`}
                aria-expanded={isCoursesDropdownOpen}
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCoursesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-xl bg-slate-800 border border-slate-700 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <Link
                    to="/courses"
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700/80 hover:text-teal-300 font-semibold"
                  >
                    All Courses (35+ Programs)
                  </Link>
                  <div className="h-px bg-slate-700 my-1" />
                  <Link
                    to="/undergraduate-courses"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  >
                    Undergraduate (B.E, B.Pharm, B.Arch, BCA...)
                  </Link>
                  <Link
                    to="/postgraduate-courses"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  >
                    Postgraduate (MBA, MCA, M.Tech, M.Pharm...)
                  </Link>
                  <Link
                    to="/integrated-courses"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  >
                    Integrated Dual Degree (4 & 5 Years)
                  </Link>
                  <Link
                    to="/direct-second-year"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  >
                    Direct Second Year (DSE / Lateral Entry)
                  </Link>
                </div>
              )}
            </div>

            {/* Eligibility Checker */}
            <Link
              to="/checker"
              className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                isActive('/checker') ? 'bg-teal-500 text-slate-950 font-bold' : 'text-teal-300 hover:bg-teal-500/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Eligibility Checker</span>
            </Link>

            {/* Documents Checklist */}
            <Link
              to="/documents"
              className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                isActive('/documents') ? 'bg-slate-800 text-teal-300' : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Documents</span>
            </Link>

            {/* Rules & CAP Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsRulesDropdownOpen(!isRulesDropdownOpen);
                  setIsCoursesDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                  isActive('/candidature-types') || isActive('/reservations-tfws') || isActive('/cap-process')
                    ? 'bg-slate-800 text-teal-300' 
                    : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
                }`}
                aria-expanded={isRulesDropdownOpen}
              >
                <span>Rules & CAP</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isRulesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isRulesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-800 border border-slate-700 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <Link
                    to="/candidature-types"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  >
                    Maharashtra Candidature Types (A–E)
                  </Link>
                  <Link
                    to="/reservations-tfws"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  >
                    Reservations (60%) & TFWS (5%)
                  </Link>
                  <Link
                    to="/cap-process"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  >
                    CAP Rounds I–IV & Auto-Freeze Rules
                  </Link>
                </div>
              )}
            </div>

            {/* Official Links */}
            <Link
              to="/official-links"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/official-links') ? 'bg-slate-800 text-teal-300' : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
              }`}
            >
              Official Links
            </Link>

            {/* Disclaimer & Sources */}
            <Link
              to="/disclaimer"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/disclaimer') ? 'bg-slate-800 text-teal-300' : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
              }`}
            >
              Sources & Brochure
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/checker"
              className="px-2.5 py-1.5 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Check</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              to="/checker"
              className="p-3 bg-teal-500 text-slate-950 font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow"
            >
              <CheckCircle2 className="w-4 h-4" />
              Eligibility Checker
            </Link>
            <Link
              to="/documents"
              className="p-3 bg-slate-800 text-white font-semibold rounded-xl text-center text-sm flex items-center justify-center gap-2 border border-slate-700"
            >
              <FileText className="w-4 h-4" />
              Document Checklist
            </Link>
          </div>

          <div className="space-y-1 pt-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Course Categories
            </div>
            <Link
              to="/courses"
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 font-medium"
            >
              All Courses Catalog (35+ Programs)
            </Link>
            <Link
              to="/undergraduate-courses"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              Undergraduate Degree Programs (B.E., B.Pharm, B.Arch...)
            </Link>
            <Link
              to="/postgraduate-courses"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              Postgraduate Degree Programs (MBA, MCA, M.Tech...)
            </Link>
            <Link
              to="/integrated-courses"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              Integrated Dual Degree Courses
            </Link>
            <Link
              to="/direct-second-year"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              Direct Second Year Admissions (Lateral Entry)
            </Link>
          </div>

          <div className="space-y-1 pt-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Admission Rules & System
            </div>
            <Link
              to="/candidature-types"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              Maharashtra Candidature Types (Type A to E)
            </Link>
            <Link
              to="/reservations-tfws"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              Reservation Quotas (60%) & TFWS (5%)
            </Link>
            <Link
              to="/cap-process"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              CAP Admission Process & Auto-Freeze Rules
            </Link>
            <Link
              to="/official-links"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              Important Official Portals
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
            >
              About This Website
            </Link>
            <Link
              to="/disclaimer"
              className="block px-3 py-2 rounded-lg text-sm text-amber-400 hover:bg-slate-800"
            >
              Legal Disclaimer & Brochure Source Mapping
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
