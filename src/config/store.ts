import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { STORE_CONFIG } from './config';
import reducers from './reducer.config';

const persistConfig = {
  key: 'weddingPage',
  storage,
  blacklist: ['home'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: STORE_CONFIG.reduxDevTools,
  middleware: [...STORE_CONFIG.reduxMiddlewear, thunk],
});

export const persistor = persistStore(store);
