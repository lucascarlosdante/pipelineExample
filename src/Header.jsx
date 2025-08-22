
import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ENV, ENV_COLORS } from './env';

function Header() {
  useEffect(() => {
    document.title = `Ambiente: ${ENV.toUpperCase()}`;
  }, []);
  return (
    <AppBar position="static" sx={{ background: ENV_COLORS[ENV] }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Ambiente: <b>{ENV.toUpperCase()}</b>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
