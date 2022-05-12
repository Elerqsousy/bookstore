const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

export const addBook = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVEBOOK,
  payload,
});

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, { ...action.payload }];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
