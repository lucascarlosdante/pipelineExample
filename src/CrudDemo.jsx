import React, { useEffect, useState } from 'react';

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

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleCheck = (id) => {
    setChecked({ ...checked, [id]: !checked[id] });
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2>CRUD de Itens (API Fake)</h2>
      <button onClick={() => setShowModal(true)} data-testid="add-btn">Adicionar Item</button>
      <table border="1" cellPadding="8" style={{ width: '100%', marginTop: 16 }}>
        <thead>
          <tr>
            <th>Selecionar</th>
            <th>ID</th>
            <th>Título</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={!!checked[item.id]}
                  onChange={() => handleCheck(item.id)}
                  data-testid={`checkbox-${item.id}`}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <button onClick={() => removeItem(item.id)} data-testid={`remove-btn-${item.id}`}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#0008', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 300 }}>
            <h3>Novo Item</h3>
            <input
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Título do item"
              data-testid="input-title"
              style={{ width: '100%', marginBottom: 12 }}
            />
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={addItem} data-testid="save-btn">Salvar</button>
              <button onClick={() => setShowModal(false)} data-testid="cancel-btn">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
