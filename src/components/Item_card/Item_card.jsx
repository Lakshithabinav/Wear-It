import React from 'react'
import './Item_card.css'

function Item_card(props) {
  return (
    <div className='container'>
      <div className='img-container'>
      <img src={props.value.img} alt="" />
      </div>
      <div className='product-discription'>
        <p className='productName'>{props.value.name}</p>
        <p>{props.value.brand}</p>
        <p>
            <span className='productNewPrice'>₹ {props.value.newPrice}</span> 
            <span className='productOldPrice'>{props.value.oldPrice}</span> 
            <span className='offer'>{props.value.offer}% Offer</span>    
        </p>
      </div>


    </div>
  )
}

export default Item_card
