import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className = '',
  children,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition ${className}`}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Card;
