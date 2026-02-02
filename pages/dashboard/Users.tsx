
import React, { useState } from 'react';
import { User, UserRole } from '../../types';

interface UsersManagementProps {
  user: User;
}

const UsersManagement: React.FC<UsersManagementProps> = ({ user }) => {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: UserRole.STUDENT, grade: '', email: '' });

  // Permissions logic
  const canDelete = user.role === UserRole.ADMIN || user.role === UserRole.PRINCIPAL;
  const canEditAny = user.role === UserRole.ADMIN || user.role === UserRole.PRINCIPAL;
  const canOnlyAddStudent = user.role === UserRole.ADMISSIONS;

  // Mock users list
  const [users, setUsers] = useState([
    { id: '1', name: 'Samuel Vagi', role: UserRole.STUDENT, grade: 'Grade 12', email: 'samuel@pomnhs.edu.pg' },
    { id: '2', name: 'Michael Yawi', role: UserRole.TEACHER, grade: 'Science', email: 'michael@pomnhs.edu.pg' },
    { id: '3', name: 'Dr. Helen Sere', role: UserRole.HOD, grade: 'Literature', email: 'helen@pomnhs.edu.pg' },
    { id: '4', name: 'Dr. John Kila', role: UserRole.PRINCIPAL, grade: 'Admin', email: 'john@pomnhs.edu.pg' },
    { id: '5', name: 'Admin Master', role: UserRole.ADMIN, grade: 'System', email: 'admin@pomnhs.edu.pg' },
  ]);

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string, targetRole: UserRole) => {
    if (targetRole === UserRole.ADMIN && user.role !== UserRole.ADMIN) {
      alert("Error: You cannot delete a Superuser.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
      alert("User deleted successfully.");
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (canOnlyAddStudent && formData.role !== UserRole.STUDENT) {
      alert("Admissions can only enroll students.");
      return;
    }
    const newUser = { ...formData, id: Date.now().toString() };
    setUsers([...users, newUser]);
    setShowAddModal(false);
    alert(`${formData.role} user created successfully.`);
    setFormData({ name: '', role: UserRole.STUDENT, grade: '', email: '' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-8 rounded-2xl border border-gray-light shadow-sm">
        <div>
           <h3 className="text-xl font-bold text-primary uppercase tracking-tight">Institutional User Registry</h3>
           <p className="text-xs text-gray font-bold uppercase tracking-widest mt-1">Management Role: {user.role}</p>
        </div>
        <div className="flex items-center space-x-4 w-full md:w-auto">
           <div className="relative flex-grow md:w-64">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                placeholder="Search name, ID, or role..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-light border border-gray-light rounded-xl text-sm focus:outline-none focus:border-secondary transition-all"
              />
           </div>
           <button 
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-secondary px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-dark transition-all shadow-lg shrink-0"
           >
             {canOnlyAddStudent ? 'Enroll Student' : 'Add New User'}
           </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-light overflow-hidden shadow-sm">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-light/50 border-b border-gray-light text-[10px] uppercase font-bold text-gray tracking-widest">
                  <tr>
                    <th className="px-8 py-5">Name / ID</th>
                    <th className="px-8 py-5">Role</th>
                    <th className="px-8 py-5">Department / Grade</th>
                    <th className="px-8 py-5">Email Address</th>
                    <th className="px-8 py-5 text-center">Actions</th>
                  </tr>
               </thead>
               <tbody className="text-sm divide-y divide-gray-light">
                  {filteredUsers.map(u => (
                    <tr key={u.id} className="hover:bg-light transition-colors group">
                       <td className="px-8 py-5">
                          <div className="flex items-center space-x-4">
                             <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">{u.name.charAt(0)}</div>
                             <div>
                                <h4 className="font-bold text-primary">{u.name}</h4>
                                <p className="text-[10px] text-gray uppercase font-bold">UID-00{u.id}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-5">
                          <span className="px-3 py-1 bg-secondary text-primary rounded-full text-[10px] font-bold uppercase">{u.role}</span>
                       </td>
                       <td className="px-8 py-5 font-bold text-gray uppercase text-[11px]">{u.grade}</td>
                       <td className="px-8 py-5 text-accent font-bold">{u.email}</td>
                       <td className="px-8 py-5">
                          <div className="flex justify-center space-x-3">
                             <button className="text-gray-400 hover:text-primary transition-colors"><i className="fas fa-edit"></i></button>
                             {canDelete && (u.role !== UserRole.ADMIN || user.role === UserRole.ADMIN) && (
                               <button 
                                onClick={() => handleDelete(u.id, u.role)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                               >
                                 <i className="fas fa-trash"></i>
                               </button>
                             )}
                          </div>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {filteredUsers.length === 0 && (
           <div className="p-12 text-center text-gray italic">No users matching your search criteria.</div>
         )}
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-primary/60 backdrop-blur-sm p-4">
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in duration-200">
              <div className="bg-primary p-6 flex justify-between items-center">
                 <h3 className="text-white font-bold uppercase tracking-widest">{canOnlyAddStudent ? 'Student Enrollment' : 'Create User Account'}</h3>
                 <button onClick={() => setShowAddModal(false)} className="text-white/50 hover:text-white"><i className="fas fa-times"></i></button>
              </div>
              <form onSubmit={handleAdd} className="p-8 space-y-6">
                 <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-2">Full Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-light border border-gray-light rounded-lg text-sm focus:outline-none" required />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-2">Account Role</label>
                    <select 
                      disabled={canOnlyAddStudent}
                      value={formData.role} 
                      onChange={(e) => setFormData({...formData, role: e.target.value as UserRole})}
                      className="w-full p-3 bg-light border border-gray-light rounded-lg text-sm focus:outline-none"
                    >
                       <option value={UserRole.STUDENT}>Student</option>
                       <option value={UserRole.TEACHER}>Teacher</option>
                       <option value={UserRole.HOD}>Head of Department</option>
                       <option value={UserRole.BURSAR}>Bursar</option>
                       <option value={UserRole.ADMISSIONS}>Admissions</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-2">Email Address</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 bg-light border border-gray-light rounded-lg text-sm focus:outline-none" required />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-2">Grade / Department</label>
                    <input type="text" value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})} className="w-full p-3 bg-light border border-gray-light rounded-lg text-sm focus:outline-none" placeholder="e.g. Grade 12 or Science" />
                 </div>
                 <button type="submit" className="w-full py-4 bg-primary text-secondary font-bold uppercase tracking-widest rounded-lg hover:bg-dark shadow-lg">Confirm & Register</button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default UsersManagement;
