import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
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
    <div className="book-card">
      <div className="card-left-side">
        <div className="book-details">
          <Book category={category} title={title} author={author} />
          <div className="btn-collection">
            <button type="button" onClick={null}>
              Comment
            </button>
            <button type="button" onClick={() => hanldeRemoveBook(id)}>
              Remove
            </button>
            <button type="button" onClick={null}>
              Edit
            </button>
          </div>
        </div>
        <div className="percentage">
          <div className="bar">
            <Progressbar
              input={64}
              pathWidth={20}
              pathColor={['#307dc2', '#4c9de7']} // use an array for gradient color.
              trailWidth={20}
              trailColor="#e8e8e8" // use a string for solid color.
              textStyle={{ fill: '#fff' }}
            />
          </div>
          <div className="percentage-details">
            <p>64%</p>
            <span>Completed</span>
          </div>
          <div className="vertical-border" />
        </div>
      </div>
      <div className="card-right-side">
        <span className="current-chap">Current Chapter</span>
        <span className="chap-num">Chapter 17</span>
        <button type="button" className="primary-btn" disabled>
          Update Progress
        </button>
      </div>
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
