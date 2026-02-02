
import React, { useState } from 'react';
import { User, UserRole, Connection } from '../../types';
import { STUDENT_FRIENDS, TEACHER_COLLEAGUES } from '../../constants';

interface ConnectionsProps {
  user: User;
}

const Connections: React.FC<ConnectionsProps> = ({ user }) => {
  const isStudent = user.role === UserRole.STUDENT;
  const initialData = isStudent ? STUDENT_FRIENDS : TEACHER_COLLEAGUES;
  const [connections, setConnections] = useState<Connection[]>(initialData);

  const activeConnections = connections.filter(c => c.status === 'connected');
  const pendingRequests = connections.filter(c => c.status === 'received' || c.status === 'pending');

  const handleAction = (id: string, action: 'accept' | 'decline' | 'cancel') => {
    if (action === 'accept') {
      setConnections(prev => prev.map(c => c.id === id ? { ...c, status: 'connected' as const, dateConnected: 'Today' } : c));
    } else {
      setConnections(prev => prev.filter(c => c.id !== id));
    }
  };

  const summaryCards = [
    { label: 'Total Friends/Peers', value: '24', icon: 'fas fa-user-friends', color: 'border-primary' },
    { label: 'Requests Received', value: '3', icon: 'fas fa-user-plus', color: 'border-secondary' },
    { label: 'Requests Sent', value: '2', icon: 'fas fa-paper-plane', color: 'border-accent' },
    { label: 'Pending Response', value: '5', icon: 'fas fa-hourglass-half', color: 'border-primary' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-xl border-l-4 ${card.color} shadow-sm`}>
            <div className="text-2xl font-bold text-primary mb-1">{card.value}</div>
            <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border-t-8 border-primary">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h3 className="text-xl font-bold text-primary uppercase tracking-tight">
            {isStudent ? 'Your Connections' : 'Staff Directory'}
          </h3>
          <div className="flex space-x-2">
            <input type="text" placeholder={`Search ${isStudent ? 'students' : 'colleagues'}...`} className="px-4 py-2 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-accent" />
            <button className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all">Search</button>
          </div>
        </div>

        {activeConnections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeConnections.map(conn => (
              <div key={conn.id} className="bg-light p-6 rounded-xl border border-gray-light hover:border-secondary transition-all group relative text-center">
                <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4 border-4 border-white shadow-md transition-transform group-hover:scale-105">
                  {conn.name.charAt(0)}
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">{conn.name}</h4>
                <p className="text-[10px] text-gray uppercase font-semibold mb-4">{conn.role}</p>
                <div className="flex items-center justify-center text-[10px] text-green-500 font-bold uppercase mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span> Connected
                </div>
                <button className="w-full bg-primary text-secondary py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-accent hover:text-white transition-all">
                  Message
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-light rounded-xl border-2 border-dashed border-gray-light">
            <i className="fas fa-users-slash text-4xl text-gray-300 mb-4"></i>
            <p className="text-sm text-gray">No active connections found.</p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-6">
          {isStudent ? 'Connection Requests' : 'Collaboration Requests'}
        </h3>
        <div className="space-y-4">
          {pendingRequests.map(req => (
            <div key={req.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-light rounded-xl border border-gray-light hover:border-accent transition-all">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold shadow-sm">
                  {req.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">{req.name}</h4>
                  <p className="text-[10px] text-gray uppercase font-semibold">{req.role}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                {req.status === 'received' ? (
                  <>
                    <button 
                      onClick={() => handleAction(req.id, 'accept')}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-green-700 transition-all shadow-md active:scale-95"
                    >
                      Accept
                    </button>
                    <button 
                      onClick={() => handleAction(req.id, 'decline')}
                      className="bg-white text-red-500 border border-red-500 px-6 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-red-50 transition-all"
                    >
                      Decline
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => handleAction(req.id, 'cancel')}
                    className="bg-white text-gray border border-gray-light px-6 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-light transition-all"
                  >
                    Cancel Request
                  </button>
                )}
              </div>
            </div>
          ))}
          {pendingRequests.length === 0 && (
             <div className="text-center py-8 text-gray text-sm italic">
               No pending requests at this time.
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Connections;
