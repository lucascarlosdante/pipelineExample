
// Detecta se está rodando localmente
const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';
export const ENV = isLocal ? 'local' : (import.meta.env.VITE_ENV || 'dev');

export const ENV_COLORS = {
  local: '#607d8b', // cinza
  dev: '#1976d2', // azul
  tst: '#43a047', // verde
  hml: '#ffa000', // laranja
  prd: '#d32f2f', // vermelho
};
