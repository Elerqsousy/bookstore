import { combineReducers } from 'redux';
import books from './booksSlice';
import categories from './categoriesSlice';

const rootReducer = combineReducers({
  books, categories,
});

export default rootReducer;
