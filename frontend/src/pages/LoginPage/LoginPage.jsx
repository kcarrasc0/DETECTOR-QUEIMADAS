import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import logo from '../../assets/images/loginregister.jpg'; // Altere se o nome da imagem for diferente
import Button from '../../components/common/Button/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Tentando login com:', email, senha);
    // Conexão com backend virá depois
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo do Projeto" className={styles.logo} />
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <Button type="submit" label="Entrar" />
        <p>
          Não possui uma conta? <a href="/register">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

