import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { ExternalLink, Landmark, GraduationCap, ShieldCheck, Scale, FileText } from 'lucide-react';

export const OfficialLinks: React.FC = () => {
  const officialPortals = [
    {
      title: 'State Common Entrance Test Cell, Maharashtra',
      url: 'https://cetcell.mahacet.org',
      description: 'Official Competent Authority portal for MHT-CET, CAP admissions, option form submissions, provisional/final merit lists, and seat allotments for AY 2026–27.',
      authority: 'State CET Cell, Mumbai'
    },
    {
      title: 'Directorate of Technical Education (DTE), Maharashtra',
      url: 'https://dte.maharashtra.gov.in',
      description: 'Apex administrative department overseeing polytechnic, engineering, and technical institutions across Maharashtra State.',
      authority: 'Govt. of Maharashtra'
    },
    {
      title: 'Admission Regulating Authority (ARA)',
      url: 'https://maha-ara.org',
      description: 'Statutory authority responsible for approving admitted candidate lists and reviewing institutional quota compliance.',
      authority: 'Admission Regulating Authority'
    },
    {
      title: 'Fee Regulating Authority (FRA)',
      url: 'https://sssamiti.org',
      description: 'Determines and publishes the approved annual tuition and development fee structures for all unaided private technical colleges in Maharashtra.',
      authority: 'Fee Regulating Authority'
    },
    {
      title: 'All India Council for Technical Education (AICTE)',
      url: 'https://www.aicte-india.org',
      description: 'National regulatory body for engineering, management, architecture, planning, and hotel management education in India.',
      authority: 'National Regulator'
    },
    {
      title: 'Pharmacy Council of India (PCI)',
      url: 'https://www.pci.nic.in',
      description: 'Statutory regulatory body for pharmacy colleges, B.Pharm, D.Pharm, and Pharm.D approval under Section 12 of the Pharmacy Act, 1948.',
      authority: 'PCI India'
    },
    {
      title: 'Council of Architecture (CoA)',
      url: 'https://www.coa.gov.in',
      description: 'Statutory council governing architectural education, B.Arch approvals, NATA examination, and professional registration in India.',
      authority: 'Council of Architecture'
    },
    {
      title: 'National Testing Agency (NTA)',
      url: 'https://nta.ac.in',
      description: 'Conducts national entrance examinations including JEE (Main), NEET (UG), GPAT, CMAT, and CUET (UG).',
      authority: 'NTA New Delhi'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Important Official Links' }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
          <Landmark className="w-3.5 h-3.5" />
          <span>Verified Government & Regulatory Portals</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Important Official Admission Portals
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Access the authorized government websites and central regulatory authorities for official application submission, fee approvals, institution verification, and merit lists.
        </p>
      </div>

      <DisclaimerBanner compact={true} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {officialPortals.map((portal, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-teal-300 transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                {portal.authority}
              </span>
              <h3 className="font-bold text-slate-900 text-base">{portal.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{portal.description}</p>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
              >
                <span>Visit {portal.url.replace('https://', '')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
