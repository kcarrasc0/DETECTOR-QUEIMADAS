import React from 'react';
import styles from './DashboardPage.module.css';
import Button from '../../components/common/Button/Button';


const DashboardPage = () => {
  const irParaDeteccao = () => {
    window.location.href = '/detection'; // rota futura da câmera
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🔥 Painel de Monitoramento</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.card}>
          <h2>Focos identificados</h2>
          <p className={styles.valor}>12</p>
        </section>

        <section className={styles.card}>
          <h2>Último alerta</h2>
          <p className={styles.valor}>Hoje às 14:37</p>
        </section>

        <section className={styles.acoes}>
          <Button label="Abrir Detecção" onClick={irParaDeteccao} />
        </section>
      </main>
    </div>
  );

  
};



export default DashboardPage;
