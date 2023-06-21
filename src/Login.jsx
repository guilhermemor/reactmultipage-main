import React, { useState } from 'react';
import { useGlobalContext } from './context'; // Importe o hook do seu contexto global

const LoginPage = () => {
  const { login } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
    login(); // Chamando a função de login do contexto global
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ margin: '0 auto' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <label htmlFor="email" style={{ fontSize: '16px' }}>E-mail:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              style={{ width: '300px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <label htmlFor="password" style={{ fontSize: '16px' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '300px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              backgroundColor: '#191970',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
