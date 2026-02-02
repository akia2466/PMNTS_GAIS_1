
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Academics from './pages/public/Academics';
import StudentsPublic from './pages/public/StudentsPublic';
import ContactPage from './pages/public/Contact';
import DashboardLayout from './components/DashboardLayout';
import AuthModal from './components/AuthModal';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // If email isn't verified, we ensure they are signed out at the app level
        // to prevent session persistence without verification
        if (!firebaseUser.emailVerified) {
          await signOut(auth);
          setUser(null);
          localStorage.removeItem('pomnhs_user');
          setIsLoading(false);
          return;
        }

        // Retrieve local metadata (role) if available, otherwise default to student
        const savedUser = localStorage.getItem('pomnhs_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        } else {
          const newUser: User = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
            role: UserRole.STUDENT
          };
          setUser(newUser);
        }
        if (currentPage === 'home') setCurrentPage('dashboard-overview');
      } else {
        setUser(null);
        localStorage.removeItem('pomnhs_user');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [currentPage]);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('pomnhs_user', JSON.stringify(userData));
    setIsAuthModalOpen(false);
    setCurrentPage('dashboard-overview');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('pomnhs_user');
      setCurrentPage('home');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-primary">
        <div className="text-secondary animate-pulse text-2xl font-bold">POMNHS...</div>
      </div>
    );
  }

  const renderContent = () => {
    if (user && currentPage.startsWith('dashboard-')) {
      return (
        <DashboardLayout 
          user={user} 
          activeTab={currentPage} 
          onNavigate={setCurrentPage}
          onLogout={handleLogout}
        />
      );
    }

    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} onLoginClick={() => setIsAuthModalOpen(true)} />;
      case 'about': return <About />;
      case 'academics': return <Academics />;
      case 'students': return <StudentsPublic />;
      case 'contact': return <ContactPage />;
      default: return <Home onNavigate={setCurrentPage} onLoginClick={() => setIsAuthModalOpen(true)} />;
    }
  };

  const isDashboard = user && currentPage.startsWith('dashboard-');

  return (
    <div className="min-h-screen flex flex-col bg-light">
      {!isDashboard && (
        <Header 
          activePage={currentPage} 
          onNavigate={setCurrentPage} 
          user={user}
          onLogout={handleLogout}
          onLoginClick={() => setIsAuthModalOpen(true)}
        />
      )}
      
      <main className={`flex-grow ${!isDashboard ? 'pt-20 pb-12' : ''}`}>
        {renderContent()}
      </main>

      {!isDashboard && <Footer onNavigate={setCurrentPage} />}

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default App;
