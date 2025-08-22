import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === '1234') {
      setError('');
      onLogin();
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h6" mb={2} align="center">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Usuário"
            value={user}
            onChange={e => setUser(e.target.value)}
            fullWidth
            margin="normal"
            inputProps={{ 'data-testid': 'login-user' }}
          />
          <TextField
            label="Senha"
            type="password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            fullWidth
            margin="normal"
            inputProps={{ 'data-testid': 'login-pass' }}
          />
          {error && <Typography color="error" fontSize={14} mb={1}>{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth data-testid="login-btn">
            Entrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
