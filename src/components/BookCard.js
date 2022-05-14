import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Book from './Book';
import api from '../redux/axiosConfig';

const BookCard = (props) => {
  const {
    category, title, author, id,
  } = props;

  const dispatch = useDispatch();

  const hanldeRemoveBook = async (id) => {
    await dispatch(api.fetchDeleteBook(id));
    dispatch(api.fetchBooks());
  };

  return (
    <div>
      <Book
        category={category}
        title={title}
        author={author}
      />
      <button type="button" onClick={() => hanldeRemoveBook(id)}>
        Remove
      </button>
    </div>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookCard;
