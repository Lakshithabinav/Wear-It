import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allproducts } from '../../helper/allProducts';
import ItemCard from '../Item_card/Item_card';
import './Category.css';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../slice/currentpageSlice';

function Category() {
  const { gender } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(gender));
  }, [dispatch, gender]);
  

  return (
    <div className='list-grid'>
      {allproducts
        .filter(product => product.category === gender)
        .map((product) => (
          <Link to={`/productPage/${product.id}`} key={product.id} className='list-grid-link'>
            <ItemCard value={product} />
          </Link>
        ))}
    </div>
  );
}

export default Category;
