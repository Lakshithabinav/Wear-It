import React from 'react';
import { popularproducts } from '../../helper/popularproducts';
import Item_card from '../Item_card/Item_card';
import './Popular_products.css';
import { Link } from 'react-router-dom';
function Propular_products() {
  return (
    <>
    <div className='list-grid' >
      
      {popularproducts.map((product) => (
        <Link to ={`/productPage/${product.id}`}className='list-grid-link'>
        <Item_card key={product.id} value={product} />
        </Link>
      ))}

    </div>
    </>
  );
}

export default Propular_products;
