import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/HomePage/Homepage'
import { BrowserRouter as Router,Routes,Route, useParams, useLocation } from 'react-router-dom'
import Category from './components/category/Category'
import Productpage from './pages/productPage/Productpage'
import Cartpage from './pages/cartpage/Cartpage'

function App() {

  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}>
          </Route>
          <Route path='/category/:gender/' element={<Category />} />
          <Route path='/category/:gender/:brand' element={<Category />} />
          <Route path='/productPage/:id' element={<Productpage/>}></Route>
          <Route path='/cart' element={<Cartpage></Cartpage>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
