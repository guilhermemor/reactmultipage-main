import React, { useState } from 'react';
import { useGlobalContext } from './context';

function RegistrationPage() {
  const { register } = useGlobalContext();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não correspondem');
      return;
    }

    // Lógica de registro do usuário
    register(username, email, password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1>Registro</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <br />
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <label htmlFor="email" style={{ fontSize: '16px' }}>E-mail</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              style={{ width: '300px' }}
            />
          </div>
          <br />
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <label htmlFor="password" style={{ fontSize: '16px' }}>Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '300px' }}
            />
          </div>
          <br />
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <label htmlFor="confirmPassword" style={{ fontSize: '16px' }}>Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{ width: '300px' }}
            />
          </div>
          <br />
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
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
