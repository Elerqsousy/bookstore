import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../redux/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const initialData = {
    title: '', author: '', category: 'Economy',
  };

  const [data, setData] = useState(initialData);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAdded(data));
  };
  return (
    <form onSubmit={(e) => { handleSubmit(e); }}>
      <input name="title" placeholder="Book title" type="text" onChange={(e) => handleOnChange(e)} />
      <input name="author" placeholder="Author" type="text" onChange={(e) => handleOnChange(e)} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};
export default AddBookForm;
