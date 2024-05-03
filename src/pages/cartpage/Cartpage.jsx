import React from 'react';
import './Cartpage.css';
import Cartitems from '../../components/cartItems/Cartitems';
import { useSelector } from 'react-redux';
import Cartitemtotal from '../../components/cartItemTotal/Cartitemtotal';

function Cartpage() {
  const cartAddedItems = useSelector((state)=>state.cartitem.value);
  console.log(cartAddedItems)
  return (
    <>
      <div className='pageContent'>
        <div className="pageTitle">
          Shopping Cart
        </div>
        <div className='itemAndPrice'>
          <div className="cartdisplayOuterdiv">
            <div className="cartItemDisplay">
              {cartAddedItems.map((list) => {
                return (
                  <Cartitems key={list.id} id={list.id} size={list.size} />
                );
              })}
            </div>
          </div>
          <div className='cartPrice'><Cartitemtotal/></div>
        </div>
      </div>
    </>
  );
}

export default Cartpage;
