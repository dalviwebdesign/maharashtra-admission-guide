import React from 'react';
import { maharashtraCandidatureTypes, otherCandidatureTypes, universitiesJurisdiction } from '../data/candidatureTypes';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { Users, Building, ShieldCheck, MapPin, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CandidatureTypes: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Rules & CAP' }, { label: 'Maharashtra Candidature Types' }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <Users className="w-3.5 h-3.5" />
          <span>Rule 5 · State CET Cell Brochure 2026–27</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Maharashtra Candidature Types & Domicile Rules
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Detailed guide to Maharashtra State Candidature (Type A to E), Home University vs Outside Home University determination, All India candidature, Minority seats, and J&K/Ladakh migrant provisions.
        </p>
      </div>

      <DisclaimerBanner compact={true} />

      {/* Maharashtra State Types A to E */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Maharashtra State Candidature (Type A, B, C, D, E)
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            A candidate can claim <strong>ONLY ONE</strong> type of Maharashtra State Candidature Type (Rule 5(1)).
          </p>
        </div>

        <div className="space-y-4">
          {maharashtraCandidatureTypes.map((cand) => (
            <div key={cand.type} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center text-xs">
                    {cand.type.replace('Type-', '')}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">{cand.title}</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                  {cand.sourceRef}
                </span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-slate-700">
                <p>
                  <strong>Eligibility Criterion:</strong> {cand.eligibilityDescription}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-teal-700">
                    Home University (HU) Determination:
                  </span>
                  <p className="text-slate-700">{cand.homeUniversityDetermination}</p>
                </div>

                <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">
                    Required Documentary Evidence (Rule 17):
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 text-teal-900">
                    {cand.documentsRequired.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                  {cand.proforma && (
                    <span className="inline-block mt-1 font-mono font-bold text-[10px] text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                      Official Form: {cand.proforma}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Universities and District Jurisdictions Table */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <MapPin className="w-5 h-5 text-teal-600" />
          <div>
            <h2 className="text-xl font-bold text-slate-900">Jurisdiction of Home Universities in Maharashtra</h2>
            <p className="text-xs text-slate-500">Official Table 4.1 from Brochure Page 5</p>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          For non-autonomous government and unaided non-minority institutions, <strong>70% seats are reserved for Home University (HU)</strong> candidates and <strong>30% for Other than Home University (OHU)</strong> candidates based on the district where the candidate passed the qualifying examination (HSC/Diploma).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 w-12 text-center">Sr.</th>
                <th className="p-3 w-1/2">Home University</th>
                <th className="p-3">Districts under University Jurisdiction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {universitiesJurisdiction.map((uni) => (
                <tr key={uni.srNo} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 text-center font-bold text-slate-500">{uni.srNo}</td>
                  <td className="p-3 font-semibold text-slate-900">{uni.universityName}</td>
                  <td className="p-3 text-slate-600">{uni.districts.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Other Candidature Types */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            All India, Minority, NRI, and J&K/Ladakh Migrant Candidature
          </h2>
          <p className="text-xs text-slate-600 mt-1">Rules 5(2) to 5(6) from Brochure Pages 9 & 14</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherCandidatureTypes.map((cand) => (
            <div key={cand.code} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs leading-relaxed flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base">{cand.name}</h3>
                  <span className="text-[10px] font-mono text-slate-400">{cand.sourceRef}</span>
                </div>
                <p className="text-slate-600">{cand.description}</p>
                <div className="space-y-1 pt-2">
                  <span className="font-bold text-slate-800 block text-[11px]">Provisions & Regulations:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                    {cand.rulesAndProvisions.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
