import React from 'react';
import { Lightbulb } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Lightbulb className="h-8 w-8 text-yellow-300" />
          <h1 className="text-2xl font-bold tracking-tight">IdeaPulse</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-yellow-200 transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition-colors duration-200">Examples</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition-colors duration-200">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;