import { createSlice } from '@reduxjs/toolkit';
import api from './axiosConfig';

const bookSlice = createSlice({
  name: 'books',
  initialState: { status: 'none', bookList: [] },
  extraReducers: {
    [api.fetchBooks.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchBooks.fulfilled]: (state, action) => ({
      ...state,
      bookList: action.payload,
      status: 'idle',
    }),
    [api.fetchBooks.rejected]: (state) => ({ ...state, status: 'fail' }),
    [api.fetchAddBook.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchAddBook.fulfilled]: (state) => ({ ...state, status: 'idle' }),
    [api.fetchAddBook.rejected]: (state) => ({ ...state, status: 'fail' }),
    [api.fetchDeleteBook.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchDeleteBook.fulfilled]: (state) => ({ ...state, status: 'idle' }),
    [api.fetchDeleteBook.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export default bookSlice.reducer;
