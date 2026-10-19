import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ExternalLink, ShieldAlert, BookOpen, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm mt-20">
      {/* Legal Disclaimer Box */}
      <div className="bg-slate-950/70 border-b border-slate-800/80 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-slate-100 text-sm">
                Important Disclaimer: Independent Educational Guide
              </p>
              <p className="text-slate-400 leading-relaxed">
                <strong>Maharashtra Admission Guide (admissionguide.dalvihub.com)</strong> is an independent informational and student-guidance website. It is <strong>NOT</strong> the official portal of the Government of Maharashtra, the Directorate of Technical Education (DTE), or the State Common Entrance Test Cell (CET Cell).
              </p>
              <p className="text-slate-400 leading-relaxed">
                All data, eligibility criteria, minimum marks, subject combinations, reservations, and admission rules are cited from the official <em>Government of Maharashtra State Common Entrance Test Cell Information Brochure for Academic Year 2026–27</em>. Candidates and parents must cross-verify all details, official schedules, and notifications directly from the official website:{' '}
                <a
                  href="https://cetcell.mahacet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline font-semibold inline-flex items-center gap-1"
                >
                  cetcell.mahacet.org <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Maharashtra Admission Guide
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Helping students and parents across Maharashtra navigate technical professional degree admissions for Academic Year 2026–27 with verified rules, eligibility screening, and document checklists.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                Brochure AY 2026–27
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-slate-800 text-teal-300 rounded border border-slate-700">
                Rule 7 to 17 Covered
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                Proformas A–W2
              </span>
            </div>
          </div>

          {/* Quick Courses */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Course Hubs</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/courses" className="hover:text-teal-300 transition-colors">
                  All Courses (35+ Programs)
                </Link>
              </li>
              <li>
                <Link to="/undergraduate-courses" className="hover:text-teal-300 transition-colors">
                  Undergraduate (B.E, B.Pharm, B.Arch)
                </Link>
              </li>
              <li>
                <Link to="/postgraduate-courses" className="hover:text-teal-300 transition-colors">
                  Postgraduate (MBA, MCA, M.Tech)
                </Link>
              </li>
              <li>
                <Link to="/integrated-courses" className="hover:text-teal-300 transition-colors">
                  Integrated 5-Year Dual Degrees
                </Link>
              </li>
              <li>
                <Link to="/direct-second-year" className="hover:text-teal-300 transition-colors">
                  Direct Second Year (DSE / Lateral)
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Rules */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Tools & Guidance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/checker" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-teal-300 transition-colors">
                  Document Preparation Checklist
                </Link>
              </li>
              <li>
                <Link to="/candidature-types" className="hover:text-teal-300 transition-colors">
                  Candidature Types (Type A to E)
                </Link>
              </li>
              <li>
                <Link to="/reservations-tfws" className="hover:text-teal-300 transition-colors">
                  Reservations (60%) & TFWS (5%)
                </Link>
              </li>
              <li>
                <Link to="/cap-process" className="hover:text-teal-300 transition-colors">
                  CAP Rounds & Auto-Freeze Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Official Portals</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://cetcell.mahacet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 inline-flex items-center gap-1 transition-colors"
                >
                  State CET Cell Maharashtra <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dte.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 inline-flex items-center gap-1 transition-colors"
                >
                  DTE Maharashtra <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://maha-ara.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 inline-flex items-center gap-1 transition-colors"
                >
                  Admission Regulating Authority (ARA) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://sssamiti.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 inline-flex items-center gap-1 transition-colors"
                >
                  Fee Regulating Authority (FRA) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link to="/disclaimer" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                  Brochure Source Mapping
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Creator & Academic Leadership Credit */}
        <div className="pt-8 mt-8 border-t border-slate-800">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3.5 max-w-full">
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-slate-200 text-sm sm:text-base tracking-tight leading-snug">
                  <span>Website Launch: 20 October 2026 | </span>
                  <strong className="font-bold text-white">Created by Mahesh Suresh Dalvi</strong>
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Registrar, K.C. College of Engineering and Management Studies and Research, Thane
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-teal-300 text-xs font-semibold shadow-xs">
                <span>Higher & Technical Education Guidance Initiative</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            <span>© 2026–2027 Maharashtra Admission Guide. Hosted at <strong>admissionguide.dalvihub.com</strong></span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer & Sources</Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
