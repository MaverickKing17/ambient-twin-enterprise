
import React from 'react';
import { ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm px-8 py-12 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <ShieldCheck className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">Ambient Twin Security</span>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-tighter mb-1">
              <ShieldCheck className="w-3 h-3" />
              SOC 2 TYPE II COMPLIANT
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
              Enterprise-grade encryption and PII protection for GTA homeowner data. Verified 2024 Audit Status.
            </p>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Toronto Operations</h5>
          <ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
              181 Bay St, Toronto, ON M5J 2T3
            </li>
            <li>Enbridge HER+ Authorized Portal</li>
            <li>HRAI Certified Platform Partner</li>
            <li>Greater Toronto Support: 24/7</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Legal & Compliance</h5>
          <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy (Ontario PIPA)</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Data Processing Addendum</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors text-emerald-500">Service Uptime: 99.99%</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Industry Links</h5>
          <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <li className="flex items-center gap-1">
              <a href="https://www.enbridgegas.com/residential/rebates-energy-conservation/home-efficiency-rebate-plus" target="_blank" className="hover:text-blue-600 flex items-center gap-1.5">
                Enbridge HER+ Portal <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">ESA Compliance Checker</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">TSSA License Verification</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">NRCAN Directory Integration</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          © 2024 Ambient Twin Inc. • Toronto • North York • Etobicoke • Mississauga
        </p>
      </div>
    </footer>
  );
};

export default Footer;
