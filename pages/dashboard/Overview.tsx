
import React from 'react';
import { User, UserRole } from '../../types';

interface OverviewProps {
  user: User;
  onNavigate: (page: string) => void;
}

const Overview: React.FC<OverviewProps> = ({ user, onNavigate }) => {
  const isStudent = user.role === UserRole.STUDENT;
  const isTeacher = user.role === UserRole.TEACHER;

  // TEACHER SPECIFIC DATA (REVERTED)
  if (isTeacher) {
    const teacherStats = [
      { label: 'Total Students', value: '142', icon: 'fas fa-user-graduate', color: 'border-primary' },
      { label: 'Classes Today', value: '4', icon: 'fas fa-chalkboard', color: 'border-secondary' },
      { label: 'Avg Attendance', value: '94%', icon: 'fas fa-users', color: 'border-accent' },
      { label: 'Grading Pending', value: '12', icon: 'fas fa-file-signature', color: 'border-red-500' },
      { label: 'Active Courses', value: '3', icon: 'fas fa-book-open', color: 'border-primary' },
      { label: 'Dept Meetings', value: '1', icon: 'fas fa-handshake', color: 'border-secondary' },
      { label: 'Unread Messages', value: '15', icon: 'fas fa-envelope-open-text', color: 'border-accent' },
      { label: 'Lesson Plans', value: '8', icon: 'fas fa-scroll', color: 'border-primary' },
    ];

    const classPerformance = [
      { className: 'Grade 12A - Science', avg: '88%', status: 'On Track' },
      { className: 'Grade 12C - Math', avg: '82%', status: 'Review Needed' },
      { className: 'Grade 11B - Science', avg: '91%', status: 'Excelling' },
    ];

    const activity = [
      { title: 'Samuel Vagi submitted: Chemistry Lab Report', time: '1 hour ago', icon: 'fa-file-import', color: 'text-blue-500' },
      { title: 'Meeting scheduled: Science Department Board', time: '4 hours ago', icon: 'fa-calendar-alt', color: 'text-orange-500' },
      { title: 'New curriculum update from Admin', time: '1 day ago', icon: 'fa-bullhorn', color: 'text-red-500' },
      { title: 'Attendance marked: Grade 12A (Chemistry)', time: '2 days ago', icon: 'fa-clipboard-check', color: 'text-green-500' },
    ];

    const recentFiles = [
      { name: 'Titration_Lesson_Plan.pdf', size: '1.2 MB', date: '22/01/2026' },
      { name: 'Semester_2_Syllabus.docx', size: '2.5 MB', date: '15/01/2026' },
      { name: 'GradeBook_Final_Draft.xlsx', size: '840 KB', date: '10/01/2026' },
    ];

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teacherStats.map((stat, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl border-l-4 ${stat.color} shadow-sm transition-all hover:shadow-md`}>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6 flex justify-between items-center">
              Class Performance
              <button onClick={() => onNavigate('dashboard-performance')} className="text-xs text-accent hover:underline font-bold">View Reports</button>
            </h3>
            <div className="space-y-4">
              {classPerformance.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-light rounded-lg border border-gray-light">
                  <div className="min-w-0 flex-grow">
                    <span className="text-xs font-bold text-primary block truncate">{item.className}</span>
                    <span className={`text-[9px] font-bold uppercase ${item.status === 'On Track' ? 'text-green-600' : item.status === 'Excelling' ? 'text-blue-600' : 'text-red-500'}`}>{item.status}</span>
                  </div>
                  <span className="text-sm font-bold text-accent ml-4">{item.avg}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6">Staff & Connections</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-light pb-4">
                <span className="text-sm text-gray font-bold">Department Peers</span>
                <span className="text-lg font-bold text-primary">12</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-light pb-4">
                <span className="text-sm text-gray font-bold">Collaboration Invites</span>
                <span className="text-lg font-bold text-secondary">2</span>
              </div>
              <button onClick={() => onNavigate('dashboard-connections')} className="w-full py-3 bg-primary text-secondary rounded-lg font-bold text-xs uppercase tracking-widest mt-4 hover:bg-dark transition-all">
                Staff Directory
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6 flex justify-between items-center">
              Resources
              <button onClick={() => onNavigate('dashboard-files')} className="text-xs text-accent hover:underline font-bold">All Resources</button>
            </h3>
            <div className="space-y-4">
              {recentFiles.map((file, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-3 bg-light rounded-lg border border-gray-light group cursor-pointer hover:border-secondary transition-all">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-accent shadow-sm">
                    <i className={`fas ${file.name.includes('pdf') ? 'fa-file-pdf' : 'fa-file-word'}`}></i>
                  </div>
                  <div className="min-w-0 flex-grow">
                    <h4 className="text-xs font-bold text-primary truncate">{file.name}</h4>
                    <p className="text-[9px] text-gray uppercase font-bold">{file.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-light">
          <div className="p-8 border-b border-gray-light">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Recent Instructional Activity</h3>
          </div>
          <div className="divide-y divide-gray-light">
            {activity.map((item, idx) => (
              <div key={idx} className="p-6 flex items-center justify-between hover:bg-light transition-all group">
                <div className="flex items-center space-x-6 flex-grow">
                  <div className={`w-10 h-10 rounded-full bg-light flex items-center justify-center text-lg ${item.color}`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                    <p className="text-[10px] text-gray uppercase font-bold tracking-wider">{item.time}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-300 hover:text-accent transition-colors opacity-0 group-hover:opacity-100">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // STUDENT SPECIFIC DATA (REVERTED)
  if (isStudent) {
    const studentStats = [
      { label: 'GPA', value: '3.7', icon: 'fas fa-graduation-cap', color: 'border-primary' },
      { label: 'Attendance', value: '95%', icon: 'fas fa-calendar-check', color: 'border-secondary' },
      { label: 'Class Rank', value: '12/42', icon: 'fas fa-trophy', color: 'border-accent' },
      { label: 'Grade Rank', value: '20/93', icon: 'fas fa-medal', color: 'border-primary' },
      { label: 'Pending Assignments', value: '5', icon: 'fas fa-clock', color: 'border-red-500' },
      { label: 'Upcoming Tests', value: '3', icon: 'fas fa-file-alt', color: 'border-accent' },
      { label: 'Unread Messages', value: '8', icon: 'fas fa-comment', color: 'border-secondary' },
      { label: 'Current Courses', value: '8', icon: 'fas fa-book', color: 'border-primary' },
    ];

    const performance = [
      { subject: 'Mathematics', grade: 'A-', score: '91%' },
      { subject: 'Science', grade: 'B+', score: '85%' },
      { subject: 'Literature', grade: 'A', score: '92%' },
      { subject: 'Social Science', grade: 'B', score: '81%' },
    ];

    const activity = [
      { title: 'Assignment submitted: Algebra Problem Set', time: '2 hours ago', icon: 'fa-file-upload', color: 'text-blue-500' },
      { title: 'Grade received: Literature Essay - A', time: '1 day ago', icon: 'fa-check-circle', color: 'text-green-500' },
      { title: 'New announcement: Mid-term Exams Schedule', time: '2 days ago', icon: 'fa-bullhorn', color: 'text-orange-500' },
      { title: 'Message from Mr. Yawi: titration experiment guidelines', time: '3 days ago', icon: 'fa-comment-alt', color: 'text-purple-500' },
    ];

    const files = [
      { name: 'Algebra Problem Set.pdf', size: '2.4 MB', date: '20/01/2026' },
      { name: 'Shakespeare Essay.docx', size: '1.8 MB', date: '18/01/2026' },
      { name: 'Lab Report.pdf', size: '3.2 MB', date: '15/01/2026' },
    ];

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {studentStats.map((stat, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl border-l-4 ${stat.color} shadow-sm transition-all hover:shadow-md`}>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6 flex justify-between items-center">
              Performance Summary
              <button onClick={() => onNavigate('dashboard-performance')} className="text-xs text-accent hover:underline font-bold">View All</button>
            </h3>
            <div className="space-y-4">
              {performance.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-light rounded-lg border border-gray-light">
                  <span className="text-sm font-bold text-primary">{item.subject}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-bold text-accent">{item.grade}</span>
                    <span className="text-xs text-gray font-bold">{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6">Friends & Peers</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-light pb-4">
                <span className="text-sm text-gray font-bold">Total Friends/Peers</span>
                <span className="text-lg font-bold text-primary">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray font-bold">Requests Received</span>
                <span className="text-lg font-bold text-secondary">3</span>
              </div>
              <button onClick={() => onNavigate('dashboard-connections')} className="w-full py-3 bg-primary text-secondary rounded-lg font-bold text-xs uppercase tracking-widest mt-4 hover:bg-dark transition-all">
                Manage Connections
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6 flex justify-between items-center">
              My Files
              <button onClick={() => onNavigate('dashboard-files')} className="text-xs text-accent hover:underline font-bold">View Files</button>
            </h3>
            <div className="space-y-4">
              {files.map((file, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-3 bg-light rounded-lg border border-gray-light group cursor-pointer hover:border-secondary transition-all">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-accent shadow-sm">
                    <i className={`fas ${file.name.includes('pdf') ? 'fa-file-pdf' : 'fa-file-word'}`}></i>
                  </div>
                  <div className="min-w-0 flex-grow">
                    <h4 className="text-xs font-bold text-primary truncate">{file.name}</h4>
                    <p className="text-[9px] text-gray uppercase font-bold">{file.size} • {file.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-light">
          <div className="p-8 border-b border-gray-light">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-light">
            {activity.map((item, idx) => (
              <div key={idx} className="p-6 flex items-center justify-between hover:bg-light transition-all group">
                <div className="flex items-center space-x-6 flex-grow">
                  <div className={`w-10 h-10 rounded-full bg-light flex items-center justify-center text-lg ${item.color}`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                    <p className="text-[10px] text-gray uppercase font-bold tracking-wider">{item.time}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-300 hover:text-accent transition-colors opacity-0 group-hover:opacity-100">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // OTHER STAFF ROLES (HOD, PRINCIPAL, BURSAR, ADMISSIONS, ADMIN)
  const getRoleMetrics = () => {
    switch (user.role) {
      case UserRole.HOD:
        return [
          { label: 'Dept Avg Performance', value: '86%', icon: 'fas fa-chart-bar', color: 'border-primary' },
          { label: 'Total Teachers', value: '12', icon: 'fas fa-chalkboard-teacher', color: 'border-secondary' },
          { label: 'Lesson Plan Compliance', value: '92%', icon: 'fas fa-check-double', color: 'border-accent' },
          { label: 'Open Dept Tickets', value: '4', icon: 'fas fa-ticket-alt', color: 'border-red-500' },
          { label: 'Pending Grade Validations', value: '15', icon: 'fas fa-stamp', color: 'border-primary' },
          { label: 'Resource Utilization', value: '78%', icon: 'fas fa-box-open', color: 'border-secondary' },
          { label: 'Dept Unread Messages', value: '22', icon: 'fas fa-envelope', color: 'border-accent' },
          { label: 'Current Term Week', value: '6/12', icon: 'fas fa-calendar-week', color: 'border-primary' },
        ];
      case UserRole.PRINCIPAL:
        return [
          { label: 'School-wide Pass Rate', value: '94%', icon: 'fas fa-university', color: 'border-primary' },
          { label: 'Total Enrollment', value: '2,145', icon: 'fas fa-user-graduate', color: 'border-secondary' },
          { label: 'Staff Attendance', value: '98%', icon: 'fas fa-user-check', color: 'border-accent' },
          { label: 'Budget Utilization', value: '62%', icon: 'fas fa-wallet', color: 'border-green-500' },
          { label: 'Critical Incidents', value: '0', icon: 'fas fa-exclamation-triangle', color: 'border-red-500' },
          { label: 'Pending Approvals', value: '8', icon: 'fas fa-file-signature', color: 'border-secondary' },
          { label: 'Official Correspondence', value: '4', icon: 'fas fa-envelope', color: 'border-accent' },
          { label: 'Strategic Milestones', value: '3/5', icon: 'fas fa-flag', color: 'border-primary' },
        ];
      case UserRole.BURSAR:
        return [
          { label: 'Fees Collected', value: 'K1.2M', icon: 'fas fa-money-bill-wave', color: 'border-green-600' },
          { label: 'Outstanding Balance', value: 'K450k', icon: 'fas fa-hand-holding-usd', color: 'border-red-500' },
          { label: 'Vendor Payments Due', value: 'K85k', icon: 'fas fa-file-invoice', color: 'border-orange-500' },
          { label: 'Cash on Hand', value: 'K240k', icon: 'fas fa-vault', color: 'border-primary' },
          { label: 'Scholarship Disbursed', value: 'K120k', icon: 'fas fa-graduation-cap', color: 'border-accent' },
          { label: 'Audit Compliance', value: '100%', icon: 'fas fa-shield-alt', color: 'border-secondary' },
          { label: 'Payroll Status', value: 'Ready', icon: 'fas fa-users-cog', color: 'border-primary' },
          { label: 'Pending Requisitions', value: '12', icon: 'fas fa-shopping-cart', color: 'border-accent' },
        ];
      case UserRole.ADMISSIONS:
        return [
          { label: 'Total Applications', value: '845', icon: 'fas fa-file-alt', color: 'border-primary' },
          { label: 'Intake Target', value: '250', icon: 'fas fa-bullseye', color: 'border-secondary' },
          { label: 'Waitlisted', value: '120', icon: 'fas fa-hourglass-start', color: 'border-accent' },
          { label: 'Accepted Offers', value: '185', icon: 'fas fa-user-check', color: 'border-green-500' },
          { label: 'Entry Test Passed', value: '310', icon: 'fas fa-clipboard-check', color: 'border-primary' },
          { label: 'Pending Review', value: '42', icon: 'fas fa-search', color: 'border-secondary' },
          { label: 'Withdrawals', value: '5', icon: 'fas fa-user-minus', color: 'border-red-500' },
          { label: 'Intake Conversion', value: '74%', icon: 'fas fa-percentage', color: 'border-accent' },
        ];
      case UserRole.ADMIN:
        return [
          { label: 'System Uptime', value: '99.9%', icon: 'fas fa-server', color: 'border-green-500' },
          { label: 'Total Users', value: '2,450', icon: 'fas fa-users', color: 'border-primary' },
          { label: 'DB Storage Used', value: '42%', icon: 'fas fa-database', color: 'border-secondary' },
          { label: 'Security Threats', value: '0', icon: 'fas fa-shield-virus', color: 'border-red-500' },
          { label: 'Active Sessions', value: '412', icon: 'fas fa-plug', color: 'border-accent' },
          { label: 'API Health', value: 'Optimal', icon: 'fas fa-network-wired', color: 'border-primary' },
          { label: 'Pending Updates', value: '2', icon: 'fas fa-sync', color: 'border-secondary' },
          { label: 'Syslog Critical', value: '1', icon: 'fas fa-terminal', color: 'border-red-500' },
        ];
      default:
        return [];
    }
  };

  const metrics = getRoleMetrics();

  const activityLog = [
    { title: 'Urgent: Board meeting summary uploaded', time: '10 mins ago', icon: 'fa-file-alt', color: 'text-red-500' },
    { title: 'New curriculum draft shared by Ministry', time: '2 hours ago', icon: 'fa-bullhorn', color: 'text-blue-500' },
    { title: 'Term 4 fee schedules validated', time: '5 hours ago', icon: 'fa-check-circle', color: 'text-green-500' },
    { title: 'System maintenance scheduled for Sat 2:00 AM', time: '1 day ago', icon: 'fa-wrench', color: 'text-orange-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((stat, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-xl border-l-4 ${stat.color} shadow-sm transition-all hover:shadow-md`}>
            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6">Action Hub</h3>
          <div className="space-y-4">
             <button className="w-full text-left p-3 bg-light rounded-lg border border-gray-light hover:border-accent group flex items-center transition-all">
                <i className="fas fa-file-signature text-accent mr-4"></i>
                <div>
                  <span className="text-sm font-bold text-primary block">Validate Pending Items</span>
                  <span className="text-[9px] text-gray uppercase font-bold">12 items require attention</span>
                </div>
             </button>
             <button className="w-full text-left p-3 bg-light rounded-lg border border-gray-light hover:border-accent group flex items-center transition-all">
                <i className="fas fa-chart-line text-accent mr-4"></i>
                <div>
                  <span className="text-sm font-bold text-primary block">Generate Term Report</span>
                  <span className="text-[9px] text-gray uppercase font-bold">Term 3 Analytics Ready</span>
                </div>
             </button>
             <button className="w-full text-left p-3 bg-light rounded-lg border border-gray-light hover:border-accent group flex items-center transition-all">
                <i className="fas fa-bullhorn text-accent mr-4"></i>
                <div>
                  <span className="text-sm font-bold text-primary block">Broadcast Announcement</span>
                  <span className="text-[9px] text-gray uppercase font-bold">Send to specific groups</span>
                </div>
             </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6">Colleagues & Network</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-light pb-4">
              <span className="text-sm text-gray font-bold">Active Staff</span>
              <span className="text-lg font-bold text-primary">145</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-light pb-4">
              <span className="text-sm text-gray font-bold">Pending Requests</span>
              <span className="text-lg font-bold text-secondary">3</span>
            </div>
            <button onClick={() => onNavigate('dashboard-connections')} className="w-full py-3 bg-primary text-secondary rounded-lg font-bold text-xs uppercase tracking-widest mt-4 hover:bg-dark transition-all">
              Institutional Directory
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6">Latest Files</h3>
          <div className="space-y-4">
            {[{ name: 'School_Policy_v2.pdf', size: '2.4 MB' }, { name: 'Meeting_Minutes_Oct.docx', size: '1.1 MB' }, { name: 'Budget_Draft_2026.xlsx', size: '420 KB' }].map((file, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-3 bg-light rounded-lg border border-gray-light group cursor-pointer hover:border-secondary transition-all">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-accent shadow-sm"><i className="fas fa-file-pdf"></i></div>
                <div className="min-w-0 flex-grow">
                  <h4 className="text-xs font-bold text-primary truncate">{file.name}</h4>
                  <p className="text-[9px] text-gray uppercase font-bold">{file.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-light">
        <div className="p-8 border-b border-gray-light">
          <h3 className="text-lg font-bold text-primary uppercase tracking-tight">System-Wide Activity Log</h3>
        </div>
        <div className="divide-y divide-gray-light">
          {activityLog.map((item, idx) => (
            <div key={idx} className="p-6 flex items-center justify-between hover:bg-light transition-all group">
              <div className="flex items-center space-x-6 flex-grow">
                <div className={`w-10 h-10 rounded-full bg-light flex items-center justify-center text-lg ${item.color}`}><i className={`fas ${item.icon}`}></i></div>
                <div>
                  <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                  <p className="text-[10px] text-gray uppercase font-bold tracking-wider">{item.time}</p>
                </div>
              </div>
              <button className="p-2 text-gray-300 hover:text-accent transition-colors opacity-0 group-hover:opacity-100"><i className="fas fa-chevron-right"></i></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
