import React from 'react'
import { useSelector } from 'react-redux'
import { allproducts } from '../../helper/allProducts';
function Cartitemtotal() {
    
    const totalItem = useSelector((state) => state.cartitem.value);
    let totalQuantity =0
    let totalPrice = 0;
    totalItem.forEach(element => {
        totalQuantity += element.quantity;
        const product = allproducts.find(p=>p.id===element.id)
        totalPrice += element.quantity*product.newPrice
    });
  return (
    <div>
      <h1>Total cart : {totalQuantity}</h1>
      <h1> Total Price :{totalPrice}</h1>
      <p></p>
    </div>
  )
}

export default Cartitemtotal
