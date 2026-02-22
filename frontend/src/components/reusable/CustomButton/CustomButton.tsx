'use client';

import React from 'react';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className,
}) => {
  const variantClass = styles[variant];
  const sizeClass = styles[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${variantClass} ${sizeClass} ${className || ''}`}
    >
      {label}
    </button>
  );
};