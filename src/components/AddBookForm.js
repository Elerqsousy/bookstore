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
    e.target.reset();
    await dispatch(api.fetchAddBook(data));
    dispatch(api.fetchBooks());
  };
  return (
    <section className="add-book-section">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <input name="title" placeholder="Book title" type="text" onChange={(e) => handleOnChange(e)} />
        <input name="author" placeholder="Author" type="text" onChange={(e) => handleOnChange(e)} />
        <select name="category" placeholder="Category" text="Category">
          <option value="economy">Economy</option>
        </select>
        <button type="submit" className="primary-btn">ADD BOOK</button>
      </form>
    </section>
  );
};
export default AddBookForm;
