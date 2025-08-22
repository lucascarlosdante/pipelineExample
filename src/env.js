// Utilizado para diferenciar ambientes (dev, tst, hml, prd)
export const ENV = import.meta.env.VITE_ENV || 'dev';

export const ENV_COLORS = {
  dev: '#1976d2', // azul
  tst: '#43a047', // verde
  hml: '#ffa000', // laranja
  prd: '#d32f2f', // vermelho
};
