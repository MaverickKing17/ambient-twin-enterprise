
import React from 'react';
import { Thermometer, Wind, Zap, Flame, AlertTriangle } from 'lucide-react';
import { SensorData } from '../types';

interface DigitalTwinProps {
  data: SensorData;
  equipment: string;
}

const DataPoint: React.FC<{ label: string; value: string | number; icon: React.ReactNode; color: string }> = ({ label, value, icon, color }) => (
  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-slate-100">
    <div className={`p-2 rounded-md ${color}`}>
      {icon}
    </div>
    <div>
      <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">{label}</div>
      <div className="text-lg font-bold text-slate-900">{value}</div>
    </div>
  </div>
);

const DigitalTwin: React.FC<DigitalTwinProps> = ({ data, equipment }) => {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl h-[500px]">
      {/* Visual background abstraction of a furnace */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] border-4 border-blue-400 rounded-lg"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-1 bg-blue-400/30"></div>
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-full h-1 bg-red-400/30"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-bold">{equipment}</h3>
            <p className="text-slate-400 text-sm">Virtual Replica: Site-0294-Toronto</p>
          </div>
          <div className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Real-Time Stream
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="space-y-4">
            <DataPoint 
              label="Supply Air" 
              value={`${data.supplyTemp}°F`} 
              icon={<Thermometer className="w-4 h-4 text-red-400" />} 
              color="bg-red-400/10"
            />
            <DataPoint 
              label="Return Air" 
              value={`${data.returnTemp}°F`} 
              icon={<Thermometer className="w-4 h-4 text-blue-400" />} 
              color="bg-blue-400/10"
            />
            <DataPoint 
              label="Static Pressure" 
              value={`${data.staticPressure} iwc`} 
              icon={<Wind className="w-4 h-4 text-cyan-400" />} 
              color="bg-cyan-400/10"
            />
          </div>
          <div className="space-y-4">
            <DataPoint 
              label="Gas Valve" 
              value={`${data.gasValveVoltage}V`} 
              icon={<Zap className="w-4 h-4 text-yellow-400" />} 
              color="bg-yellow-400/10"
            />
            <DataPoint 
              label="Flame Rect." 
              value={`${data.flameSensorMicroamps} μA`} 
              icon={<Flame className="w-4 h-4 text-orange-400" />} 
              color="bg-orange-400/10"
            />
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold text-red-500 uppercase">Alert</div>
                <div className="text-xs text-red-200">High static pressure detected. Filter replacement required.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-[10px] text-slate-500 uppercase font-bold">Efficiency</div>
              <div className="text-xl font-bold">{data.efficiency}%</div>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <div className="text-[10px] text-slate-500 uppercase font-bold">Health Score</div>
              <div className="text-xl font-bold text-green-400">92/100</div>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl font-semibold transition-colors">
            Initiate Remote Diagnosis
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwin;
