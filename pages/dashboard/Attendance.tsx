
import React, { useState } from 'react';
import { User, UserRole } from '../../types';

interface AttendanceProps {
  user: User;
}

const Attendance: React.FC<AttendanceProps> = ({ user }) => {
  const isStudent = user.role === UserRole.STUDENT;
  const isTeacher = user.role === UserRole.TEACHER;
  const [period, setPeriod] = useState('Weekly');

  // TEACHER VIEW (REVERTED)
  if (isTeacher) {
    const teacherLogs = [{ date: 'Jan 23, 2026', class: '12A', present: 40, absent: 2, late: 0, status: 'Completed' }];
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ label: 'Present Today', value: '135', color: 'border-green-500' }, { label: 'Total Absent', value: '4', color: 'border-red-500' }].map((stat, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl border-t-8 ${stat.color} shadow-sm`}>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-light">
              <div className="p-8 border-b border-gray-light"><h3 className="text-lg font-bold text-primary uppercase tracking-tight">Instructional Records</h3></div>
              <table className="w-full text-left">
                <thead className="bg-light/50 text-[10px] uppercase font-bold text-gray tracking-widest"><tr><th className="px-8 py-4">Date</th><th className="px-8 py-4">Class</th><th className="px-8 py-4">Status</th></tr></thead>
                <tbody className="text-sm divide-y divide-gray-light">{teacherLogs.map((log, idx) => (
                  <tr key={idx} className="hover:bg-light transition-colors"><td className="px-8 py-4 font-bold text-primary">{log.date}</td><td className="px-8 py-4">{log.class}</td><td className="px-8 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[9px] font-bold uppercase">{log.status}</span></td></tr>
                ))}</tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold uppercase mb-8 text-center">Mark Daily Attendance</h3>
              <div className="space-y-6">
                <select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white focus:outline-none"><option className="text-dark">Grade 12A - Chemistry</option></select>
                <button className="w-full bg-secondary text-primary font-bold py-4 rounded-xl uppercase text-xs shadow-lg">Submit Roster</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STUDENT VIEW (REVERTED)
  if (isStudent) {
    const logs = [{ date: 'Jan 23, 2026', status: 'Present', in: '7:55 AM', out: '3:10 PM' }];
    const subjects = [{ name: 'Mathematics', rate: '98%' }, { name: 'Science', rate: '94%' }];
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ label: 'Rate', value: '96%', color: 'border-primary' }, { label: 'Absent', value: '2', color: 'border-red-500' }].map((stat, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl border-t-8 ${stat.color} shadow-sm`}>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-light">
              <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-8">Subject-wise Attendance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">{subjects.map((subj, idx) => (
                <div key={idx}><div className="flex justify-between items-center mb-3"><span className="text-sm font-bold text-primary">{subj.name}</span><span className="text-sm font-bold text-accent">{subj.rate}</span></div><div className="w-full bg-light rounded-full h-2"><div className="bg-accent h-2 rounded-full" style={{ width: subj.rate }}></div></div></div>
              ))}</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-light">
               <div className="p-8 border-b border-gray-light"><h3 className="text-lg font-bold text-primary uppercase tracking-tight">Recent Logs</h3></div>
               <table className="w-full text-left">
                  <thead className="bg-light/50 text-[10px] uppercase font-bold text-gray tracking-widest"><tr><th className="px-8 py-4">Date</th><th className="px-8 py-4">Status</th><th className="px-8 py-4">In/Out</th></tr></thead>
                  <tbody className="text-sm divide-y divide-gray-light">{logs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-light transition-colors"><td className="px-8 py-4 font-bold text-primary">{log.date}</td><td className="px-8 py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase">{log.status}</span></td><td className="px-8 py-4 font-mono text-gray">{log.in} - {log.out}</td></tr>
                  ))}</tbody>
               </table>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl">
               <h3 className="text-lg font-bold uppercase mb-8 text-center">Submit Excuse</h3>
               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Excuse submitted.'); }}>
                 <input type="date" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white" />
                 <textarea className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white h-32" placeholder="Reason..."></textarea>
                 <button className="w-full bg-secondary text-primary font-bold py-4 rounded-xl uppercase text-xs">Submit</button>
               </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // OTHER STAFF ROLES
  const getRoleContext = () => {
    switch (user.role) {
      case UserRole.HOD: return { title: 'Dept Attendance', stats: [{ l: 'Staff Present', v: '11/12' }, { l: 'On Leave', v: '1' }], listTitle: 'Recent Dept Logs', items: [{ d: 'Jan 24', e: 'Mr. Michael Yawi', s: 'Present', t: '7:55 AM' }] };
      case UserRole.PRINCIPAL: return { title: 'School Pulse', stats: [{ l: 'Student Attendance', v: '94%' }, { l: 'Faculty', v: '98%' }], listTitle: 'Summaries', items: [{ d: 'Jan 24', e: 'Assembly', s: '95% Attendance', t: '8:00 AM' }] };
      case UserRole.BURSAR: return { title: 'Fee Status', stats: [{ l: 'Fully Paid', v: '1,420' }, { l: 'Arrears', v: '185' }], listTitle: 'Verification Logs', items: [{ d: 'Jan 24', e: 'Samuel Vagi', s: 'Verified', t: '11:20 AM' }] };
      case UserRole.ADMISSIONS: return { title: 'Intake Logs', stats: [{ l: 'Exam Attendance', v: '312/320' }, { l: 'Queue', v: '12' }], listTitle: 'Engagement', items: [{ d: 'Jan 24', e: 'Intake Group A', s: 'Confirmed', t: '9:00 AM' }] };
      case UserRole.ADMIN: return { title: 'Syslog', stats: [{ l: 'Uptime', v: '99.9%' }, { l: 'Failed Auth', v: '4' }], listTitle: 'Events', items: [{ d: 'Jan 24', e: 'Root-Access', s: 'Verified', t: '08:00 AM' }] };
      default: return { title: 'Attendance', stats: [], listTitle: 'Logs', items: [] };
    }
  };
  const context = getRoleContext();
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {context.stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border-t-8 border-secondary shadow-sm"><div className="text-3xl font-bold text-primary mb-1">{stat.v}</div><div className="text-[10px] font-bold text-gray uppercase tracking-widest">{stat.l}</div></div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-light">
        <div className="p-8 border-b border-gray-light flex justify-between items-center"><h3 className="text-lg font-bold text-primary uppercase tracking-tight">{context.listTitle}</h3></div>
        <div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-light/50 text-[10px] uppercase font-bold text-gray tracking-widest"><tr><th className="px-8 py-4">Date</th><th className="px-8 py-4">Entity</th><th className="px-8 py-4">Status</th><th className="px-8 py-4">Timestamp</th></tr></thead>
             <tbody className="text-sm divide-y divide-gray-light">{context.items.map((item, idx) => (
                <tr key={idx} className="hover:bg-light transition-colors"><td className="px-8 py-4 font-bold text-primary">{item.d}, 2026</td><td className="px-8 py-4 font-bold text-gray">{item.e}</td><td className="px-8 py-4"><span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">{item.s}</span></td><td className="px-8 py-4 font-mono text-gray">{item.t}</td></tr>
             ))}</tbody></table></div>
      </div>
    </div>
  );
};

export default Attendance;
