import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../redux/axiosConfig';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const initialData = {
    title: '', author: '', category: 'Economy',
  };

  const [data, setData] = useState(initialData);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(api.fetchAddBook(data));
    dispatch(api.fetchBooks());
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
