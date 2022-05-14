import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Under Construction';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state) {
      return state;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
