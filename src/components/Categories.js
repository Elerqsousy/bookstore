import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Check status</button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
