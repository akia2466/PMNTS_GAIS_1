
import React, { useState } from 'react';
import { UserRole, User } from '../types';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.STUDENT);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    profilePhoto: null as File | null
  });

  if (!isOpen) return null;

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setIsVerificationSent(false);
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, profilePhoto: e.target.files![0] }));
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Google users are pre-verified
      const user: User = {
        id: result.user.uid,
        name: result.user.displayName || 'Google User',
        role: selectedRole, // Respect the demo role selector
        avatar: result.user.photoURL || undefined
      };
      onLogin(user);
    } catch (err: any) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError(err.message || "An error occurred during Google Sign-In.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isRegistering) {
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(userCredential.user, {
          displayName: `${formData.firstName} ${formData.lastName}`
        });

        // Send verification and sign out immediately
        await sendEmailVerification(userCredential.user);
        await signOut(auth);
        
        setRegisteredEmail(formData.email);
        setIsVerificationSent(true);
      } else {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
          
          if (!userCredential.user.emailVerified) {
            // User is signed in but not verified. Sign them out and show verification screen.
            await sendEmailVerification(userCredential.user); // Resend verification if they try to login
            await signOut(auth);
            setRegisteredEmail(formData.email);
            setIsVerificationSent(true);
            setLoading(false);
            return;
          }

          const existingUser: User = {
            id: userCredential.user.uid,
            name: userCredential.user.displayName || userCredential.user.email?.split('@')[0] || 'User',
            role: selectedRole
          };
          onLogin(existingUser);
        } catch (err: any) {
          setError("Email or Password is incorrect");
        }
      }
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError("User already exists. Sign In");
      } else {
        setError(err.message || "An error occurred during authentication.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Verification Screen View
  if (isVerificationSent) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-primary p-8 text-center relative">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent">
              <i className="fas fa-envelope-open-text text-primary text-2xl"></i>
            </div>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight">Verify Your Email</h2>
          </div>
          <div className="p-8 text-center">
            <p className="text-sm text-gray-700 leading-relaxed mb-8">
              We have sent you a verification email to <span className="font-bold text-primary">{registeredEmail}</span>. 
              Please verify it to activate your account and login.
            </p>
            <button 
              onClick={() => {
                setIsVerificationSent(false);
                setIsRegistering(false);
                setError(null);
              }}
              className="w-full py-4 bg-primary text-secondary font-bold uppercase tracking-widest rounded-lg hover:bg-dark transition-all shadow-lg active:scale-[0.98]"
            >
              Login
            </button>
            <p className="mt-6 text-xs text-gray italic">
              Didn't receive it? Check your spam folder or try logging in again to resend.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl my-8 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-primary p-8 text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
            <i className="fas fa-times text-xl"></i>
          </button>
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent">
            <span className="text-primary font-bold text-2xl">N</span>
          </div>
          <h2 className="text-white text-2xl font-bold uppercase tracking-tight">
            {isRegistering ? 'Account Registration' : 'Institutional Login'}
          </h2>
          <p className="text-gray-light text-[10px] uppercase tracking-widest mt-2">Access Port Moresby NHS Portal</p>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold flex items-center">
              <i className="fas fa-exclamation-circle mr-3"></i>
              {error}
            </div>
          )}

          <div className="mb-6">
            <p className="text-[10px] font-bold text-gray uppercase mb-3 text-center tracking-widest">Select Access Role (Demo)</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-light p-1 rounded-lg">
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
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`py-2 rounded-md text-[9px] font-bold transition-all uppercase tracking-tighter ${selectedRole === role.id ? 'bg-secondary text-primary shadow-sm' : 'text-gray-400 hover:text-primary'}`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Sign In Button */}
          <div className="mb-6">
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-light rounded-lg hover:bg-light transition-all active:scale-[0.98] disabled:opacity-50"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-bold text-gray-700">Continue with Google</span>
            </button>
          </div>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-light"></div>
            </div>
            <span className="relative px-4 bg-white text-[10px] font-bold text-gray uppercase tracking-widest">or use email</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isRegistering && (
                <>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-1">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-1">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-1">Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase text-gray mb-1">Profile Photo</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-xs text-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:bg-secondary file:text-primary hover:file:bg-accent" />
                  </div>
                </>
              )}
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase text-gray mb-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
              </div>
              <div className={isRegistering ? "" : "md:col-span-2"}>
                <label className="block text-[10px] font-bold uppercase text-gray mb-1">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
              </div>
              {isRegistering && (
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray mb-1">Repeat Password</label>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-secondary" required />
                </div>
              )}
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-primary text-secondary font-bold uppercase tracking-widest rounded-lg hover:bg-dark transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <i className="fas fa-spinner fa-spin mr-2"></i>
              ) : isRegistering ? 'Create Account' : 'Sign In'}
            </button>

            <div className="text-center mt-6">
              <p className="text-xs text-gray font-semibold">
                {isRegistering ? 'Already have an account?' : "Don't have an account?"}
                <button 
                  type="button"
                  onClick={toggleMode}
                  className="ml-2 text-accent hover:text-secondary font-bold underline uppercase tracking-tighter"
                >
                  {isRegistering ? 'Sign In' : 'Register Now'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
