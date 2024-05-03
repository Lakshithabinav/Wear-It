import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FiShoppingCart } from "react-icons/fi";
import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

    const[pageSelect,setPageSelect] = useState("")
    const [seacrch, setSearch] = useState("")

    const currentPage = useSelector((state)=> state.currentpage.value)
    const noOfConst = useSelector((state)=> state.cartitem.value)
    function handlePageSelect(page){
        setPageSelect(page);
    }



    
  return (
    <div className='navigation-bar'>
      <div className='Pc-navigation-bar'>
      <div className='page-title'>
        <Link to ='/' className='pageTitleLink'><h1>Wear-it</h1></Link>
      </div>
      <div className='search-button'>
        <input type="text" placeholder='Search for brands and products' onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <ul  className='pc-view'>
      <li onClick={()=>handlePageSelect("men")}><Link to ='/category/men' className='navLink'>Men {currentPage==="men"?<hr></hr>:<></>}</Link></li>
        <li onClick={()=>handlePageSelect("women")}><Link to ='/category/women' className='navLink'>Woman{currentPage==="women"?<hr></hr>:<></>}</Link></li>
        <li onClick={()=>handlePageSelect("kids")}><Link to ='/category/kids' className='navLink'>kids {currentPage==="kids"?<hr></hr>:<></>}</Link></li>
        <Link to ='/cart' className="cart-div">
          <FiShoppingCart  className='cart-icon'/>
          <p className='cart-count'>{noOfConst.length}</p>
        </Link>
      </ul>
      <div className='SignIn'>
      <button>SignIn</button>
      </div>
      </div>
      <ul>
        <li onClick={()=>handlePageSelect("men")}><Link to ='/category/men' className='navLink'>Men {currentPage==="men"?<hr></hr>:<></>}</Link></li>
        <li onClick={()=>handlePageSelect("women")}><Link to ='/category/women' className='navLink'>Woman{currentPage==="women"?<hr></hr>:<></>}</Link></li>
        <li onClick={()=>handlePageSelect("kids")}><Link to ="/category/kids" className='navLink'>kids {currentPage==="kids"?<hr></hr>:<></>}</Link></li>
        <Link to ='/cart' className="cart-div">
          <FiShoppingCart  className='cart-icon'/>
          <p className='cart-count'>{noOfConst.length}</p>
        </Link>
      </ul>
      
    </div>
    
  )
} 

export default Navbar
