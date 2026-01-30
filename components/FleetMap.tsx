
import React, { useState } from 'react';
import { 
  MapPin, Info, Navigation, Search, Layers, Compass, 
  Plus, Minus, Navigation2, MoreVertical, Star, 
  TrendingUp, Wrench, CheckCircle2, AlertCircle 
} from 'lucide-react';

const FleetMap: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<any>(null);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');

  const locations = [
    { id: 1, name: 'North York Retrofit', area: 'Willowdale', address: '5160 Yonge St, North York', status: 'Optimal', lat: '43.7615', lng: '79.4111', efficiency: 94, tech: 'Marcus V.' },
    { id: 2, name: 'Etobicoke Condo', area: 'The Kingsway', address: '2900 Bloor St W, Etobicoke', status: 'Maintenance', lat: '43.6475', lng: '79.5229', efficiency: 82, tech: 'Leo S.' },
    { id: 3, name: 'Scarborough Townhouse', area: 'Agincourt', address: '2330 Kennedy Rd, Scarborough', status: 'Optimal', lat: '43.7853', lng: '79.2785', efficiency: 91, tech: 'Sarah L.' },
    { id: 4, name: 'Downtown Penthouse', area: 'Harbourfront', address: '10 York St, Toronto', status: 'Installing', lat: '43.6395', lng: '79.3813', efficiency: 0, tech: 'Dave H.' },
    { id: 5, name: 'Mississauga Semi', area: 'Port Credit', address: '125 Lakeshore Rd E, Mississauga', status: 'Optimal', lat: '43.5552', lng: '79.5855', efficiency: 95, tech: 'Marcus V.' },
  ];

  const MarkerIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'Optimal': return <CheckCircle2 className="w-3.5 h-3.5 text-white" />;
      case 'Maintenance': return <AlertCircle className="w-3.5 h-3.5 text-white" />;
      case 'Installing': return <Wrench className="w-3.5 h-3.5 text-white" />;
      default: return <MapPin className="w-3.5 h-3.5 text-white" />;
    }
  };

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
      {/* Top Search Bar Overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-6">
        <div className="flex items-center bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden ring-1 ring-black/5">
          <div className="pl-5 pr-3">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search GTA fleet, addresses, or technicians..." 
            className="flex-1 py-4 bg-transparent border-none focus:ring-0 text-sm font-medium dark:text-white dark:placeholder:text-slate-500 outline-none"
          />
          <div className="flex items-center gap-1 pr-3 border-l border-slate-100 dark:border-white/5 ml-2 pl-3">
            <button className="p-2 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all text-slate-500">
              <Layers className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-slate-100 dark:bg-white/5"></div>
            <button className="p-2 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all">
              <img src="https://picsum.photos/seed/tech/40/40" className="w-7 h-7 rounded-lg" alt="Profile" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden flex">
        {/* Main Map Canvas Area */}
        <div className="flex-1 relative bg-[#e5e3df] dark:bg-[#242f3e] overflow-hidden">
          {/* Realistic Vector Background (Toronto/GTA Representation) */}
          <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-20">
             {/* Lake Ontario */}
             <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#aadaff] dark:bg-[#17263c] transition-colors duration-500"></div>
             {/* Abstract Grid/Streets */}
             <div className="absolute inset-0 bg-[linear-gradient(#cfd2d1_1px,transparent_1px),linear-gradient(90deg,#cfd2d1_1px,transparent_1px)] dark:bg-[linear-gradient(#38414e_1px,transparent_1px),linear-gradient(90deg,#38414e_1px,transparent_1px)] [background-size:100px_100px]"></div>
             <div className="absolute inset-0 bg-[linear-gradient(#dee1e0_0.5px,transparent_0.5px),linear-gradient(90deg,#dee1e0_0.5px,transparent_0.5px)] dark:bg-[linear-gradient(#2b3544_0.5px,transparent_0.5px),linear-gradient(90deg,#2b3544_0.5px,transparent_0.5px)] [background-size:20px_20px]"></div>
             
             {/* Major Highways (401, QEW, DVP) */}
             <svg className="w-full h-full text-white/80 dark:text-white/5" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 0 400 Q 500 450 1000 400" stroke="currentColor" strokeWidth="8" fill="none" />
                <path d="M 300 1000 L 320 0" stroke="currentColor" strokeWidth="6" fill="none" />
                <path d="M 600 1000 L 580 0" stroke="currentColor" strokeWidth="6" fill="none" />
             </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="text-slate-400/20 dark:text-white/5 font-black text-9xl tracking-tighter select-none rotate-[-15deg]">
                TORONTO METRO
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
              <button 
                onClick={() => setSelectedLoc(loc)}
                className="group relative flex flex-col items-center"
              >
                 <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl 
                    transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1
                    ${MarkerColor(loc.status)}
                 `}>
                    <MarkerIcon status={loc.status} />
                 </div>
                 {/* Pin Tail */}
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white dark:border-t-slate-800 -mt-0.5"></div>
                 
                 {/* Tooltip Label */}
                 <div className="mt-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-[10px] font-black dark:text-white">{loc.name}</span>
                 </div>
              </button>
            </div>
          ))}

          {/* Map Controls (Floating Right) */}
          <div className="absolute bottom-10 right-10 flex flex-col gap-3 z-20">
             <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-white/5 overflow-hidden">
                <button className="p-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5">
                  <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                </button>
                <button className="p-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                </button>
             </div>
             <button className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all active:scale-95">
               <Compass className="w-5 h-5 text-blue-600" />
             </button>
             <button className="p-3 bg-blue-600 text-white rounded-xl shadow-2xl shadow-blue-500/30 hover:bg-blue-500 transition-all active:scale-95">
               <Navigation2 className="w-5 h-5 fill-current" />
             </button>
          </div>

          {/* Selected Location Card (Google Maps Style Bottom Drawer) */}
          {selectedLoc && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 w-full max-w-lg px-6 animate-in slide-in-from-bottom-10 duration-500">
               <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-white/5 overflow-hidden ring-1 ring-black/5">
                  <div className="relative h-32 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                     <img src={`https://picsum.photos/seed/${selectedLoc.id}/600/300`} className="w-full h-full object-cover opacity-80" alt="Building" />
                     <button 
                       onClick={() => setSelectedLoc(null)}
                       className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-all"
                     >
                       <Plus className="w-4 h-4 rotate-45" />
                     </button>
                     <div className="absolute bottom-4 left-6 px-3 py-1 bg-white dark:bg-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${MarkerColor(selectedLoc.status)}`}></span>
                        {selectedLoc.status}
                     </div>
                  </div>
                  <div className="p-8">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{selectedLoc.name}</h3>
                           <p className="text-slate-500 text-sm font-medium">{selectedLoc.address}</p>
                        </div>
                        <div className="flex gap-2">
                           <button className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all">
                              <Navigation className="w-5 h-5" />
                           </button>
                           <button className="p-3 bg-slate-50 dark:bg-white/5 text-slate-400 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
                              <MoreVertical className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                           <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Efficiency</div>
                           <div className="text-xl font-black text-slate-900 dark:text-white">{selectedLoc.efficiency}%</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                           <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Assigned Tech</div>
                           <div className="text-xl font-black text-slate-900 dark:text-white">{selectedLoc.tech}</div>
                        </div>
                     </div>
                     <button className="w-full mt-6 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                        Initiate Ambient Sync
                     </button>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Sidebar Info Panel */}
        <div className="w-96 bg-white dark:bg-[#0b0f1a] border-l border-slate-200 dark:border-white/5 flex flex-col z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">
           <div className="p-8 border-b border-slate-100 dark:border-white/5">
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">Fleet Insights</h2>
              <p className="text-xs text-slate-500 font-medium">Monitoring 422 connected assets cross-GTA.</p>
           </div>
           
           <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              <div className="space-y-4">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <TrendingUp className="w-3 h-3 text-blue-500" />
                   Service Density Map
                 </h4>
                 <div className="space-y-4">
                    {[
                      { area: 'North York', count: 142, trend: '+5' },
                      { area: 'Etobicoke', count: 88, trend: '+2' },
                      { area: 'Scarborough', count: 104, trend: '-1' },
                      { area: 'Downtown', count: 56, trend: '+8' },
                      { area: 'Mississauga', count: 32, trend: '0' },
                    ].map((area, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer">
                         <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 transition-colors">{area.area}</span>
                            <span className="text-[10px] text-slate-500">{area.count} active units</span>
                         </div>
                         <div className={`text-[10px] font-black px-2 py-1 rounded-lg ${area.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : area.trend === '0' ? 'bg-slate-500/10 text-slate-400' : 'bg-rose-500/10 text-rose-500'}`}>
                            {area.trend}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 relative overflow-hidden group">
                 <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-600/20 blur-2xl rounded-full"></div>
                 <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-black text-white uppercase tracking-widest">Premium Insight</span>
                 </div>
                 <p className="text-xs text-blue-100/70 leading-relaxed mb-4">
                    "North York's current cold front is impacting furnace flame rectification sensors on Trane units older than 8 years."
                 </p>
                 <button className="text-[10px] font-black text-blue-400 uppercase tracking-widest hover:text-white transition-colors">Dispatch Preventative Check →</button>
              </div>

              <div className="space-y-4">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recent Fleet Alerts</h4>
                 <div className="space-y-3">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold dark:text-white">Static Pressure Warning</span>
                         </div>
                         <p className="text-[10px] text-slate-500 mt-1 ml-5">Unit ID: ST-9021 • North York Hub</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="p-8 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50">
              <button className="w-full py-4 bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all">
                 Download Fleet Audit (PDF)
              </button>
           </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); }
      `}</style>
    </div>
  );
};

export default FleetMap;
