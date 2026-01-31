
import React from 'react';
import { Clock, CheckCircle, AlertCircle, Wrench, MoreHorizontal, Calendar } from 'lucide-react';

const ActiveJobs: React.FC = () => {
  const jobs = [
    { id: 'JOB-9021', customer: 'Sarah Jenkins', address: '452 Leslie St, Toronto', type: 'Heat Pump Install', status: 'Working', priority: 'High', tech: 'Marcus V.', time: 'Started 2h ago' },
    { id: 'JOB-8842', customer: 'Robert Chen', address: '12-88 Eglinton Ave E, North York', type: 'Furnace Fix', status: 'On the Way', priority: 'Urgent', tech: 'Leo S.', time: 'ETA 14:15' },
    { id: 'JOB-9103', customer: 'Priya Sharma', address: '2022 Bloor St W, High Park', type: 'Energy Check', status: 'Planned', priority: 'Medium', tech: 'Dave H.', time: 'Tomorrow 09:00' },
    { id: 'JOB-8731', customer: 'Gordon Ramsay', address: '77 King St W, Toronto', type: 'System Tuning', status: 'Done', priority: 'Low', tech: 'Sarah L.', time: 'Today 11:30' },
    { id: 'JOB-9215', customer: 'Linda Wu', address: '150 Burnhamthorpe Rd W, Mississauga', type: 'Upgrade Work', status: 'Waiting for Parts', priority: 'Medium', tech: 'Marcus V.', time: 'Est. 2 days' },
  ];

  const handleAssignJob = () => {
    alert("Opening Job Assignment Portal...");
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Current Work</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage ongoing home comfort jobs and team schedules.</p>
        </div>
        <button 
          onClick={handleAssignJob}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95"
        >
          <Wrench className="w-4 h-4" />
          Assign New Job
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Work & Location</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Team Member</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Priority</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{job.customer}</div>
                    <div className="text-[10px] font-mono text-slate-400">{job.id}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{job.type}</div>
                    <div className="text-[10px] text-slate-500">{job.address}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">
                        {job.tech.split(' ')[0][0]}
                      </div>
                      <span className="text-xs font-medium">{job.tech}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                      job.priority === 'Urgent' ? 'bg-red-100 text-red-600' :
                      job.priority === 'High' ? 'bg-amber-100 text-amber-600' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {job.priority}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      {job.status === 'Working' && <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>}
                      {job.status === 'Done' && <CheckCircle className="w-3 h-3 text-green-500" />}
                      {job.status === 'Waiting for Parts' && <AlertCircle className="w-3 h-3 text-amber-500" />}
                      <span className="text-xs font-semibold">{job.status}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                      <Clock className="w-2.5 h-2.5" /> {job.time}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <button className="p-2 text-slate-400 hover:text-slate-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveJobs;
