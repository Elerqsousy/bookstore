import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collin',
  },
  {
    id: uuid(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbet',
  },
  {
    id: uuid(),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collin',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      return [
        ...state, { ...action.payload, id: uuid() },
      ];
    },
    bookRemoved(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { bookAdded, bookRemoved } = bookSlice.actions;

export default bookSlice.reducer;
