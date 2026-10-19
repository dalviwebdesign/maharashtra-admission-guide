import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { GraduationCap, ShieldCheck, Heart, Code2, BookOpen, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'About This Website' }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Independent Educational Project</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          About Maharashtra Admission Guide
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Built to make complex technical admission rules transparent, understandable, and accessible to every student and parent across Maharashtra.
        </p>
      </div>

      <DisclaimerBanner />

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Why This Guide Was Created</h2>
          <p>
            Every academic year, more than 400,000 students in Maharashtra seek admission to undergraduate and postgraduate technical programs such as Engineering (B.E./B.Tech), Pharmacy (B.Pharm/Pharm.D), Architecture (B.Arch), Management (MBA/BBA), Computer Applications (MCA/BCA), Planning, Design, and Hotel Management.
          </p>
          <p>
            The official Information Brochure published by the State Common Entrance Test Cell is a legal document spanning more than 120 pages. Many students miss out on fee waivers (such as TFWS), make errors while selecting Home University categories, or face seat forfeiture due to misunderstanding the complex <strong>Auto-Freeze</strong> and <strong>Betterment</strong> rules.
          </p>
          <p>
            <strong>Maharashtra Admission Guide</strong> was engineered to bridge this information gap by synthesizing the official rules into interactive screening tools, clear checklists, and course-specific guides.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Our Core Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 text-sm block">100% Brochure-Sourced</span>
              <p className="text-slate-600">No invented numbers or speculative rules. Every criterion is backed by an exact printed page reference from the official AY 2026–27 brochure.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 text-sm block">Complete Privacy</span>
              <p className="text-slate-600">All eligibility calculations and document checklists operate 100% locally in your web browser. No personal data is stored on servers.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 text-sm block">Free & Open</span>
              <p className="text-slate-600">Built as a public community service without paywalls, fees, or deceptive affiliate advertising.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Project Leadership & Author</h2>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-slate-900 text-sm">
                <span>Website Launch: 20 October 2026 | </span>
                <strong className="font-bold">Created by Mahesh Suresh Dalvi</strong>
              </h3>
              <p className="text-slate-600 text-xs">
                Registrar, K.C. College of Engineering and Management Studies and Research, Thane
              </p>
              <p className="text-slate-500 text-[11px] pt-1 leading-relaxed">
                Conceptualized and maintained as an independent student-guidance initiative to assist aspirants across Maharashtra in navigating technical admissions transparently.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Platform & Hosting</h2>
          <p className="text-xs text-slate-600">
            Hosted as a resilient, client-side static web application on GitHub Pages and served securely via custom domain at <strong>https://admissionguide.dalvihub.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
