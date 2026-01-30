
import React from 'react';
import { MapPin, Info, Navigation } from 'lucide-react';

const FleetMap: React.FC = () => {
  const locations = [
    { name: 'North York Retrofit', area: 'Willowdale', status: 'Optimal', lat: '43.7615° N', lng: '79.4111° W' },
    { name: 'Etobicoke Condo', area: 'The Kingsway', status: 'Maintenance Required', lat: '43.6475° N', lng: '79.5229° W' },
    { name: 'Scarborough Townhouse', area: 'Agincourt', status: 'Optimal', lat: '43.7853° N', lng: '79.2785° W' },
    { name: 'Downtown Penthouse', area: 'Harbourfront', status: 'Installing', lat: '43.6395° N', lng: '79.3813° W' },
    { name: 'Mississauga Semi', area: 'Port Credit', status: 'Optimal', lat: '43.5552° N', lng: '79.5855° W' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">GTA Fleet Map</h1>
          <p className="text-slate-500 dark:text-slate-400">Live geolocation of IoT-connected furnace/AC units across the Golden Horseshoe.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-200 dark:shadow-none">Refresh Satellite Data</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 h-[600px] bg-slate-200 dark:bg-slate-800 rounded-3xl relative overflow-hidden border border-slate-300 dark:border-slate-700">
          {/* Mock Map Background */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          {/* Map Content - Abstracted */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">Interactive Toronto Regional Map</div>
            <div className="relative w-full h-full flex items-center justify-center">
               {locations.map((loc, i) => (
                 <div key={i} className="absolute group cursor-pointer" style={{ top: `${20 + (i*15)}%`, left: `${30 + (i*10)}%` }}>
                    <div className={`p-2 rounded-full shadow-lg transition-transform group-hover:scale-125 ${loc.status === 'Optimal' ? 'bg-emerald-500' : loc.status === 'Installing' ? 'bg-blue-500' : 'bg-red-500'}`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-2xl z-50">
                       <div className="text-xs font-bold text-slate-900 dark:text-white">{loc.name}</div>
                       <div className="text-[10px] text-slate-500">{loc.area}</div>
                       <div className="mt-2 text-[9px] font-bold uppercase flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'Optimal' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                          {loc.status}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
             <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">Legend</div>
             <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                   <div className="w-3 h-3 bg-emerald-500 rounded-full"></div> Optimal Efficiency
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div> Critical Alert
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div> In Progress
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              Service Density
            </h3>
            <div className="space-y-6">
              {[
                { label: 'North York', val: 82, color: 'bg-blue-600' },
                { label: 'Etobicoke', val: 45, color: 'bg-indigo-600' },
                { label: 'Scarborough', val: 68, color: 'bg-violet-600' },
                { label: 'Downtown', val: 91, color: 'bg-emerald-600' },
                { label: 'Mississauga', val: 54, color: 'bg-amber-600' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold mb-1.5 uppercase tracking-tighter">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-slate-900 dark:text-white">{item.val}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50">
               <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-[10px] text-blue-800 dark:text-blue-200 leading-relaxed font-medium">
                    Fleet density is highest in Downtown Toronto. Consider relocating Service Van #4 to the Etobicoke corridor for optimal SLA compliance.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetMap;
