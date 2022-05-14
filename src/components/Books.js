import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../redux/axiosConfig';
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';

const Books = () => {
  const { bookList } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(api.fetchBooks());
  }, []);

  return (
    <div className="books-container">
      <section className="book-cards-container">
        {bookList.map((book) => (
          <BookCard
            key={book.item_id}
            id={book.item_id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
      </section>
      <AddBookForm />
    </div>
  );
};

export default Books;
