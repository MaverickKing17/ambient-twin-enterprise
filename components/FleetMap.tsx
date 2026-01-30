
import React, { useState } from 'react';
import { 
  MapPin, Info, Navigation, Search, Layers, Compass, 
  Plus, Minus, Navigation2, MoreVertical, Star, 
  TrendingUp, Wrench, CheckCircle2, AlertCircle 
} from 'lucide-react';

const FleetMap: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<any>(null);

  const locations = [
    { id: 1, name: 'North York Job', area: 'Willowdale', address: '5160 Yonge St, North York', status: 'Optimal', lat: '43.7615', lng: '79.4111', efficiency: 94, tech: 'Marcus V.' },
    { id: 2, name: 'Etobicoke Condo', area: 'The Kingsway', address: '2900 Bloor St W, Etobicoke', status: 'Maintenance', lat: '43.6475', lng: '79.5229', efficiency: 82, tech: 'Leo S.' },
    { id: 3, name: 'Scarborough Home', area: 'Agincourt', address: '2330 Kennedy Rd, Scarborough', status: 'Optimal', lat: '43.7853', lng: '79.2785', efficiency: 91, tech: 'Sarah L.' },
    { id: 4, name: 'Downtown Unit', area: 'Harbourfront', address: '10 York St, Toronto', status: 'Installing', lat: '43.6395', lng: '79.3813', efficiency: 0, tech: 'Dave H.' },
    { id: 5, name: 'Mississauga Home', area: 'Port Credit', address: '125 Lakeshore Rd E, Mississauga', status: 'Optimal', lat: '43.5552', lng: '79.5855', efficiency: 95, tech: 'Marcus V.' },
  ];

  const MarkerColor = (status: string) => {
    switch (status) {
      case 'Optimal': return 'bg-emerald-500 shadow-emerald-500/50';
      case 'Maintenance': return 'bg-rose-500 shadow-rose-500/50';
      case 'Installing': return 'bg-blue-500 shadow-blue-500/50';
      default: return 'bg-slate-500 shadow-slate-500/50';
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Top Search Bar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-6">
        <div className="flex items-center bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden ring-1 ring-black/5">
          <div className="pl-5 pr-3">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search home systems, addresses, or team..." 
            className="flex-1 py-4 bg-transparent border-none focus:ring-0 text-sm font-medium dark:text-white dark:placeholder:text-slate-500 outline-none"
          />
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden flex">
        {/* Map Canvas */}
        <div className="flex-1 relative bg-[#e5e3df] dark:bg-[#242f3e] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-20">
             <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#aadaff] dark:bg-[#17263c]"></div>
             <div className="absolute inset-0 bg-[linear-gradient(#cfd2d1_1px,transparent_1px),linear-gradient(90deg,#cfd2d1_1px,transparent_1px)] [background-size:100px_100px]"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="text-slate-400/20 dark:text-white/5 font-black text-9xl tracking-tighter select-none rotate-[-15deg]">
                TORONTO AREA
             </div>
          </div>

          {/* Markers */}
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className="absolute transition-all duration-500 hover:z-50"
              style={{ 
                top: `${parseInt(loc.lat.slice(-2)) + 10}%`, 
                left: `${parseInt(loc.lng.slice(-2)) - 10}%` 
              }}
            >
              <button onClick={() => setSelectedLoc(loc)} className="group relative flex flex-col items-center">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-300 group-hover:scale-125 ${MarkerColor(loc.status)}`}>
                    <MapPin className="w-4 h-4 text-white" />
                 </div>
                 <div className="mt-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-[10px] font-black dark:text-white">{loc.name}</span>
                 </div>
              </button>
            </div>
          ))}

          {/* Selected Location Card */}
          {selectedLoc && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 w-full max-w-lg px-6">
               <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-white/5 overflow-hidden">
                  <div className="p-8">
                     <h3 className="text-2xl font-black text-slate-900 dark:text-white">{selectedLoc.name}</h3>
                     <p className="text-slate-500 text-sm font-medium">{selectedLoc.address}</p>
                     <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl">
                           <div className="text-[10px] font-black text-slate-400 uppercase">Efficiency</div>
                           <div className="text-xl font-black">{selectedLoc.efficiency}%</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl">
                           <div className="text-[10px] font-black text-slate-400 uppercase">Assigned To</div>
                           <div className="text-xl font-black">{selectedLoc.tech}</div>
                        </div>
                     </div>
                     <button className="w-full mt-6 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest">Connect to System</button>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Info Panel */}
        <div className="w-96 bg-white dark:bg-[#0b0f1a] border-l border-slate-200 dark:border-white/5 flex flex-col z-10">
           <div className="p-8 border-b border-slate-100 dark:border-white/5">
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">Service Updates</h2>
              <p className="text-xs text-slate-500 font-medium">Tracking 422 home systems across Toronto.</p>
           </div>
           
           <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              <div className="space-y-4">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <TrendingUp className="w-3 h-3 text-blue-500" />
                   Busy Areas
                 </h4>
                 <div className="space-y-4">
                    {[
                      { area: 'North York', count: 142, trend: '+5' },
                      { area: 'Etobicoke', count: 88, trend: '+2' },
                      { area: 'Scarborough', count: 104, trend: '-1' },
                      { area: 'Downtown', count: 56, trend: '+8' },
                      { area: 'Mississauga', count: 32, trend: '0' },
                    ].map((area, i) => (
                      <div key={i} className="flex items-center justify-between group">
                         <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{area.area}</span>
                            <span className="text-[10px] text-slate-500">{area.count} active systems</span>
                         </div>
                         <div className={`text-[10px] font-black px-2 py-1 rounded-lg ${area.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-500/10 text-slate-400'}`}>
                            {area.trend}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                 <h4 className="text-xs font-black mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    Smart Tip
                 </h4>
                 <p className="text-xs text-blue-100/70 leading-relaxed mb-4">
                    "Cold weather in North York is causing more service calls for older heating systems today."
                 </p>
                 <button className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Send Alert →</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FleetMap;
