'use client';

import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'CarHere',
  subtitle,
  showLogo = true,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {showLogo && <div className={styles.logo}>{title}</div>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </header>
  );
};