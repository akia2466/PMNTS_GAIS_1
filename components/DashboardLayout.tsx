
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import Overview from '../pages/dashboard/Overview';
import Performance from '../pages/dashboard/Performance';
import Assignments from '../pages/dashboard/Assignments';
import Attendance from '../pages/dashboard/Attendance';
import Files from '../pages/dashboard/Files';
import Messenger from '../pages/dashboard/Messenger';
import Community from '../pages/dashboard/Community';
import Connections from '../pages/dashboard/Connections';
import Schedule from '../pages/dashboard/Schedule';
import UsersManagement from '../pages/dashboard/Users';

interface DashboardLayoutProps {
  user: User;
  activeTab: string;
  onNavigate: (tab: string) => void;
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, activeTab, onNavigate, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getMenu = () => {
    const messengerAndSocial = [
      { id: 'dashboard-messenger', label: 'Messenger', icon: 'fas fa-comment-dots' },
      { id: 'dashboard-community', label: 'Community', icon: 'fas fa-users' },
      { id: 'dashboard-connections', label: 'Connections', icon: 'fas fa-user-friends' },
    ];

    switch (user.role) {
      case UserRole.STUDENT:
        return [
          { id: 'dashboard-overview', label: 'Dashboard Overview', icon: 'fas fa-th-large' },
          { id: 'dashboard-performance', label: 'Performance Summary', icon: 'fas fa-chart-line' },
          { id: 'dashboard-assignments', label: 'Assignments Hub', icon: 'fas fa-book' },
          { id: 'dashboard-attendance', label: 'Attendance Record', icon: 'fas fa-calendar-check' },
          { id: 'dashboard-schedule', label: 'My Schedule', icon: 'fas fa-calendar-alt' },
          { id: 'dashboard-files', label: 'My Files', icon: 'fas fa-file-alt' },
          ...messengerAndSocial
        ];
      case UserRole.TEACHER:
        return [
          { id: 'dashboard-overview', label: 'Teacher Overview', icon: 'fas fa-th-large' },
          { id: 'dashboard-performance', label: 'Class Performance', icon: 'fas fa-chart-line' },
          { id: 'dashboard-assignments', label: 'Assignments Hub', icon: 'fas fa-tasks' },
          { id: 'dashboard-attendance', label: 'Mark Attendance', icon: 'fas fa-clipboard-list' },
          { id: 'dashboard-schedule', label: 'Teaching Schedule', icon: 'fas fa-calendar-alt' },
          { id: 'dashboard-files', label: 'Teacher Files', icon: 'fas fa-file-alt' },
          ...messengerAndSocial
        ];
      case UserRole.HOD:
        return [
          { id: 'dashboard-overview', label: 'Dept Overview', icon: 'fas fa-th-large' },
          { id: 'dashboard-performance', label: 'Dept Performance', icon: 'fas fa-chart-line' },
          { id: 'dashboard-assignments', label: 'Staff Workload', icon: 'fas fa-tasks' },
          { id: 'dashboard-attendance', label: 'Dept Attendance', icon: 'fas fa-clipboard-list' },
          { id: 'dashboard-schedule', label: 'Dept Timetable', icon: 'fas fa-calendar-alt' },
          { id: 'dashboard-files', label: 'Dept Resources', icon: 'fas fa-file-alt' },
          ...messengerAndSocial
        ];
      case UserRole.PRINCIPAL:
        return [
          { id: 'dashboard-overview', label: 'School Overview', icon: 'fas fa-th-large' },
          { id: 'dashboard-users', label: 'Staff & Student Management', icon: 'fas fa-user-cog' },
          { id: 'dashboard-performance', label: 'School Analytics', icon: 'fas fa-chart-line' },
          { id: 'dashboard-attendance', label: 'School Attendance', icon: 'fas fa-clipboard-list' },
          { id: 'dashboard-schedule', label: 'School Calendar', icon: 'fas fa-calendar-alt' },
          { id: 'dashboard-files', label: 'Policy Documents', icon: 'fas fa-file-alt' },
          ...messengerAndSocial
        ];
      case UserRole.BURSAR:
        return [
          { id: 'dashboard-overview', label: 'Finance Overview', icon: 'fas fa-th-large' },
          { id: 'dashboard-performance', label: 'Revenue Reports', icon: 'fas fa-chart-line' },
          { id: 'dashboard-assignments', label: 'Payment Hub', icon: 'fas fa-money-bill-wave' },
          { id: 'dashboard-schedule', label: 'Audit Calendar', icon: 'fas fa-calendar-alt' },
          { id: 'dashboard-files', label: 'Financial Records', icon: 'fas fa-file-alt' },
          ...messengerAndSocial
        ];
      case UserRole.ADMISSIONS:
        return [
          { id: 'dashboard-overview', label: 'Intake Overview', icon: 'fas fa-th-large' },
          { id: 'dashboard-users', label: 'Enroll Student', icon: 'fas fa-user-plus' },
          { id: 'dashboard-performance', label: 'Enrollment Stats', icon: 'fas fa-chart-line' },
          { id: 'dashboard-attendance', label: 'New Student Log', icon: 'fas fa-clipboard-list' },
          { id: 'dashboard-files', label: 'Student Archives', icon: 'fas fa-file-alt' },
          ...messengerAndSocial
        ];
      case UserRole.ADMIN:
        return [
          { id: 'dashboard-overview', label: 'System Overview', icon: 'fas fa-th-large' },
          { id: 'dashboard-users', label: 'User Control Panel', icon: 'fas fa-users-cog' },
          { id: 'dashboard-performance', label: 'Usage Analytics', icon: 'fas fa-chart-line' },
          { id: 'dashboard-attendance', label: 'System Logs', icon: 'fas fa-terminal' },
          { id: 'dashboard-files', label: 'Configuration', icon: 'fas fa-file-alt' },
          ...messengerAndSocial
        ];
      default:
        return messengerAndSocial;
    }
  };

  const menuItems = getMenu();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard-overview': return <Overview user={user} onNavigate={onNavigate} />;
      case 'dashboard-users': return <UsersManagement user={user} />;
      case 'dashboard-schedule': return <Schedule user={user} />;
      case 'dashboard-performance': return <Performance user={user} />;
      case 'dashboard-assignments': return <Assignments user={user} />;
      case 'dashboard-attendance': return <Attendance user={user} />;
      case 'dashboard-files': return <Files user={user} />;
      case 'dashboard-messenger': return <Messenger user={user} />;
      case 'dashboard-community': return <Community user={user} />;
      case 'dashboard-connections': return <Connections user={user} />;
      default: return <Overview user={user} onNavigate={onNavigate} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F0F2F5]">
      <aside className={`bg-primary text-white transition-all duration-300 flex flex-col z-40 fixed lg:relative h-screen ${isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 lg:w-20 -translate-x-full lg:translate-x-0 overflow-hidden'}`}>
        <div className="h-20 flex items-center px-6 border-b border-accent/20 bg-primary shrink-0">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mr-3 shrink-0"><span className="text-primary font-bold text-lg">P</span></div>
          {isSidebarOpen && (<div><h1 className="text-lg font-bold leading-none whitespace-nowrap">POMNHS</h1><p className="text-[9px] uppercase tracking-wider text-gray-light">Institutional Portal</p></div>)}
        </div>
        <nav className="flex-grow py-6 overflow-y-auto">
          {menuItems.map(item => (
            <button key={item.id} onClick={() => onNavigate(item.id)} className={`w-full flex items-center px-6 py-4 transition-all hover:bg-white/10 group ${activeTab === item.id ? 'bg-secondary text-primary font-bold' : 'text-gray-light'}`}>
              <i className={`${item.icon} text-lg w-8 shrink-0 ${activeTab === item.id ? 'text-primary' : 'text-secondary/70 group-hover:text-secondary'}`}></i>
              {isSidebarOpen && <span className="ml-2 whitespace-nowrap text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-accent/20">
           <button onClick={onLogout} className={`w-full flex items-center px-2 py-3 text-red-400 hover:text-red-300 transition-colors text-sm ${!isSidebarOpen && 'justify-center'}`}>
            <i className="fas fa-sign-out-alt w-8"></i>
            {isSidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>
      <div className="flex-grow flex flex-col min-w-0">
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-4 lg:px-8 border-b shrink-0">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 mr-4 text-gray hover:bg-light rounded-lg lg:hidden"><i className="fas fa-bars"></i></button>
            <h2 className="text-lg font-bold text-primary truncate">
              {menuItems.find(m => m.id === activeTab)?.label || 'Dashboard'}
            </h2>
          </div>
          <div className="flex items-center space-x-2 md:space-x-6">
             <div className="hidden md:flex flex-col text-right">
              <span className="text-sm font-bold text-primary">{user.name}</span>
              <span className="text-[10px] text-gray uppercase font-semibold">{user.role}</span>
            </div>
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white border-2 border-secondary font-bold text-lg">{user.name.charAt(0)}</div>
          </div>
        </header>
        <div className="p-4 md:p-8 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto">{renderActivePage()}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
