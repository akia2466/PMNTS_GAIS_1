
import React, { useState } from 'react';
import { User } from '../types';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  user: User | null;
  onLogout: () => void;
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate, user, onLogout, onLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'students', label: 'Students' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary shadow-md border-b-2 border-accent">
      <div className="max-w-[1400px] mx-auto px-5 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-2 border-accent">
            <span className="text-primary font-bold text-xl">N</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight">POMNHS</h1>
            <p className="text-[10px] uppercase text-gray-light">Port Moresby National High</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-white ${activePage === item.id ? 'text-white border-b-2 border-secondary pb-1' : ''}`}
            >
              {item.label}
            </button>
          ))}
          {user ? (
            <div className="flex items-center space-x-4 pl-4 border-l border-accent/30">
              <button 
                onClick={() => onNavigate('dashboard-overview')}
                className="bg-secondary text-primary px-4 py-2 rounded-md font-bold text-xs uppercase hover:bg-accent transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={onLogout}
                className="text-white/70 hover:text-white text-xs underline"
              >
                Log Out
              </button>
            </div>
          ) : (
            <button 
              onClick={onLoginClick}
              className="bg-secondary text-primary px-6 py-2 rounded-md font-bold text-sm uppercase hover:bg-accent transition-colors"
            >
              Sign In
            </button>
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden p-2 text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-accent p-5 space-y-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-secondary border-b border-accent/20"
            >
              {item.label}
            </button>
          ))}
          {user ? (
            <div className="pt-4 flex flex-col space-y-3">
              <button 
                onClick={() => {
                  onNavigate('dashboard-overview');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-secondary text-primary py-3 rounded-md font-bold text-center"
              >
                Go to Dashboard
              </button>
              <button onClick={onLogout} className="text-white text-sm text-center">Log Out</button>
            </div>
          ) : (
            <button 
              onClick={onLoginClick}
              className="w-full bg-secondary text-primary py-3 rounded-md font-bold text-center"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
