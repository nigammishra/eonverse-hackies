// redux slice (authSlice.js)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from './axios';

const initialState = {
  user: JSON.parse(localStorage.getItem('userDetails')) || null,
  loading: false,
  error: null,
};

// Async thunk for login
export const login = createAsyncThunk('auth/login', async (formData, { rejectWithValue }) => {
  try {
    const data = await fetchData('POST', '/login', formData);
    localStorage.setItem('userDetails', JSON.stringify(data));
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Async thunk for registration
export const register = createAsyncThunk('auth/register', async (formData, { rejectWithValue }) => {
  try {
    return await fetchData('POST', '/register', formData);
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Async thunk for password update
export const updatePassword = createAsyncThunk('auth/updatePassword', async (formData, { rejectWithValue }) => {
  try {
    return await fetchData('PUT', '/update-password', formData);
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Redux slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userDetails');
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => { state.loading = true; })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => { state.loading = true; })
      .addCase(register.fulfilled, (state) => { state.loading = false; })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePassword.pending, (state) => { state.loading = true; })
      .addCase(updatePassword.fulfilled, (state) => { state.loading = false; })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
