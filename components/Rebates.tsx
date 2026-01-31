
import React from 'react';
import { Award, FileText, CheckCircle2, Clock, Calculator, Download, AlertCircle, ChevronDown } from 'lucide-react';

const Rebates: React.FC = () => {
  const applications = [
    { name: 'Thompson Residence', address: 'Etobicoke', amount: 7100, stage: 'Final Review', completion: 85, alert: false },
    { name: 'Garcia Home', address: 'North York', amount: 10600, stage: 'Check in Progress', completion: 60, alert: true },
    { name: 'Kaur Home Upgrade', address: 'Brampton', amount: 5000, stage: 'First Check', completion: 20, alert: false },
    { name: 'Lee Heat Pump', address: 'Scarborough', amount: 7100, stage: 'Paid', completion: 100, alert: false },
  ];

  const handleSubmitBatch = () => {
    alert("Batch submitted to Enbridge Portal successfully.");
  };

  const handleStartApplication = () => {
    alert("Starting new rebate application flow for Toronto region...");
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Home Energy Rebates</h1>
          <p className="text-slate-500 dark:text-slate-400">Track energy savings and rebates for Toronto homes.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 px-6 py-3 rounded-2xl">
            <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1 tracking-widest">Total Savings Hub</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">$142,500 CAD</div>
          </div>
          <button 
            onClick={handleSubmitBatch}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-xl shadow-blue-200 dark:shadow-none hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            Submit Batch for Payment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-white">Active Rebates</h3>
              <div className="flex items-center gap-2">
                 <span className="text-[10px] font-bold text-slate-400 uppercase">Year: 2024</span>
              </div>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {applications.map((app, i) => (
                <div key={i} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all group">
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                         <div className={`p-3 rounded-2xl ${app.completion === 100 ? 'bg-green-50 dark:bg-green-900/20 text-green-600' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600'}`}>
                            <Award className="w-6 h-6" />
                         </div>
                         <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{app.name}</div>
                            <div className="text-xs text-slate-500">{app.address} • {app.stage}</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-lg font-bold text-slate-900 dark:text-white">${app.amount.toLocaleString()}</div>
                         <div className="text-[10px] font-bold text-emerald-500 uppercase">Savings Ready</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                         <div className={`h-full transition-all duration-1000 ${app.alert ? 'bg-amber-500' : 'bg-blue-600'}`} style={{ width: `${app.completion}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-400">{app.completion}%</span>
                   </div>
                   {app.alert && (
                     <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 rounded-xl flex items-center gap-2 text-amber-700 dark:text-amber-400 text-[10px] font-bold">
                        <AlertCircle className="w-3 h-3" />
                        MISSING RECEIPT: We need proof of attic insulation.
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                 <Calculator className="text-blue-400 w-5 h-5" />
                 Rebate Estimator
              </h3>
              <div className="space-y-4">
                 <div className="relative p-4 bg-white/5 rounded-2xl border border-white/10 group">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Heating System Type</label>
                    <select className="appearance-none bg-transparent border-none text-sm font-semibold w-full focus:ring-0 cursor-pointer pr-10 outline-none">
                       <option className="bg-slate-900 text-white">Efficient Heat Pump</option>
                       <option className="bg-slate-900 text-white">Standard Heat Pump</option>
                       <option className="bg-slate-900 text-white">Furnace + AC</option>
                    </select>
                    <ChevronDown className="absolute right-4 bottom-4 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-white transition-colors" />
                 </div>
                 <div className="relative p-4 bg-white/5 rounded-2xl border border-white/10 group">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Home Insulation Level</label>
                    <select className="appearance-none bg-transparent border-none text-sm font-semibold w-full focus:ring-0 cursor-pointer pr-10 outline-none">
                       <option className="bg-slate-900 text-white">Needs Work</option>
                       <option className="bg-slate-900 text-white">Fair</option>
                       <option className="bg-slate-900 text-white">Great</option>
                    </select>
                    <ChevronDown className="absolute right-4 bottom-4 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-white transition-colors" />
                 </div>
                 <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">$7,100</div>
                    <p className="text-[10px] text-slate-400 font-medium">Estimated Energy Rebate</p>
                    <button 
                      onClick={handleStartApplication}
                      className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                    >
                      Start Application
                    </button>
                 </div>
              </div>
           </div>

           <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Needed Paperwork</h4>
              <div className="space-y-3">
                 {[
                    { label: 'First Energy Audit', ok: true },
                    { label: 'Safety Permit', ok: true },
                    { label: 'Home Size Check', ok: false },
                    { label: 'Final Verification', ok: false },
                    { label: 'Homeowner ID & Bill', ok: true },
                 ].map((doc, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className={`p-1 rounded-full ${doc.ok ? 'bg-green-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                         <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className={`text-[11px] font-medium ${doc.ok ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}`}>{doc.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Rebates;
