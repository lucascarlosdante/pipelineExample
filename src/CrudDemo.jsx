import React, { useEffect, useState } from 'react';
import {
  Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CrudDemo() {
  const [items, setItems] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const addItem = () => {
    if (!newTitle.trim()) return;
    const newItem = {
      id: Date.now(),
      title: newTitle,
      completed: false,
    };
    setItems([newItem, ...items]);
    setNewTitle('');
    setShowModal(false);
  };


  const removeSelected = () => {
    setItems(items.filter(item => !checked[item.id]));
    setChecked({});
  };

  const handleCheck = (id) => {
    setChecked({ ...checked, [id]: !checked[id] });
  };

  return (
    <Box maxWidth={600} mx="auto" mt={4}>
      <Typography variant="h5" fontWeight={600} mb={2} align="center">
        CRUD de Itens (API Fake)
      </Typography>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Box>
          {Object.values(checked).some(Boolean) ? (
            <IconButton color="error" onClick={removeSelected} data-testid="remove-selected-btn">
              <DeleteIcon />
            </IconButton>
          ) : (
            <Box width={40} />
          )}
        </Box>
        <Box flex={1} />
        <Box>
          <Button variant="contained" color="primary" onClick={() => setShowModal(true)} data-testid="add-btn">
            Adicionar Item
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Selecionar</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox
                    checked={!!checked[item.id]}
                    onChange={() => handleCheck(item.id)}
                    data-testid={`checkbox-${item.id}`}
                  />
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle>Novo Item</DialogTitle>
        <DialogContent>
          <TextField
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="Título do item"
            data-testid="input-title"
            fullWidth
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addItem} variant="contained" data-testid="save-btn">Salvar</Button>
          <Button onClick={() => setShowModal(false)} variant="outlined" data-testid="cancel-btn">Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
