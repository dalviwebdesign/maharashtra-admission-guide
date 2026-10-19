import React from 'react';
import { capProcessSteps, capRoundsDetails, capVacancyStages } from '../data/capProcess';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { Layers, ShieldCheck, AlertCircle, RefreshCw, CheckCircle, Ban, Undo2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CapProcess: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Rules & CAP' }, { label: 'CAP Admission Process' }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <Layers className="w-3.5 h-3.5" />
          <span>Rules 9, 10, 11 & 15 · State CET Cell Brochure 2026–27</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Centralized Admission Process (CAP) Walkthrough
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          The complete official roadmap of Maharashtra CAP admissions: online option filling (up to 300 choices), Auto-Freeze protocols, Betterment dynamics across Rounds I to IV, seat acceptance fees, document scrutiny, and refund rules.
        </p>
      </div>

      <DisclaimerBanner compact={true} />

      {/* Auto-Freeze vs Betterment Critical Matrix */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Rule 9(2)-(3) & Rule 11</span>
          <h2 className="text-xl font-bold text-slate-900">
            Crucial Auto-Freeze & Betterment Rules by CAP Round
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          {capRoundsDetails.map((r) => (
            <div key={r.round} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="font-bold text-slate-900 text-base">{r.round}</h3>
                <span className="text-[10px] text-slate-500 font-medium">Eligible: {r.eligibility}</span>
              </div>

              <div className="space-y-1.5">
                <span className="font-bold text-rose-700 block flex items-center gap-1 text-[11px]">
                  <Ban className="w-3.5 h-3.5" />
                  Auto-Freeze Trigger:
                </span>
                <p className="text-slate-700">{r.autoFreezeRule}</p>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="font-bold text-emerald-700 block flex items-center gap-1 text-[11px]">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Betterment Option:
                </span>
                <p className="text-slate-700">{r.bettermentRule}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sequential Stages of CAP */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            The 6 Comprehensive Stages of CAP (Rule 9(1))
          </h2>
          <p className="text-xs text-slate-600 mt-1">Official procedure followed from application to final institute reporting</p>
        </div>

        <div className="space-y-4">
          {capProcessSteps.map((st) => (
            <div key={st.step} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center text-xs shrink-0">
                    {st.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{st.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{st.shortDesc}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 shrink-0">
                  {st.brochureSource}
                </span>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-slate-700">
                <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider text-slate-500">
                  Standard Process:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {st.detailedProcess.map((proc, i) => (
                    <li key={i}>{proc}</li>
                  ))}
                </ul>

                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 space-y-1 mt-2">
                  <span className="font-bold text-teal-950 block text-[11px]">
                    Essential Admission Rules to Remember:
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 text-teal-900 text-[11px]">
                    {st.keyRules.map((kr, i) => (
                      <li key={i}>{kr}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Allowed Rectifications at Scrutiny / ARC (Rule 9(3)(e)) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Rule 9(3)(e) · Brochure Page 75</span>
          <h2 className="text-xl font-bold text-slate-900">
            Errors Entitled to Rectification at ARC Scrutiny
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Apart from the specific errors below, NO OTHER changes or rectifications are permitted after confirmation of the form.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <span className="text-teal-600 font-bold">1.</span>
            <span>Change of gender from male to female and vice-versa.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <span className="text-teal-600 font-bold">2.</span>
            <span>Error while entering marks in qualifying exam or CET (Provided that merit number increase is NOT permitted).</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <span className="text-teal-600 font-bold">3.</span>
            <span>Conversion from Reserved to General Category upon failure to produce Caste Certificate / Validity / Non-Creamy Layer (Change from General to Reserved is STRICTLY PROHIBITED).</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <span className="text-teal-600 font-bold">4.</span>
            <span>Removal of Minority, Disability, Defence, Orphan, or TFWS status due to lack of required documentation.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <span className="text-teal-600 font-bold">5.</span>
            <span>Change in Type of Candidature for Maharashtra State candidates.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <span className="text-teal-600 font-bold">6.</span>
            <span>Change in the Home University (HU) jurisdiction.</span>
          </div>
        </div>
      </section>

      {/* Cancellation of Admission & Refund Rules (Rule 15) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Undo2 className="w-5 h-5 text-teal-600" />
          <div>
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Rule 15 · Brochure Page 90</span>
            <h2 className="text-xl font-bold text-slate-900">Cancellation of Admission & Fee Refund Regulations</h2>
          </div>
        </div>

        <div className="space-y-3 text-xs leading-relaxed text-slate-700">
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1 text-emerald-950">
            <span className="font-bold text-sm block">Cancellation on or before Cut-Off Date with Full Refund:</span>
            <p>
              If a candidate cancels admission on or before the last day for cancellation of seats with full fee refund, the institute <strong>shall refund the entire fee after deduction of ₹ 1,000/- (Rupees One Thousand only) towards processing charges</strong> and <strong>return all original documents within two days</strong> of submission of the cancellation request (Rule 15(a)).
            </p>
          </div>

          <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 space-y-1 text-rose-950">
            <span className="font-bold text-sm block">Cancellation after Cut-Off Date:</span>
            <p>
              Candidate shall not be entitled to any refund of fees except Security Deposit and Caution Money Deposit if cancellation is effected after the prescribed cut-off date (Rule 15(b)).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-slate-800">
            <span className="font-bold text-sm block">Prohibition Against Withholding Original Certificates:</span>
            <p>
              <strong>Rule 15(c):</strong> No institution possessing custody of certificates, diplomas, or degrees shall refuse to return such original documents with a view to induce or compel a person to pay fees for subsequent years. Institutions are strictly <strong>prohibited from recovering fees for subsequent years</strong> (Rule 15(d)).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
