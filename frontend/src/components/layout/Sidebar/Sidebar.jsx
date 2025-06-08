import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>🔥 Detector</h2>

      <nav className={styles.nav}>
        <Link
          to="/dashboard"
          className={location.pathname === '/dashboard' ? styles.active : ''}
        >
          Dashboard
        </Link>
        <Link
          to="/detector"
          className={location.pathname === '/detector' ? styles.active : ''}
        >
          Detecção
        </Link>
        <Link to="/" className={styles.logout}>
          Sair
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

