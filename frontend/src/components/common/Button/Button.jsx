import React from 'react';
import styles from './Button.module.css';

/**
 * Botão reutilizável com estilo moderno
 * @param {string} label - Texto do botão
 * @param {function} onClick - Função chamada ao clicar
 * @param {string} type - Tipo do botão (submit, button etc.)
 */
const Button = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

