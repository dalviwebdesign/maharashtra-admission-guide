import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { 
  Search, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Compass, 
  Cpu, 
  Pill, 
  Landmark, 
  Briefcase, 
  Code, 
  Palette, 
  MapPin, 
  UtensilsCrossed, 
  ArrowRight, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  Award,
  Users,
  Percent
} from 'lucide-react';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Filter top featured courses
  const ugCourses = coursesData.filter(c => c.level === 'UG').slice(0, 4);
  const pgCourses = coursesData.filter(c => c.level === 'PG').slice(0, 4);

  // Quick categories
  const categories = [
    { name: 'Engineering & Tech', count: '4 Years UG / 2 Years PG', icon: Cpu, link: '/courses?category=Engineering', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'Pharmacy (B.Pharm / Pharm.D)', count: '4 & 6 Years UG / PG', icon: Pill, link: '/courses?category=Pharmacy', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { name: 'Architecture (B.Arch / M.Arch)', count: '5 Years UG / 2 Years PG', icon: Landmark, link: '/courses?category=Architecture', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { name: 'Management (MBA / BBA / BMS)', count: '3 & 4 Years UG / 2 Years PG', icon: Briefcase, link: '/courses?category=Management', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Computer Applications (BCA / MCA)', count: '3/4 Yrs BCA / 2 Yrs MCA', icon: Code, link: '/courses?category=Computer Applications', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
    { name: 'Design (B.Des / M.Des)', count: '4 Years UG / 2 Years PG', icon: Palette, link: '/courses?category=Design', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    { name: 'Planning (B.Plan / M.Plan)', count: '4 & 5 Years Integrated', icon: MapPin, link: '/courses?category=Planning', color: 'bg-teal-50 text-teal-700 border-teal-200' },
    { name: 'Hotel Management (HMCT)', count: '4 Years UG / 2 Years PG', icon: UtensilsCrossed, link: '/courses?category=Hotel Management', color: 'bg-orange-50 text-orange-700 border-orange-200' }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Official State CET Cell Brochure 2026–27 Rules Applied
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Find Your Course. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Check Your Eligibility.
            </span> <br className="hidden sm:inline" />
            Prepare Your Documents.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            The comprehensive, independent informational guide for Maharashtra Technical Degree Admissions 2026–27. Master course-wise eligibility criteria, minimum marks, subject combinations, entrance tests, reservations, and CAP rounds.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-2">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by course name (e.g. B.Tech, Pharmacy, MBA, BCA, DSE)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-28 py-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-teal-500/30 shadow-2xl"
              />
              <button
                type="submit"
                className="absolute right-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-sm font-bold shadow-md transition-colors"
              >
                Search
              </button>
            </form>

            {/* Quick Keyword Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs text-slate-400">
              <span>Popular:</span>
              {['B.E. First Year', 'DSE Engineering', 'B.Pharm', 'MBA', 'MCA', 'B.Arch', 'BCA', 'TFWS'].map((tag) => (
                <Link
                  key={tag}
                  to={`/courses?search=${encodeURIComponent(tag)}`}
                  className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/checker"
              className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-teal-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <CheckCircle2 className="w-5 h-5 text-slate-950" />
              <span>Launch Eligibility Checker</span>
            </Link>

            <Link
              to="/documents"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 flex items-center gap-2 transition-all"
            >
              <FileText className="w-5 h-5 text-teal-400" />
              <span>Document Checklist</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Independent Status Banner */}
        <DisclaimerBanner />

        {/* Quick Access Discipline Cards */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">Browse By Discipline</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Technical Fields Covered in Brochure 2026–27
              </h2>
            </div>
            <Link to="/courses" className="text-sm font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1">
              <span>View All 35+ Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={i}
                  to={cat.link}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">{cat.count}</p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-semibold text-teal-700 group-hover:text-teal-900">
                    <span>Explore programs</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Interactive Highlight Split Banner (Eligibility & Documents) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Eligibility Tool Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Rule-Based Eligibility Checker</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Check whether your qualification, subjects, minimum percentage (with the official rounding-off rule from Section 8(3)(a)), category relaxation, and entrance exams meet the exact criteria in the 2026–27 brochure.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span> Evaluates 45% General vs 40% Reserved (MS) criteria
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span> Validates subject groups (PCM / PCB / Maths at 10+2)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span> Direct Second Year & Working Professional checks
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                to="/checker"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow transition-colors"
              >
                <span>Check My Eligibility Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Document Preparation Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-teal-900/90 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-400/20 border border-teal-400/40 text-teal-200 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Interactive Document Checklist</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Generate an individualized document checklist categorized by candidate status: General, SC/ST, OBC, VJ/NT, EWS, TFWS, PwD, Defence, Orphan, or Working Professional. Includes required official proformas (A to W2).
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span> Caste Validity & Non-Creamy Layer (upto 31.03.2027)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span> EWS Proforma - V & TFWS Income &lt; ₹ 8 Lakh
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span> Print-friendly export for Facilitation Centre visits
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                to="/documents"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow transition-colors"
              >
                <span>Open Document Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Undergraduate Courses */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">Undergraduate Hub</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Undergraduate Degree Programs
              </h2>
            </div>
            <Link to="/undergraduate-courses" className="text-sm font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1">
              <span>View all UG programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ugCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Featured Postgraduate Courses */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">Postgraduate Hub</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Postgraduate Degree Programs
              </h2>
            </div>
            <Link to="/postgraduate-courses" className="text-sm font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1">
              <span>View all PG programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pgCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* CAP Process Roadmap Overview */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-100 border border-slate-200 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">Centralized Admission Process (CAP)</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Understanding the 6 Stages of CAP 2026–27
            </h2>
            <p className="text-sm text-slate-600">
              As defined under Rule 9 of the official brochure, every technical seat is filled through a transparent computerized merit process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">1</span>
              <h4 className="font-bold text-slate-900 text-base">Online Registration & Scrutiny</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Candidate registers online at cetcell.mahacet.org, uploads scanned documents (150+ dpi, max 1MB), and chooses E-Scrutiny or Physical FC verification.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">2</span>
              <h4 className="font-bold text-slate-900 text-base">Merit List & Grievance Period</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provisional merit list displayed. Candidate has the legal right to submit grievances with document corrections before the final merit list is frozen.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">3</span>
              <h4 className="font-bold text-slate-900 text-base">Choice Filling (Up to 300 Choices)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Category-wise seat matrix is released. Candidates submit up to 300 preferences in strictly decreasing priority order. Preference 1 is highest priority.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">4</span>
              <h4 className="font-bold text-slate-900 text-base">Auto-Freeze Rule</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If allotted Choice #1 in Round-I, it is <strong>Auto-Freezed</strong>. Candidate cannot participate in subsequent rounds and must accept seat.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">5</span>
              <h4 className="font-bold text-slate-900 text-base">Betterment / Self-Freeze</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If allotted choices 2–300, candidate can pay seat acceptance fee and choose <strong>Betterment</strong> to aim higher in next rounds while retaining current seat.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">6</span>
              <h4 className="font-bold text-slate-900 text-base">Institute Reporting & ABC Portal</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Report to college with originals, obtain system-generated confirmation receipt, and get enrolled on Academic Bank of Credits (ABC) within 8 days.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/cap-process"
              className="inline-flex items-center gap-2 text-teal-800 font-bold hover:text-teal-950 transition-colors"
            >
              <span>Read Full Centralized Admission Process (CAP) Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Brochure Sources & Official Links Card */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider">Primary Source of Truth</span>
            <h3 className="text-xl sm:text-2xl font-bold">State Common Entrance Test Cell Brochure 2026–27</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every admission criterion, category reservation, tie-breaking protocol, and document instruction presented on this website is mapped directly to the 122 pages of the official brochure published by the Commissioner of State CET Cell, Mumbai.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/disclaimer"
              className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm text-center shadow transition-colors"
            >
              View Brochure Page Index
            </Link>
            <a
              href="https://cetcell.mahacet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm text-center border border-slate-700 inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Official CET Cell</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
