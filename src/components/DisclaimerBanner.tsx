import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

interface DisclaimerBannerProps {
  compact?: boolean;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-900 flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-5xl mx-auto">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Independent Information Guide:</strong> Not affiliated with DTE Maharashtra or State CET Cell. Official admissions occur only at{' '}
            <a href="https://cetcell.mahacet.org" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-950 inline-flex items-center gap-0.5">
              cetcell.mahacet.org <ExternalLink className="w-3 h-3" />
            </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-300/80 rounded-xl p-4 my-6 text-sm text-amber-900 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-200/60 rounded-lg shrink-0 mt-0.5">
          <AlertTriangle className="w-5 h-5 text-amber-800" />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-amber-950 text-base">Independent Informational Resource — Not an Official Government Portal</h4>
          <p className="text-amber-900/90 leading-relaxed">
            This guide is an independent educational tool compiled directly from the official <em>Government of Maharashtra State Common Entrance Test Cell Information Brochure for Academic Year 2026–27</em>. It does not represent or act on behalf of the Directorate of Technical Education (DTE) or State CET Cell.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
            <span className="text-amber-800">Source: Official AY 2026–27 CET Cell Brochure</span>
            <span className="text-amber-400">•</span>
            <a
              href="https://cetcell.mahacet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-800 hover:text-teal-950 underline inline-flex items-center gap-1"
            >
              Official State CET Cell Portal <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-amber-400">•</span>
            <a
              href="https://dte.maharashtra.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-800 hover:text-teal-950 underline inline-flex items-center gap-1"
            >
              DTE Maharashtra Website <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
