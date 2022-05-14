import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fBe0Ia6gvuaS3XPDzT9u/books';

const api = {};

api.fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios
    .get(baseURL)
    .then((response) => {
      const data = [];
      Object.entries(response.data).forEach((book) => {
        data.push({ ...book[1][0], item_id: book[0] });
      });
      return data;
    });
  return response;
});

api.fetchAddBook = createAsyncThunk('books/fetchBook', async (params) => {
  const apiCall = await axios
    .post(baseURL, { ...params, item_id: uuid() })
    .then((response) => response);
  return apiCall;
});

api.fetchDeleteBook = createAsyncThunk('books/fetchDeleteBook', async (params) => {
  const apiCall = await axios
    .delete(`${baseURL}/${params}`)
    .then((response) => response);
  return apiCall;
});

export default api;
