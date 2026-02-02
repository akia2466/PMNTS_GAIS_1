
import React, { useState, useRef } from 'react';
import { User, UserRole } from '../../types';

interface FilesProps {
  user: User;
}

const Files: React.FC<FilesProps> = ({ user }) => {
  const isStudent = user.role === UserRole.STUDENT;
  const isTeacher = user.role === UserRole.TEACHER;
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // STUDENT/TEACHER FOLDER LOGIC (REVERTED)
  if (isStudent || isTeacher) {
    const folders = isStudent 
      ? [{ name: 'Mathematics', count: 5 }, { name: 'Science', count: 4 }]
      : [{ name: 'Lesson Plans', count: 12 }, { name: 'Exam Papers', count: 15 }];
    const files = isStudent
      ? [{ name: 'Algebra_Set.pdf', size: '2.4 MB', cat: 'Math', date: 'Jan 20' }]
      : [{ name: 'Final_Exam_Draft.docx', size: '4.2 MB', cat: 'Exams', date: 'Jan 18' }];
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ l: 'Files', v: isStudent ? '6' : '45' }, { l: 'Storage', v: isStudent ? '20MB' : '1.2GB' }, { l: 'Quota', v: isStudent ? '5GB' : '50GB' }].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-light shadow-sm flex items-center space-x-6"><div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-2xl text-accent"><i className="fas fa-hdd"></i></div><div><div className="text-2xl font-bold text-primary">{stat.v}</div><div className="text-[10px] font-bold text-gray uppercase">{stat.l}</div></div></div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-xl shadow-sm border p-6"><h3 className="text-sm font-bold uppercase mb-6 tracking-widest border-b pb-2">Folders</h3><div className="space-y-3">{folders.map((f, i) => (
                <button key={i} className="w-full flex justify-between p-4 bg-light rounded-lg"><span className="text-sm font-bold text-gray">{f.name}</span><span className="text-[10px] font-bold text-gray/50">{f.count}</span></button>
              ))}</div></div>
              <div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl">
                 <h3 className="text-sm font-bold uppercase text-center mb-6">Upload Files</h3>
                 <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:bg-white/5"><i className="fas fa-upload text-3xl mb-4"></i><p className="text-[10px]">Add new documents</p></div>
                 <input type="file" multiple ref={fileInputRef} className="hidden" />
              </div>
           </div>
           <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                 <div className="p-8 border-b"><h3 className="text-lg font-bold text-primary uppercase">Active Library</h3></div>
                 <div className="divide-y divide-gray-light">{files.map((f, i) => (
                   <div key={i} className="p-6 flex justify-between items-center"><div className="flex items-center space-x-4"><div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center"><i className="fas fa-file-pdf"></i></div><div><h4 className="text-sm font-bold text-primary">{f.name}</h4><p className="text-[10px] uppercase">{f.size} • {f.cat}</p></div></div><div className="flex space-x-4"><button className="text-gray-400 hover:text-primary"><i className="fas fa-eye"></i></button><button className="text-gray-400 hover:text-primary"><i className="fas fa-download"></i></button></div></div>
                 ))}</div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // OTHER STAFF ROLES
  const getRoleStorageConfig = () => {
    switch(user.role) {
      case UserRole.BURSAR: return { stats: ['K14.5M Secure', 'Financial Vault'], folders: ['Ledgers', 'Payroll'] };
      case UserRole.PRINCIPAL: return { stats: ['Institutional Docs', 'Policy Vault'], folders: ['Policies', 'Contracts'] };
      case UserRole.ADMISSIONS: return { stats: ['Student Records', 'Applicant Vault'], folders: ['Intake 2026', 'Transcripts'] };
      case UserRole.ADMIN: return { stats: ['System Backups', 'Core Configs'], folders: ['Server Logs', 'Auth Keys'] };
      default: return { stats: ['Cloud Storage', '2.4GB Used'], folders: ['Archives'] };
    }
  };
  const config = getRoleStorageConfig();
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{config.stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl border shadow-sm flex items-center space-x-6"><div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-2xl text-accent"><i className="fas fa-shield-alt"></i></div><div><div className="text-xl font-bold text-primary">{stat}</div><div className="text-[10px] font-bold text-gray uppercase">Storage Metric</div></div></div>
      ))}</div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-8"><div className="bg-white rounded-xl shadow-sm border p-6"><h3 className="text-sm font-bold uppercase mb-6 tracking-widest border-b pb-2">Vaults</h3><div className="space-y-3">{config.folders.map((f, i) => (
          <button key={i} className="w-full flex items-center p-4 bg-light rounded-lg"><i className="fas fa-folder-lock text-accent mr-3"></i><span className="text-sm font-bold text-gray">{f}</span></button>
        ))}</div></div></div>
        <div className="lg:col-span-3"><div className="bg-white rounded-xl shadow-sm border overflow-hidden"><div className="p-8 border-b"><h3 className="text-lg font-bold text-primary uppercase">Restricted Repository</h3></div><div className="p-12 text-center text-gray italic">Document ledger ready for audit. Access restricted to role {user.role}.</div></div></div>
      </div>
    </div>
  );
};

export default Files;
