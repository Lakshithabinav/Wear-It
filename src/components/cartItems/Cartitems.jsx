import React, { useState, useEffect } from 'react';
import './CartItems.css';
import { allproducts } from '../../helper/allProducts';
import { ImCross } from "react-icons/im";
import { increamentQuantity, decreamentQuantity, handleSizeChange,deleteCartItem } from '../../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function Cartitems(props) {
  const [item, setItem] = useState(null);
  // Use useSelector to get the item from the Redux store
  const thisproduct = useSelector((state) => state.cartitem.value.find(item => item.id === props.id));
  useEffect(() => {
    const filteredItem = allproducts.find(p => p.id === props.id);
    setItem(filteredItem);
  }, [props.id]); 
  const dispatch = useDispatch();

  if (!item) {
    return null; 
  }

  return (
    <div className='itemsDiv'>
      <div className='cancelButton' onClick={()=>dispatch(deleteCartItem(props.id))}><ImCross /></div>
      <div className="imgDiv">
        <img src={item.img} alt="Product" />
      </div>
      <div className="itemContent">
          <p className='productName'>{item.name}</p>
          <p className='brand'>{item.brand}  </p>
          <div className='price-component'>
            <div>
            <p className='new-peice'>Price :{item.newPrice}</p>
            <p> Total Price :{item.newPrice * thisproduct.quantity}</p>
            </div>
            <div className='quantityBoxOuterDiv'>
              <div className='decreaseicon' onClick={() => { if (thisproduct.quantity > 1) { dispatch(decreamentQuantity(props.id)); } }}>-</div>
              <input type="text" className='quantitybox' value={thisproduct.quantity || ''} readOnly/>
              <div className='increaseicon' onClick={() => { dispatch(increamentQuantity(props.id)); }}>+</div>
            </div>
          </div>
          
          <div className='size-button-container'>
              <button onClick={() => dispatch(handleSizeChange({ id: props.id, newSize: "S" }))} className={thisproduct.size === "S" ? "buttonOn" : "buttonOff"}>S</button>
              <button onClick={() => dispatch(handleSizeChange({ id: props.id, newSize: "M" }))} className={thisproduct.size === "M" ? "buttonOn" : "buttonOff"}>M</button>
              <button onClick={() => dispatch(handleSizeChange({ id: props.id, newSize: "L" }))} className={thisproduct.size === "L" ? "buttonOn" : "buttonOff"}>L</button>
              <button onClick={() => dispatch(handleSizeChange({ id: props.id, newSize: "XL" }))} className={thisproduct.size === "XL" ? "buttonOn" : "buttonOff"}>XL</button>
          </div>
      
      </div>
    </div>
  );
}

export default Cartitems;
