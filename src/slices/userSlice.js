import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  errorMessage: undefined,
  users: [{name: "Admin User", email: "admin@admin.com", password: "admin"}]
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      const email = action.payload.email;
      const password = action.payload.password;
      const user = state.users.find(u => u.email === email && u.password === password);
      state.user = user;
      state.errorMessage = user === undefined ? "Email or password invalid" : undefined;
    },
    logout: (state) => {
      state.user = undefined;
      state.errorMessage = undefined;
    },
  }
});

export const { signup, login, logout } = userSlice.actions;

export const userSelector = state => state.user;

export default userSlice.reducer;
