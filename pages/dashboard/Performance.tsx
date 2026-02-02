
import React, { useState } from 'react';
import { User, UserRole } from '../../types';

interface PerformanceProps {
  user: User;
}

const Performance: React.FC<PerformanceProps> = ({ user }) => {
  const isStudent = user.role === UserRole.STUDENT;
  const isTeacher = user.role === UserRole.TEACHER;
  const [selectedTerm, setSelectedTerm] = useState('Term 1');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedClass, setSelectedClass] = useState('12A');
  const [selectedDeptSub, setSelectedDeptSub] = useState('Chemistry');

  const subjectsData = [
    { 
      id: 'M',
      name: 'Mathematics', 
      grade: 'A-', 
      avg: '91%',
      assessments: [
        { type: 'Midterm Exam', date: 'Jan 15', score: '92/100', pct: '92%', grade: 'A' },
        { type: 'Problem Set 5', date: 'Jan 10', score: '18/20', pct: '90%', grade: 'A' },
      ],
      color: 'border-primary'
    },
    { 
      id: 'S',
      name: 'Science', 
      grade: 'B+', 
      avg: '85%',
      assessments: [
        { type: 'Lab Practical', date: 'Jan 18', score: '85/100', pct: '85%', grade: 'B+' },
        { type: 'Quiz 2', date: 'Jan 12', score: '17/20', pct: '85%', grade: 'B+' },
      ],
      color: 'border-secondary'
    },
    { 
      id: 'L',
      name: 'Literature', 
      grade: 'A', 
      avg: '92%',
      assessments: [
        { type: 'Modern Poetry Analysis', date: 'Jan 20', score: '95/100', pct: '95%', grade: 'A' },
        { type: 'Shakespeare Exam', date: 'Jan 8', score: '88/100', pct: '88%', grade: 'B+' },
      ],
      color: 'border-accent'
    },
    { 
      id: 'S',
      name: 'Social Science', 
      grade: 'B', 
      avg: '81%',
      assessments: [
        { type: 'History Research Paper', date: 'Jan 22', score: '82/100', pct: '82%', grade: 'B' },
        { type: 'Geography Quiz', date: 'Jan 5', score: '16/20', pct: '80%', grade: 'B' },
      ],
      color: 'border-primary'
    }
  ];

  // TEACHER SPECIFIC VIEWS
  if (isTeacher) {
    const teacherClasses = [
      { id: '12A', name: 'Grade 12A', avg: '88%', pupils: 42 },
      { id: '12C', name: 'Grade 12C', avg: '82%', pupils: 38 },
      { id: '11B', name: 'Grade 11B', avg: '91%', pupils: 45 },
    ];
    const studentsList = [
      { id: 'S001', name: 'Samuel Vagi', midterm: 92, problemSet: 18, total: '91%', grade: 'A-' },
      { id: 'S002', name: 'Maria Garcia', midterm: 88, problemSet: 17, total: '87%', grade: 'B+' },
      { id: 'S003', name: 'John Smith', midterm: 95, problemSet: 20, total: '96%', grade: 'A' },
      { id: 'S004', name: 'Jane Wilson', midterm: 78, problemSet: 15, total: '77%', grade: 'C+' },
    ];

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
          <div className="bg-primary text-secondary p-6 rounded-xl flex flex-col justify-center text-center shadow-lg border-b-4 border-accent">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Overall Dept Avg</p>
            <p className="text-5xl font-bold">86%</p>
          </div>
          {teacherClasses.map((cls, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl border border-gray-light shadow-sm text-center cursor-pointer transition-all ${selectedClass === cls.id ? 'ring-2 ring-secondary' : ''}`} onClick={() => setSelectedClass(cls.id)}>
              <p className="text-[10px] font-bold text-gray uppercase mb-4 tracking-widest">{cls.name}</p>
              <p className="text-2xl font-bold text-primary mb-1">{cls.avg}</p>
              <p className="text-sm font-bold text-accent">{cls.pupils} Students</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-gray-light shadow-sm">
          <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Grade Management - {selectedClass}, {selectedTerm}</h3>
          <div className="flex flex-wrap gap-4">
             <button className="bg-secondary text-primary px-6 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-accent transition-all shadow-md">Input New Grades</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-light overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-light/50 text-[10px] uppercase font-bold text-gray tracking-widest border-b border-gray-light">
                    <th className="px-8 py-4">Student ID</th>
                    <th className="px-8 py-4">Name</th>
                    <th className="px-8 py-4">Midterm (100)</th>
                    <th className="px-8 py-4">Problem Set (20)</th>
                    <th className="px-8 py-4">Current Total</th>
                    <th className="px-8 py-4">Current Grade</th>
                    <th className="px-8 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-light">
                  {studentsList.map((stu, idx) => (
                    <tr key={idx} className="hover:bg-light/30 transition-colors">
                      <td className="px-8 py-4 font-mono font-bold text-gray">{stu.id}</td>
                      <td className="px-8 py-4 font-bold text-primary">{stu.name}</td>
                      <td className="px-8 py-4 text-gray">{stu.midterm}</td>
                      <td className="px-8 py-4 text-gray">{stu.problemSet}</td>
                      <td className="px-8 py-4 font-bold text-accent">{stu.total}</td>
                      <td className="px-8 py-4">
                        <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase ${stu.grade.startsWith('A') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {stu.grade}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center"><button className="text-accent hover:text-primary transition-colors p-2"><i className="fas fa-edit"></i></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>
      </div>
    );
  }

  // STUDENT SPECIFIC VIEW
  if (isStudent) {
    const filteredSubjects = subjectsData.filter(sub => selectedSubject === 'All' || sub.name === selectedSubject);
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4">
          <div className="bg-primary text-secondary p-6 rounded-xl flex flex-col justify-center text-center shadow-lg border-b-4 border-accent">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Overall Average</p>
            <p className="text-5xl font-bold">87%</p>
          </div>
          {subjectsData.map((sub, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-light shadow-sm text-center">
              <p className="text-[10px] font-bold text-gray uppercase mb-4 tracking-widest">{sub.name}</p>
              <p className="text-2xl font-bold text-primary mb-1">{sub.grade}</p>
              <p className="text-sm font-bold text-accent">{sub.avg}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-gray-light shadow-sm">
          <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Subject Performance - {selectedTerm}, 2026</h3>
          <div className="flex flex-wrap gap-4">
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="bg-light border border-gray-light rounded-lg px-4 py-2 text-[10px] font-bold uppercase focus:outline-none">
              <option value="All">All Subjects</option>
              {subjectsData.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
            </select>
          </div>
        </div>
        <div className="space-y-12">
          {filteredSubjects.map((sub, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-light overflow-hidden">
              <div className="p-6 border-b border-gray-light flex flex-col sm:flex-row justify-between items-center gap-4 bg-light/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-secondary rounded-xl flex items-center justify-center font-bold text-xl shadow-md border border-accent/20">{sub.id}</div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-lg">{sub.name}</h4>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{selectedTerm}, 2026</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary mr-3">{sub.grade}</span>
                  <span className="text-xs font-bold text-gray uppercase border-l border-gray-light pl-3">Average {sub.avg}</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white text-[10px] uppercase font-bold text-gray tracking-widest border-b border-gray-light">
                      <th className="px-8 py-4">Assessment Type</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Score</th>
                      <th className="px-8 py-4">Percentage</th>
                      <th className="px-8 py-4">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-light">
                    {sub.assessments.map((a, i) => (
                      <tr key={i} className="hover:bg-light/30 transition-colors">
                        <td className="px-8 py-4 font-bold text-primary">{a.type}</td>
                        <td className="px-8 py-4 font-bold text-gray">{a.date}</td>
                        <td className="px-8 py-4 font-mono font-bold text-dark">{a.score}</td>
                        <td className="px-8 py-4 font-bold text-accent">{a.pct}</td>
                        <td className="px-8 py-4"><span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase ${a.grade.startsWith('A') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{a.grade}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // OTHER STAFF ROLES (HOD, PRINCIPAL, BURSAR, ADMISSIONS, ADMIN)
  const renderHODView = () => {
    const deptData = [
      { subject: 'Chemistry', avg: '84%', trend: '+2%', assessments: [
        { type: 'Midterm 3', avg: '82%', completion: '98%', high: '100', low: '45' },
        { type: 'Practical Lab 4', avg: '91%', completion: '100%', high: '95', low: '72' },
        { type: 'Continuous Assessment', avg: '85%', completion: '94%', high: '90', low: '60' },
      ]},
      { subject: 'Physics', avg: '79%', trend: '-1%', assessments: [
        { type: 'Midterm 3', avg: '75%', completion: '96%', high: '98', low: '32' },
        { type: 'Practical Lab 3', avg: '82%', completion: '92%', high: '92', low: '55' },
        { type: 'Calculus Quiz', avg: '80%', completion: '99%', high: '100', low: '40' },
      ]},
    ];
    const currentSub = deptData.find(d => d.subject === selectedDeptSub) || deptData[0];
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deptData.map((d, i) => (
            <div key={i} onClick={() => setSelectedDeptSub(d.subject)} className={`p-8 bg-white rounded-2xl border cursor-pointer transition-all ${selectedDeptSub === d.subject ? 'border-secondary ring-4 ring-secondary/10 shadow-lg' : 'border-gray-light shadow-sm hover:border-accent'}`}>
               <div className="flex justify-between items-start mb-4"><h4 className="font-bold text-primary uppercase text-sm tracking-widest">{d.subject}</h4><span className={`text-[10px] font-bold px-2 py-1 rounded ${d.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{d.trend}</span></div>
               <p className="text-4xl font-bold text-primary">{d.avg}</p>
               <p className="text-[10px] text-gray font-bold uppercase mt-2">Dept Average Score</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-gray-light shadow-sm overflow-hidden">
           <div className="p-8 border-b border-gray-light bg-light/30 flex justify-between items-center"><h3 className="text-lg font-bold text-primary uppercase tracking-tight">Assessment Breakdown: {selectedDeptSub}</h3></div>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="bg-white text-[10px] uppercase font-bold text-gray tracking-widest border-b border-gray-light">
                    <tr><th className="px-8 py-4">Assessment Name</th><th className="px-8 py-4">Avg Score</th><th className="px-8 py-4">Submission Rate</th><th className="px-8 py-4">Highest / Lowest</th><th className="px-8 py-4">Status</th></tr>
                 </thead>
                 <tbody className="text-sm divide-y divide-gray-light">
                    {currentSub.assessments.map((a, i) => (
                      <tr key={i} className="hover:bg-light/30 transition-colors">
                         <td className="px-8 py-5 font-bold text-primary">{a.type}</td>
                         <td className="px-8 py-5 font-mono font-bold text-accent">{a.avg}</td>
                         <td className="px-8 py-5"><div className="flex items-center space-x-3"><div className="w-24 bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="bg-primary h-full" style={{ width: a.completion }}></div></div><span className="text-[10px] font-bold">{a.completion}</span></div></td>
                         <td className="px-8 py-5 text-xs text-gray uppercase font-bold"><span className="text-green-600">{a.high}</span> / <span className="text-red-500">{a.low}</span></td>
                         <td className="px-8 py-5"><span className="px-2 py-1 bg-green-100 text-green-700 text-[9px] font-bold rounded uppercase">Validated</span></td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    );
  };

  const renderPrincipalView = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-primary text-secondary p-8 rounded-2xl shadow-lg border-b-8 border-accent">
           <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Grade 12 Pass Target</p>
           <p className="text-5xl font-bold">98%</p>
        </div>
        {[ { name: 'Sciences', val: '88%' }, { name: 'Humanities', val: '84%' }, { name: 'Arts', val: '91%' } ].map((d, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-light shadow-sm text-center">
             <p className="text-[10px] font-bold text-gray uppercase mb-4 tracking-widest">{d.name} Dept Avg</p>
             <p className="text-3xl font-bold text-primary">{d.val}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-10 rounded-2xl border border-gray-light">
        <h3 className="text-xl font-bold text-primary uppercase mb-8">School-Wide Academic Trends</h3>
        <div className="h-64 bg-light rounded-xl flex items-end justify-between p-10 space-x-4">
           {[45, 62, 78, 85, 92, 94].map((h, i) => (
             <div key={i} className="bg-accent w-full rounded-t-lg transition-all hover:bg-primary" style={{ height: `${h}%` }}></div>
           ))}
        </div>
      </div>
    </div>
  );

  const renderBursarView = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-green-600 text-white p-8 rounded-2xl shadow-lg">
           <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Total Revenue Collected</p>
           <p className="text-4xl font-bold">K1,245,000</p>
        </div>
        {[ { name: 'Grade 9 Fees', val: 'K310k' }, { name: 'Grade 10 Fees', val: 'K290k' }, { name: 'Boarding Fees', val: 'K450k' } ].map((d, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-light shadow-sm text-center">
             <p className="text-[10px] font-bold text-gray uppercase mb-4 tracking-widest">{d.name}</p>
             <p className="text-2xl font-bold text-primary">{d.val}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdmissionsView = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-accent text-white p-8 rounded-2xl shadow-lg">
           <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Enrollment Funnel</p>
           <p className="text-4xl font-bold">84% Completion</p>
        </div>
        {[ { name: 'Web Traffic', val: '12.5k' }, { name: 'Enquiries', val: '1.2k' }, { name: 'Applications', val: '845' } ].map((d, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-light shadow-sm text-center">
             <p className="text-[10px] font-bold text-gray uppercase mb-4 tracking-widest">{d.name}</p>
             <p className="text-2xl font-bold text-primary">{d.val}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdminView = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-dark text-secondary p-8 rounded-2xl shadow-lg border-b-8 border-secondary">
           <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Total System Users</p>
           <p className="text-4xl font-bold">2,452</p>
        </div>
        {[ { name: 'Active Teachers', val: '142' }, { name: 'Active Students', val: '2,110' }, { name: 'Support Staff', val: '200' } ].map((d, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-light shadow-sm text-center">
             <p className="text-[10px] font-bold text-gray uppercase mb-4 tracking-widest">{d.name}</p>
             <p className="text-2xl font-bold text-primary">{d.val}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(user.role) {
      case UserRole.PRINCIPAL: return renderPrincipalView();
      case UserRole.BURSAR: return renderBursarView();
      case UserRole.ADMISSIONS: return renderAdmissionsView();
      case UserRole.ADMIN: return renderAdminView();
      case UserRole.HOD: return renderHODView();
      default: return null;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-gray-light shadow-sm">
        <div>
           <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Institutional Analytics Hub</h3>
           <p className="text-[10px] font-bold text-gray uppercase tracking-widest">Reporting Role: {user.role}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <span className="text-[10px] font-bold uppercase text-gray mr-2">Target Period:</span>
            <select value={selectedTerm} onChange={(e) => setSelectedTerm(e.target.value)} className="bg-light border border-gray-light rounded-lg px-4 py-2 text-[10px] font-bold uppercase focus:outline-none focus:border-secondary">
              <option>Term 1</option><option>Term 2</option><option>Term 3</option><option>Term 4</option>
            </select>
          </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Performance;
