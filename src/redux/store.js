import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import rootReducer from './root-reducer';

export const store = configureStore({
  auth: authReducer,
  reducer: rootReducer,
});

export default store;
