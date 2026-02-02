
import React, { useState, useRef } from 'react';
import { User, UserRole } from '../../types';

interface AssignmentsProps {
  user: User;
}

const Assignments: React.FC<AssignmentsProps> = ({ user }) => {
  const isStudent = user.role === UserRole.STUDENT;
  const isTeacher = user.role === UserRole.TEACHER;
  const [activeView, setActiveView] = useState('active');
  const [selectedClass, setSelectedClass] = useState('');
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // TEACHER FLOW (REVERTED)
  if (isTeacher) {
    const teacherStats = [{ name: 'Grade 12A', received: 42, graded: 38 }, { name: 'Grade 12C', received: 38, graded: 30 }, { name: 'Grade 11B', received: 45, graded: 45 }];
    const submissionTracking = [{ id: 1, title: 'Chemistry Lab Report - Titration', class: '12A', status: 'In Progress', count: '38/42', deadline: 'Jan 30, 2026' }, { id: 2, title: 'Organic Chemistry Quiz', class: '12C', status: 'Completed', count: '38/38', deadline: 'Jan 20, 2026' }];
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teacherStats.map((cls, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-light shadow-sm">
              <h4 className="text-sm font-bold text-primary uppercase mb-4 border-b pb-2">{cls.name}</h4>
              <div className="flex justify-between mb-2"><span className="text-[10px] font-bold text-gray uppercase">Submissions</span><span className="text-sm font-bold text-accent">{cls.received}</span></div>
              <div className="flex justify-between"><span className="text-[10px] font-bold text-gray uppercase">Graded</span><span className="text-sm font-bold text-green-600">{cls.graded}</span></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold uppercase mb-8 text-center">Post New Assignment</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Assignment posted.'); }}>
                <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white focus:outline-none">
                  <option value="" className="text-dark">Select Class</option><option value="12A" className="text-dark">Grade 12A</option>
                </select>
                <input type="text" placeholder="Assignment Title" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white" />
                <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:bg-white/5"><i className="fas fa-upload text-3xl mb-3"></i><p className="text-xs text-white/60">Attach Resources</p></div>
                <button className="w-full bg-secondary text-primary font-bold py-4 rounded-xl uppercase text-xs">Post Assignment</button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-light overflow-hidden">
              <div className="p-8"><div className="space-y-4">{submissionTracking.map(asg => (
                <div key={asg.id} className="p-6 bg-light rounded-xl border border-gray-light flex justify-between items-center">
                  <div><h4 className="font-bold text-primary">{asg.title}</h4><p className="text-[10px] text-gray uppercase font-bold">Class: {asg.class} • {asg.status}</p></div>
                  <button className="bg-secondary text-primary px-4 py-2 rounded-lg text-[10px] font-bold uppercase">View Submissions</button>
                </div>
              ))}</div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STUDENT FLOW (REVERTED)
  if (isStudent) {
    const studentFiles = [{ id: 1, title: 'Biology Lab Report Guidelines', subject: 'Science', status: 'pending', from: 'Mr. Yawi', due: 'Jan 30, 2026' }];
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold uppercase mb-8 text-center">Upload Work</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Work submitted.'); }}>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white focus:outline-none"><option className="text-dark">Select Teacher</option><option className="text-dark">Mr. Yawi</option></select>
                <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:bg-white/5"><i className="fas fa-cloud-upload-alt text-3xl mb-3"></i><p className="text-xs text-white/60">Select File</p></div>
                <button className="w-full bg-secondary text-primary font-bold py-4 rounded-xl uppercase text-xs">Submit Assignment</button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-light overflow-hidden">
               <div className="p-8 space-y-4">{studentFiles.map(file => (
                 <div key={file.id} className="p-6 bg-light rounded-xl border border-gray-light flex justify-between items-center">
                    <div><h4 className="font-bold text-primary">{file.title}</h4><p className="text-[10px] text-gray uppercase font-bold">Subject: {file.subject} • Due: {file.due}</p></div>
                    <button className="bg-secondary text-primary px-4 py-2 rounded-lg text-[10px] font-bold uppercase">Submit Work</button>
                 </div>
               ))}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // OTHER STAFF ROLES (SAME AS PREVIOUS)
  const getRoleConfig = () => {
    switch (user.role) {
      case UserRole.BURSAR: return { title: 'Financial Hub', statLabel: 'Invoices', formTitle: 'New Entry', listTitle: 'Requests', items: [{ id: 1, name: 'Office Supplies', type: 'Invoice', status: 'Pending', value: 'K12,500', due: 'Feb 12' }] };
      case UserRole.ADMISSIONS: return { title: 'Pipeline', statLabel: 'Applicants', formTitle: 'Enroll Candidate', listTitle: 'Queue', items: [{ id: 1, name: 'Samuel Vagi (Jr)', type: 'Intake', status: 'Pending', value: 'Grade 9', due: '2026' }] };
      case UserRole.ADMIN: return { title: 'Ops Center', statLabel: 'Tasks', formTitle: 'New Directive', listTitle: 'Maint', items: [{ id: 1, name: 'DB Optimization', type: 'Maint', status: 'Scheduled', value: 'Prod', due: 'Sat 2AM' }] };
      default: return { title: 'Task Hub', statLabel: 'Deliverables', formTitle: 'New Task', listTitle: 'Active', items: [] };
    }
  };
  const config = getRoleConfig();
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-light shadow-sm"><p className="text-[10px] font-bold text-gray uppercase mb-2 tracking-widest">{config.statLabel} Q{i}</p><p className="text-2xl font-bold text-primary">{i * 12 + 5}</p></div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1"><div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl"><h3 className="text-lg font-bold uppercase mb-8 text-center">{config.formTitle}</h3><form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Action processed.'); }}><input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white" placeholder="Descriptor" /><button className="w-full bg-secondary text-primary font-bold py-4 rounded-xl uppercase text-xs">Submit</button></form></div></div>
        <div className="lg:col-span-2"><div className="bg-white rounded-xl shadow-sm border border-gray-light overflow-hidden"><div className="p-8 border-b border-gray-light"><h3 className="text-lg font-bold text-primary uppercase tracking-tight">{config.listTitle}</h3></div><div className="divide-y divide-gray-light">{config.items.map(item => (
          <div key={item.id} className="p-6 flex justify-between items-center"><h4 className="font-bold text-primary">{item.name}</h4><button className="bg-secondary text-primary px-4 py-2 rounded-lg text-[9px] font-bold uppercase">Approve</button></div>
        ))}</div></div></div>
      </div>
    </div>
  );
};

export default Assignments;
