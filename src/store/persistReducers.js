// Este import verifica onde está rodando a aplicação e usa o storage:
// se está na web, usa o storage
// se está no android, usa o sqlite
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'], // vai persistir apenas variáveis dessa lista
    },
    reducers
  );

  return persistedReducer;
};
