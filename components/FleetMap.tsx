
import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import { 
  MapPin, Search, TrendingUp, Star, Zap, Info, 
  ChevronRight, Activity, ShieldCheck, Navigation2,
  Wind, CloudRain, Sun
} from 'lucide-react';

const FleetMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [selectedLoc, setSelectedLoc] = useState<any>(null);

  // Expanded and refined Toronto/GTA locations with real coordinates
  const locations = [
    { id: 1, name: 'North York Home', area: 'Willowdale', address: '5160 Yonge St, North York', status: 'Great', lat: 43.7615, lng: -79.4111, efficiency: 94, tech: 'Marcus V.', weather: 'Clear' },
    { id: 2, name: 'Etobicoke Service', area: 'The Kingsway', address: '2900 Bloor St W, Etobicoke', status: 'Check Needed', lat: 43.6475, lng: -79.5229, efficiency: 82, tech: 'Leo S.', weather: 'Breezy' },
    { id: 3, name: 'Scarborough Project', area: 'Agincourt', address: '2330 Kennedy Rd, Scarborough', status: 'Great', lat: 43.7853, lng: -79.2785, efficiency: 91, tech: 'Sarah L.', weather: 'Clear' },
    { id: 4, name: 'Downtown Condo', area: 'Harbourfront', address: '10 York St, Toronto', status: 'New Setup', lat: 43.6395, lng: -79.3813, efficiency: 0, tech: 'Dave H.', weather: 'Overcast' },
    { id: 5, name: 'Mississauga Unit', area: 'Port Credit', address: '125 Lakeshore Rd E, Mississauga', status: 'Great', lat: 43.5552, lng: -79.5855, efficiency: 95, tech: 'Marcus V.', weather: 'Clear' },
    { id: 6, name: 'Vaughan Smart Home', area: 'Maple', address: '9501 Jane St, Vaughan', status: 'Great', lat: 43.8417, lng: -79.5085, efficiency: 92, tech: 'Leo S.', weather: 'Clear' },
    { id: 7, name: 'Markham Residence', area: 'Unionville', address: '150 Main St, Unionville', status: 'Check Needed', lat: 43.8645, lng: -79.3135, efficiency: 78, tech: 'Sarah L.', weather: 'Light Rain' },
    { id: 8, name: 'Liberty Village Loft', area: 'Downtown West', address: '50 East Liberty St, Toronto', status: 'Great', lat: 43.6385, lng: -79.4185, efficiency: 96, tech: 'Dave H.', weather: 'Clear' },
  ];

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize Map with smooth zooming and panning
      mapInstance.current = L.map(mapRef.current, {
        center: [43.70, -79.42],
        zoom: 11,
        zoomControl: false,
        attributionControl: false,
        fadeAnimation: true,
        markerZoomAnimation: true
      });

      // CartoDB Voyager tiles provide a very clean "Google Maps" aesthetics
      const isDark = document.documentElement.classList.contains('dark');
      const tileUrl = isDark 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

      L.tileLayer(tileUrl, {
        maxZoom: 20,
        subdomains: 'abcd',
      }).addTo(mapInstance.current);

      // Add specialized UI control for Zoom
      L.control.zoom({ position: 'bottomright' }).addTo(mapInstance.current);

      // Custom high-fidelity interactive markers
      locations.forEach(loc => {
        const markerColor = loc.status === 'Great' ? '#10b981' : loc.status === 'Check Needed' ? '#f43f5e' : '#3b82f6';
        
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div class="relative group">
              <div class="absolute -inset-2 bg-${loc.status === 'Great' ? 'emerald' : 'blue'}-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div style="background-color: ${markerColor}; width: 14px; height: 14px; border: 2.5px solid white; border-radius: 50%; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);" 
                   class="transform transition-transform group-hover:scale-125"></div>
            </div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7]
        });

        const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(mapInstance.current!);
        
        marker.on('click', () => {
          setSelectedLoc(loc);
          mapInstance.current?.flyTo([loc.lat, loc.lng], 15, { 
            duration: 1.2,
            easeLinearity: 0.25 
          });
        });
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Sync tiles with theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (mapInstance.current) {
        const isDark = document.documentElement.classList.contains('dark');
        const tileUrl = isDark 
          ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
        
        mapInstance.current.eachLayer((layer) => {
          if (layer instanceof L.TileLayer) {
            layer.setUrl(tileUrl);
          }
        });
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden bg-slate-50 dark:bg-slate-950 relative">
      {/* Top Floating Command Deck */}
      <div className="absolute top-6 left-6 right-6 z-[1000] flex flex-col md:flex-row justify-between items-start gap-4 pointer-events-none">
        <div className="flex flex-col gap-4 pointer-events-auto w-full md:w-auto">
          <div className="flex items-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden w-full md:w-[480px] ring-1 ring-black/5">
            <div className="pl-5 pr-3">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search Toronto homes, postal codes, or team..." 
              className="flex-1 py-4 bg-transparent border-none focus:ring-0 text-sm font-semibold dark:text-white dark:placeholder:text-slate-500 outline-none"
            />
            <div className="pr-4 flex gap-1">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-400">
                <Navigation2 className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {['Status: Great', 'Needs Check', 'High Priority', 'Near Me'].map((label, i) => (
              <button key={i} className="px-5 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-2 group">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-rose-500' : 'bg-blue-500'}`}></div>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 pointer-events-auto">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-right">
             <div className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] flex items-center justify-end gap-2 mb-2">
                <Activity className="w-3 h-3 animate-pulse" />
                Toronto Grid Sync: Active
             </div>
             <div className="text-xl font-black dark:text-white tracking-tighter">City Command</div>
             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">422 Connected Systems • GTA</div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex">
        {/* Real-time Map Canvas */}
        <div ref={mapRef} className="flex-1 z-0" />

        {/* Dynamic Detail Overlay */}
        <div className="w-96 bg-white dark:bg-[#0b0f1a] border-l border-slate-200 dark:border-white/5 flex flex-col z-10 shadow-[-15px_0_40px_rgba(0,0,0,0.08)]">
           <div className="p-8 border-b border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-white/[0.01]">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">Service Network</h2>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/seed/${i+20}/32/32`} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" />)}
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  9 Team Members Online
                </div>
              </div>
           </div>
           
           <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
              {selectedLoc ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-500">
                  <button 
                    onClick={() => setSelectedLoc(null)}
                    className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:translate-x-[-4px] transition-transform"
                  >
                    ← Back to Dashboard
                  </button>
                  
                  <div className="space-y-8">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">{selectedLoc.name}</h3>
                        <p className="text-sm text-slate-500 font-medium">{selectedLoc.address}</p>
                      </div>
                      <div className="p-3 bg-blue-600/10 rounded-2xl">
                        <MapPin className="text-blue-600 w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2rem] space-y-1">
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</div>
                          <div className="text-2xl font-black text-emerald-500">{selectedLoc.efficiency}%</div>
                      </div>
                      <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2rem] space-y-1">
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Local Weather</div>
                          <div className="flex items-center gap-2">
                             {selectedLoc.weather === 'Clear' ? <Sun className="w-4 h-4 text-amber-500" /> : <CloudRain className="w-4 h-4 text-blue-400" />}
                             <span className="text-sm font-bold dark:text-white">{selectedLoc.weather}</span>
                          </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2rem] space-y-4">
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Status</span>
                          <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${selectedLoc.status === 'Great' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                            {selectedLoc.status}
                          </span>
                       </div>
                       <div className="h-px bg-slate-100 dark:bg-white/10"></div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Check</span>
                          <span className="text-xs font-bold dark:text-slate-200">2h 14m ago</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Assigned Pro</label>
                       <div className="flex items-center gap-4 p-5 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-3xl shadow-sm hover:border-blue-500/30 transition-all cursor-pointer group">
                          <img src={`https://picsum.photos/seed/${selectedLoc.tech}/64/64`} className="w-12 h-12 rounded-2xl grayscale group-hover:grayscale-0 transition-all" />
                          <div className="flex-1">
                            <div className="text-sm font-bold dark:text-white">{selectedLoc.tech}</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Toronto Field Support</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                       </div>
                    </div>

                    <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                      View System Model
                      <Zap className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      Regional Service Load
                    </h4>
                    <div className="space-y-4">
                        {[
                          { area: 'North York', count: 142, trend: '+5', load: 'High' },
                          { area: 'Etobicoke', count: 88, trend: '+2', load: 'Medium' },
                          { area: 'Scarborough', count: 104, trend: '-1', load: 'High' },
                          { area: 'Downtown', count: 56, trend: '+8', load: 'Peak' },
                          { area: 'Mississauga', count: 32, trend: '0', load: 'Low' },
                        ].map((area, i) => (
                          <div key={i} className="p-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-3xl flex items-center justify-between group cursor-pointer hover:border-blue-500/30 transition-all">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{area.area}</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{area.count} Active Units</span>
                            </div>
                            <div className="text-right">
                               <div className={`text-[10px] font-black px-2 py-1 rounded-lg ${area.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-500/10 text-slate-400'}`}>
                                  {area.trend}
                               </div>
                               <div className="text-[8px] font-black text-slate-400 mt-1 uppercase tracking-widest">{area.load} LOAD</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20 group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                       <Zap className="w-24 h-24" />
                    </div>
                    <div className="relative z-10 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
                          <Wind className="w-5 h-5 text-blue-300" />
                        </div>
                        <h4 className="text-lg font-black leading-tight">Toronto Forecast</h4>
                      </div>
                      <p className="text-xs text-blue-100 font-medium leading-relaxed">
                        Cold front expected tonight. Automatic system checks are running for all units over 10 years old.
                      </p>
                      <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest bg-white text-blue-900 px-6 py-3 rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-black/20">
                        Dispatch Alerts
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] flex flex-col gap-4 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-5">
                        <ShieldCheck className="w-20 h-20 text-emerald-500" />
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 rounded-2xl">
                           <ShieldCheck className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Safety Verified</div>
                     </div>
                     <p className="text-xs font-bold text-slate-700 dark:text-slate-300 italic leading-relaxed">
                        All residential data is stored locally on secure servers in the Toronto Region. No data leaves Ontario soil.
                     </p>
                  </div>
                </>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default FleetMap;
