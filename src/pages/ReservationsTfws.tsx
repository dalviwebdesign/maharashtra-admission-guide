import React from 'react';
import { reservedCategories, specialReservations, seatDistributionSummary } from '../data/reservations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { Percent, ShieldCheck, HeartHandshake, Building, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReservationsTfws: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Rules & CAP' }, { label: 'Reservations & TFWS' }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <Percent className="w-3.5 h-3.5" />
          <span>Section 7(6) & Schedule I & II</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Reservation Policies & Tuition Fee Waiver Scheme (TFWS)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Comprehensive guide to Maharashtra’s 60% constitutional reservation quotas, 10% EWS, 5% TFWS tuition waiver, Defence priority order, PwD benchmark categories, and seat allocation matrices.
        </p>
      </div>

      <DisclaimerBanner compact={true} />

      {/* 60% Constitutional Category Reservation Table */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Rule 7(6)(a) · Brochure Page 13</span>
              <h2 className="text-xl font-bold text-slate-900">
                1. Statutory Category-wise Reservation Quota (60.0%)
              </h2>
            </div>
            <span className="px-3 py-1 rounded-lg bg-teal-50 text-teal-800 font-extrabold text-sm border border-teal-200">
              Total: 60.0%
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Applicable strictly to candidates belonging to Maharashtra State coming under CAP.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 w-12 text-center">Sr.</th>
                <th className="p-3">Reserved Category</th>
                <th className="p-3 w-24 text-center">Code</th>
                <th className="p-3 w-28 text-center">% of Seats</th>
                <th className="p-3">Mandatory Documents Required (Rule 17)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reservedCategories.map((cat) => (
                <tr key={cat.srNo} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 text-center font-bold text-slate-500">{cat.srNo}</td>
                  <td className="p-3 font-semibold text-slate-900">
                    {cat.category}
                    {cat.isSubJudice && (
                      <span className="block text-[11px] font-normal text-amber-700 mt-0.5">
                        *Subject to decision of Hon’ble High Court in related Writ Petitions
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-center font-mono font-bold text-slate-700">{cat.code}</td>
                  <td className="p-3 text-center font-extrabold text-teal-700 text-sm">{cat.percentage.toFixed(1)}%</td>
                  <td className="p-3 text-slate-600">
                    <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                      {cat.requiredDocuments.map((doc, idx) => (
                        <li key={idx}>{doc}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Mandatory Rule 9(3)(e)(iii):</strong> If a reserved class candidate fails to submit the Caste Validity Certificate or Non-Creamy Layer Certificate (valid up to 31st March 2027) during verification, their candidature will be automatically converted to General/Open Category.
          </span>
        </div>
      </section>

      {/* Special Schemes & Quotas (EWS, TFWS, Defence, PwD, Orphan, Female) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            2. Special Quotas & Fee Waiver Schemes
          </h2>
          <p className="text-xs text-slate-600 mt-1">EWS, TFWS, Defence, PwD, Orphan, and Female Reservations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialReservations.map((sch) => (
            <div key={sch.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <h3 className="font-bold text-slate-900 text-base">{sch.name}</h3>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
                    {sch.percentageOrQuota}
                  </span>
                </div>

                <p className="text-slate-600">{sch.description}</p>

                <div className="space-y-1 pt-1">
                  <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-slate-500">
                    Eligibility Conditions:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    {sch.eligibility.map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-800 block text-[11px]">Required Documents:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                    {sch.documents.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  {sch.proforma && (
                    <span className="inline-block mt-1 font-mono font-bold text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      {sch.proforma}
                    </span>
                  )}
                </div>
              </div>

              <span className="text-[10px] text-slate-400 font-mono block pt-2 border-t border-slate-100">
                {sch.sourceRef}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Seat Distribution Across College Types (Schedule I & II) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-teal-600" />
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Schedules I & II · Brochure Pages 98–105</span>
              <h2 className="text-xl font-bold text-slate-900">
                3. Seat Allocation Matrix by Institution Type
              </h2>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Type of Institution</th>
                <th className="p-3">Level</th>
                <th className="p-3">Maharashtra State Seats</th>
                <th className="p-3 text-center">All India Seats</th>
                <th className="p-3 text-center">Institute Quota</th>
                <th className="p-3 text-center">Minority Quota</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {seatDistributionSummary.map((sd, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-semibold text-slate-900 max-w-xs">{sd.institutionType}</td>
                  <td className="p-3 text-slate-600">{sd.level}</td>
                  <td className="p-3 text-slate-700 font-medium">{sd.msSeats}</td>
                  <td className="p-3 text-center font-semibold text-slate-800">{sd.allIndiaSeats}</td>
                  <td className="p-3 text-center font-semibold text-slate-800">{sd.instituteQuota}</td>
                  <td className="p-3 text-center font-semibold text-slate-800">{sd.minorityQuota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
