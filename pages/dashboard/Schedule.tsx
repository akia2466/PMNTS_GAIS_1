
import React, { useState, useEffect } from 'react';
import { User, UserRole } from '../../types';

interface ScheduleProps {
  user: User;
}

const Schedule: React.FC<ScheduleProps> = ({ user }) => {
  const [filterDay, setFilterDay] = useState('All');
  const [currentTime, setCurrentTime] = useState(new Date());
  const isStudent = user.role === UserRole.STUDENT;
  const isTeacher = user.role === UserRole.TEACHER;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // TIMETABLE DATA (REVERTED)
  const getWeeklyTimetable = () => {
    if (isTeacher) {
      return [{ day: 'Monday', classes: [{ time: '08:00 - 09:00', start: 800, end: 900, subject: 'Chemistry (12A)', room: 'Lab 2', teacher: 'Self' }] }];
    }
    if (isStudent) {
      return [{ day: 'Monday', classes: [{ time: '08:00 - 09:00', start: 800, end: 900, subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 101' }] }];
    }
    return [];
  };

  const weeklyTimetable = getWeeklyTimetable();

  if (isStudent || isTeacher) {
    const displayedSchedule = filterDay === 'All' ? weeklyTimetable : weeklyTimetable.filter(d => d.day === filterDay);
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6"><div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl"><i className="fas fa-chalkboard-teacher"></i></div><div><h3 className="text-xl font-bold uppercase tracking-tight mb-1">{isTeacher ? "Teaching Day" : "Your Schedule"}</h3><p className="text-sm text-white/70">Session tracking active.</p></div></div>
          <button onClick={() => window.print()} className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-xs uppercase shadow-lg">Print Timetable</button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-light overflow-hidden">
          <div className="p-8 border-b flex justify-between items-center"><h3 className="text-lg font-bold text-primary uppercase">Timeline View</h3></div>
          <div className="divide-y divide-gray-light">{displayedSchedule.map((dayData, idx) => (
            <div key={idx} className="p-8">
              <h4 className="text-2xl font-bold text-primary border-l-4 border-secondary pl-4 mb-8">{dayData.day}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{dayData.classes.map((cls, cIdx) => (
                <div key={cIdx} className="bg-white p-6 rounded-xl border border-gray-light shadow-sm"><div className="text-[10px] font-bold text-accent uppercase mb-3 flex items-center"><i className="fas fa-clock mr-2"></i> {cls.time}</div><h5 className="font-bold text-primary text-sm mb-4 h-10 flex items-center">{cls.subject}</h5><div className="space-y-2 border-t pt-4"><div className="text-[10px] text-gray uppercase font-bold"><i className="fas fa-map-marker-alt mr-2"></i> {cls.room}</div></div></div>
              ))}</div>
            </div>
          ))}</div>
        </div>
      </div>
    );
  }

  // ADMINISTRATIVE CALENDARS
  const getCalendarType = () => {
    switch (user.role) {
      case UserRole.PRINCIPAL: return 'Institutional Strategic Calendar';
      case UserRole.BURSAR: return 'Audit & Financial Tracker';
      case UserRole.ADMISSIONS: return 'Intake Roster';
      case UserRole.ADMIN: return 'Maint Schedule';
      case UserRole.HOD: return 'Dept Instructional Timetable';
      default: return 'Calendar';
    }
  };
  const getScheduleItems = () => {
    if (user.role === UserRole.BURSAR) return [{ day: 'Upcoming Deadlines', classes: [{ time: 'Jan 25', subject: 'Payroll Finalization', room: 'Finance Office', teacher: 'HR' }] }];
    return [{ day: 'Operational Roster', classes: [{ time: '08:00 - 10:00', subject: 'Internal Briefing', room: 'Management', teacher: 'Team' }] }];
  };
  const scheduleData = getScheduleItems();
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-primary text-secondary p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-6"><div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl"><i className="fas fa-calendar-alt"></i></div><div><h3 className="text-xl font-bold uppercase tracking-tight mb-1">{getCalendarType()}</h3><p className="text-sm text-white/70">Role-specific institutional timelines.</p></div></div>
        <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-xs uppercase shadow-lg">Export CSV</button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="divide-y divide-gray-light">{scheduleData.map((dayData, idx) => (
          <div key={idx} className="p-8">
            <h4 className="text-2xl font-bold text-primary border-l-4 border-secondary pl-4 mb-8">{dayData.day}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{dayData.classes.map((cls, cIdx) => (
              <div key={cIdx} className="bg-white p-6 rounded-xl border shadow-sm"><div className="text-[10px] font-bold text-accent uppercase mb-3"><i className="fas fa-clock mr-2"></i> {cls.time}</div><h5 className="font-bold text-primary text-sm mb-4 h-10 flex items-center">{cls.subject}</h5><div className="border-t pt-4 text-[10px] uppercase font-bold text-gray">{cls.room}</div></div>
            ))}</div>
          </div>
        ))}</div>
      </div>
    </div>
  );
};

export default Schedule;
