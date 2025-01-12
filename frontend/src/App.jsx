import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import FilteredData from './pages/FilteredData'
import ProdactDetail from './pages/ProdactDetail'
function App() {
  const [order,setOrder]=useState(null);
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
    <Route path='/order' element={<Order order={order}/>}/>
    <Route path='/filter-data' element={<FilteredData/>}/>
    <Route path='/product-detail/:id' element={<ProdactDetail/>}/>

    
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  )
}

export default App