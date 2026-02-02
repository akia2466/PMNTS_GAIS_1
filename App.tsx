
import React, { useState, useEffect, useMemo } from 'react';
import { UserRole, User } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Academics from './pages/public/Academics';
import StudentsPublic from './pages/public/StudentsPublic';
import ContactPage from './pages/public/Contact';
import DashboardLayout from './components/DashboardLayout';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('pomnhs_user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      // If we have a user, default to dashboard overview
      if (currentPage === 'home') setCurrentPage('dashboard-overview');
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('pomnhs_user', JSON.stringify(userData));
    setIsAuthModalOpen(false);
    setCurrentPage('dashboard-overview');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('pomnhs_user');
    setCurrentPage('home');
  };

  const renderContent = () => {
    // If we have a user and we are on a dashboard page
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

    // Public pages
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
