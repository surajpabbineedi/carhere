import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <header className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-blue-100 text-lg">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
