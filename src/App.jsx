
import { useState } from 'react';
import './App.css';
import Header from './Header';
import CrudDemo from './CrudDemo';
import Login from './Login';
import { Box, Button } from '@mui/material';

function App() {
  const [logged, setLogged] = useState(false);

  const handleLogout = () => setLogged(false);

  return (
    <>
      <Header />
      {!logged ? (
        <Login onLogin={() => setLogged(true)} />
      ) : (
        <Box>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button variant="outlined" color="secondary" onClick={handleLogout} data-testid="logout-btn">
              Sair
            </Button>
          </Box>
          <CrudDemo />
        </Box>
      )}
    </>
  );
}

export default App;
