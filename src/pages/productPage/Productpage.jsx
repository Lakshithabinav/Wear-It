import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Productpage.css'
import { AiFillThunderbolt } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { allproducts } from '../../helper/allProducts';
import { addCart } from '../../slice/cartSlice';
import { useDispatch } from 'react-redux';

function Productpage() {
    const { id } = useParams();
    const productId = parseInt(id); 
    const [product, setProduct] = useState("")
    const[sizeSelected,setSizeSelected] = useState("");
    const[quantity,setQuantity] = useState(1);
    
    const dispatch = useDispatch();
    const handleChange = ()=>{
        document.title ="Product";
        console.log("Hii")
        const product = allproducts.find(pro => pro.id === productId);
        setProduct(product)
        window.scroll(0,0);
    }
    function handleAddToCart(){
        dispatch(addCart({ id: productId, size :sizeSelected,quantity :quantity }));
    }
    useEffect(()=>{
        handleChange()
    },[id])
    useEffect(()=>{
        console.log("hii")
      })
    return (
        <div>
            {product ? (
                <div className='product-container'>
                    <div className='image-div'>
                        <img src={product.img}  />
                    </div>
                    <div className='content-div'>
                        <p className='name'>{product.name}</p>
                        <p className='brand'>{product.brand}</p>
                        <div className='price-component'>
                            <p className='new-peice'>{product.newPrice}</p>
                            <p className='old-price'>{product.oldPrice}</p>
                            <p className='offer'>{product.offer}% Offer</p>
                        </div>
                        <div className='size-button-container'>
                            <button onClick={()=>{setSizeSelected("S")}} className={sizeSelected==="S"?"buttonOn":"buttonOff"}>
                                S
                            </button>
                            <button onClick={()=>{setSizeSelected("M")}} className={sizeSelected==="M"?"buttonOn":"buttonOff"}>
                                M
                            </button>
                            <button onClick={()=>{setSizeSelected("L")}} className={sizeSelected==="L"?"buttonOn":"buttonOff"}>
                                L
                            </button>
                            <button onClick={()=>{setSizeSelected("XL")}} className={sizeSelected==="XL"?"buttonOn":"buttonOff"}>
                                XL
                            </button>
                            <div className='quantityBoxOuterDiv'>
                                <div className='decreaseicon'onClick={() => { if(quantity>1){setQuantity(q => q - 1) }}}>-</div>
                                <input type="text" className='quantitybox' value={quantity} readOnly/>
                                <div className='increaseicon' onClick={() => { setQuantity(q => q + 1) }}>+</div>
                            </div>
                        </div>
                        <div className='bandc'>
                            <button className='buyNow' >
                                <AiFillThunderbolt className='icon'/>
                                <span>Buy Now</span>
                            </button>
                            <button className='addToCart' onClick={handleAddToCart}>
                                <IoCart className='icon'/>
                                <span>Add To Cart</span>
                            </button>
                        </div>
                        <div className='productDiscriptionContainer'>
                            <p className='productDiscriptionHeading'>Product discription:</p>
                            <p className='prodctDiscriptionContent'>&ensp;&ensp; {product.description}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Product Not Found</h2>
                </div>
            )}
        </div>
    );
}

export default Productpage;
