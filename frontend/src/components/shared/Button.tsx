import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-600';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700';
      default:
        return 'bg-blue-600 hover:bg-blue-700';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 text-white font-semibold rounded-lg transition ${
        disabled ? 'opacity-50 cursor-not-allowed' : getVariantClass()
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
