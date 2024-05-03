import React from 'react'
import Adtemplate from '../../components/Home-page-ad/Adtemplate'
import './Homepage.css'
import Propular_products from '../../components/popular-products/Propular_products'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../slice/currentpageSlice'
function Homepage() {
   const dispatch = useDispatch();
   dispatch(setCurrentPage("home"));
  return (
    <div className='home-div'>
      <Adtemplate/>
    <div className='product-list-container'>
      <div className='product-list'><Propular_products/></div>
    </div>
    </div>
  )
}

export default Homepage
