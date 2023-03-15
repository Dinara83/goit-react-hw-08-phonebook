import { createSlice } from '@reduxjs/toolkit';
import { register, login, current, logout } from './auth-operations';

const initialState = {
  user: {},
  token: null,
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(current.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        const { name, email } = payload;
        state.loading = false;
        state.user.name = name;
        state.user.email = email;
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = null;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = null;
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;