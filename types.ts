
export interface SensorData {
  timestamp: string;
  supplyTemp: number;
  returnTemp: number;
  staticPressure: number;
  gasValveVoltage: number;
  flameSensorMicroamps: number;
  efficiency: number;
}

export interface Customer {
  id: string;
  name: string;
  address: string;
  neighborhood: string; // Toronto neighborhoods like North York, Etobicoke, etc.
  equipment: {
    furnace: string;
    ac: string;
    installedDate: string;
  };
  telemetry: SensorData[];
  rebateStatus: 'Not Started' | 'Assessment Pending' | 'Post-Install Verification' | 'Grant Paid';
}

export interface RebateMetric {
  title: string;
  value: string | number;
  trend: 'up' | 'down' | 'neutral';
  description: string;
}
