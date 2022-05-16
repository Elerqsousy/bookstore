import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { category, title, author } = props;
  return (
    <div className="book">
      <span className="category">{category}</span>
      <h2>{title}</h2>
      <span className="author">{author}</span>
    </div>

  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
