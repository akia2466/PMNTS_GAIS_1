
import React, { useState } from 'react';
import { UserRole, User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.STUDENT);
  const [formData, setFormData] = useState({ username: '', password: '' });

  if (!isOpen) return null;

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    const rolePrefix = role.toLowerCase();
    setFormData({ username: `demo_${rolePrefix}`, password: 'password123' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user: User = {
      id: `U-${Date.now()}`,
      name: selectedRole === UserRole.STUDENT ? 'Samuel Vagi' : 
            selectedRole === UserRole.TEACHER ? 'Michael Yawi' :
            selectedRole === UserRole.HOD ? 'Dr. Helen Sere' :
            selectedRole === UserRole.PRINCIPAL ? 'Dr. John Kila' :
            selectedRole === UserRole.BURSAR ? 'Mr. James Gau' :
            selectedRole === UserRole.ADMISSIONS ? 'Sarah Kore' : 'System Admin',
      role: selectedRole,
      grade: selectedRole === UserRole.STUDENT ? 'Grade 12' : undefined,
      className: selectedRole === UserRole.STUDENT ? '12A' : undefined,
      subject: (selectedRole === UserRole.TEACHER || selectedRole === UserRole.HOD) ? 'Science' : undefined,
      department: selectedRole === UserRole.HOD ? 'Science Department' : 
                 selectedRole === UserRole.BURSAR ? 'Finance' : 
                 selectedRole === UserRole.ADMISSIONS ? 'Registry' : undefined,
    };
    
    onLogin(user);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-primary p-8 text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white"><i className="fas fa-times text-xl"></i></button>
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent">
            <span className="text-primary font-bold text-2xl">N</span>
          </div>
          <h2 className="text-white text-2xl font-bold uppercase tracking-tight">Institutional Login</h2>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-light p-1 rounded-lg">
            {[
              { id: UserRole.STUDENT, label: 'Student' },
              { id: UserRole.TEACHER, label: 'Teacher' },
              { id: UserRole.HOD, label: 'HOD' },
              { id: UserRole.PRINCIPAL, label: 'Principal' },
              { id: UserRole.BURSAR, label: 'Bursar' },
              { id: UserRole.ADMISSIONS, label: 'Admissions' },
              { id: UserRole.ADMIN, label: 'Admin' }
            ].map(role => (
              <button 
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={`py-2 rounded-md text-[10px] font-bold transition-all uppercase tracking-tighter ${selectedRole === role.id ? 'bg-secondary text-primary shadow-sm' : 'text-gray-400 hover:text-primary'}`}
              >
                {role.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div>
              <label className="block text-xs font-bold uppercase text-gray mb-2">Username / ID</label>
              <input type="text" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full px-4 py-3 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray mb-2">Password</label>
              <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-3 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
            </div>
            <button type="submit" className="w-full py-4 bg-primary text-secondary font-bold uppercase tracking-widest rounded-lg hover:bg-dark transition-all">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
