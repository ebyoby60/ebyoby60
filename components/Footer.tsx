
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <p className="text-sm text-gray-500 font-light">
              © {currentYear} Mbakpobe Adaeze. Built with Precision.
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:adaeze.cyber@example.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm font-bold text-gray-500 tracking-widest uppercase">
            STATUS: SECURE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
