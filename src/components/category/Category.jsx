import React from 'react';
import { useParams } from 'react-router-dom';
import { allproducts } from '../../helper/allProducts';
import Item_card from '../Item_card/Item_card';
import { Link } from 'react-router-dom';
import './Category.css'
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../slice/currentpageSlice';
function Category() {
  const {gender,brand} = useParams();
  const dispatch = useDispatch();
  dispatch(setCurrentPage(gender));
  return (
    <>
    <div className='list-grid'>
      
      {allproducts
      .filter(product => product.category === gender)
      .map((product) => (
        <Link to ={`/productPage/${product.id}`}className='list-grid-link'>
        <Item_card key={product.id} value={product} />
        </Link>
      ))}

    </div>
    </>
  );
}

export default Category;
