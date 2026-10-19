import React, { useState, useMemo } from 'react';
import { brochureSourceMapping, SourceMappingEntry } from '../data/sourceMapping';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { ShieldAlert, BookOpen, Search, ExternalLink, Filter } from 'lucide-react';

export const DisclaimerSources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Rule', 'Eligibility', 'Reservation', 'CAP', 'Schedule', 'Proforma'];

  const filteredEntries = useMemo(() => {
    return brochureSourceMapping.filter(entry => {
      const matchesSearch = searchTerm.trim() === '' ||
        entry.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.officialReference.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = selectedCategory === 'All' || entry.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Disclaimer & Sources' }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Complete Source Attribution & Legal Disclaimers</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Official Brochure Sources & Legal Disclaimer
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Verify every admission rule, percentage, and eligibility criterion directly against the printed page numbers of the official State CET Cell Information Brochure for Academic Year 2026–27.
        </p>
      </div>

      <DisclaimerBanner />

      {/* Full Legal Disclaimer Statement */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 text-xs text-slate-700 leading-relaxed">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          <h2 className="text-lg font-bold text-slate-900">Official Non-Affiliation & Advisory Notice</h2>
        </div>

        <p>
          1. <strong>Independent Informational Platform:</strong> The website <em>Maharashtra Admission Guide</em> (accessible at <code>https://admissionguide.dalvihub.com</code>) is an independently created educational guide. It is NOT owned, operated, affiliated with, endorsed, or authorized by the Government of Maharashtra, Directorate of Technical Education (DTE), Admission Regulating Authority (ARA), or State Common Entrance Test Cell (CET Cell).
        </p>

        <p>
          2. <strong>No Official Registration or Allotment:</strong> This website does not process admission forms, collect official application fees, assign merit numbers, or make seat allotments. All official admission actions must be executed exclusively through candidate login on the official State CET Cell portal: <a href="https://cetcell.mahacet.org" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">https://cetcell.mahacet.org</a>.
        </p>

        <p>
          3. <strong>Primary Source of Truth:</strong> The rules, minimum marks, subject combinations, reservations, schedules, and proformas presented here are sourced from the <em>Information Brochure for Admission to Full Time Professional Under Graduate and Post Graduate Technical Courses for Academic Year 2026–27</em>, published under the powers conferred by the Maharashtra Act No. XXVIII of 2015.
        </p>

        <p>
          4. <strong>Updates and Gazette Changes:</strong> Admission rules, SEBC reservation status, fees, and examination dates are subject to official Government Resolutions (GRs), High Court/Supreme Court orders, and official notices issued by the Competent Authority from time to time. In case of any conflict or ambiguity between this website and the official Gazette / Brochure, the official English version of the Government Gazette shall prevail (Rule 18(c)(e)).
        </p>
      </section>

      {/* Searchable Brochure Source Mapping Table */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Brochure Content-Source Mapping Index</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Distinguishing Printed Page Number in Document from PDF Viewer Page Number
            </p>
          </div>
          <a
            href="https://cetcell.mahacet.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 shrink-0"
          >
            <span>Visit Official State CET Cell</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search mapping table by topic, rule, or section..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500/30"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mapping Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Topic / Subject</th>
                <th className="p-3 w-28">Section / Rule</th>
                <th className="p-3 w-24 text-center">Printed Page</th>
                <th className="p-3 w-24 text-center">PDF Viewer Page</th>
                <th className="p-3">Brochure Summary & Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEntries.map((entry, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-semibold text-slate-900">
                    <span className="block">{entry.topic}</span>
                    <span className="text-[10px] text-teal-700 font-medium">{entry.category}</span>
                  </td>
                  <td className="p-3 font-mono font-bold text-slate-700">{entry.section}</td>
                  <td className="p-3 text-center font-extrabold text-teal-800">
                    p. {entry.printedPage}
                  </td>
                  <td className="p-3 text-center font-mono text-slate-500">
                    p. {entry.pdfViewerPage}
                  </td>
                  <td className="p-3 text-slate-600 leading-relaxed">
                    <p>{entry.summary}</p>
                    <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">{entry.officialReference}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
