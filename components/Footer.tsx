
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-[1400px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-secondary font-bold text-xl mb-6 flex items-center">
            <span className="bg-secondary text-primary w-8 h-8 rounded-full inline-flex items-center justify-center mr-2 text-sm">N</span>
            POMNHS
          </h2>
          <p className="text-gray-light text-sm leading-relaxed mb-6">
            Port Moresby National High School is a leading educational institution in Papua New Guinea, dedicated to academic excellence and moral integrity.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors">
              <i className="fab fa-facebook-f text-primary text-xs"></i>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors">
              <i className="fab fa-twitter text-primary text-xs"></i>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6 text-secondary border-b border-accent/30 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-light">
            <li><button onClick={() => onNavigate('home')} className="hover:text-secondary transition-colors">Home</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-secondary transition-colors">About POMNHS</button></li>
            <li><button onClick={() => onNavigate('academics')} className="hover:text-secondary transition-colors">Academics</button></li>
            <li><button onClick={() => onNavigate('students')} className="hover:text-secondary transition-colors">Student Resources</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6 text-secondary border-b border-accent/30 pb-2">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-light">
            <li className="flex items-start">
              <span className="text-secondary mr-3"><i className="fas fa-map-marker-alt"></i></span>
              Waigani Dr, Port Moresby, Papua New Guinea
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-3"><i className="fas fa-phone-alt"></i></span>
              +675 123 4567
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-3"><i className="fas fa-envelope"></i></span>
              info@pomnhs.ac.pg
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6 text-secondary border-b border-accent/30 pb-2">Newsletter</h3>
          <p className="text-xs text-gray-light mb-4">Stay updated with our latest news and events.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-dark border border-accent/50 text-white px-3 py-2 text-xs rounded-l-md w-full focus:outline-none focus:border-secondary" 
            />
            <button className="bg-secondary text-primary px-4 py-2 rounded-r-md font-bold text-xs hover:bg-accent transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-5 mt-16 pt-8 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-light opacity-60">
        <p>&copy; 2023 Port Moresby National High School. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <button className="hover:text-white">Privacy Policy</button>
          <button className="hover:text-white">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
