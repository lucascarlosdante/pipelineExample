
import React, { useEffect } from 'react';
import './App.css';
import { ENV, ENV_COLORS } from './env';

function Header() {
  useEffect(() => {
    document.title = `Ambiente: ${ENV.toUpperCase()}`;
  }, []);
  return (
    <header style={{ background: ENV_COLORS[ENV], color: '#fff', padding: '1rem', textAlign: 'center' }}>
      Ambiente: <b>{ENV.toUpperCase()}</b>
    </header>
  );
}

export default Header;
