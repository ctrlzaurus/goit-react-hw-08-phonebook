import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from './contacts/contactsSlice';
import  authReducer from './auth/authSlice';

const authPersistConfigs = {
    key: 'token',
    storage,
    whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(authPersistConfigs, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, 
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }, 
    }),
});

export const persistor = persistStore(store);