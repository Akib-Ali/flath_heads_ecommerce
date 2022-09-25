import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { Home } from '../Pages/home'
import { Shop } from '../Pages/shop'
import WithSubnavigation from '../Components/navbar'
import { ProductDetail } from '../Pages/productdetail'

export const AllRoutes=()=>{

return(
 <div>
 <>
  <WithSubnavigation/>  
 

    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/collections/all' element={<Shop/>}/>
        <Route path='/collections/all/:id' element={<ProductDetail/>}/>

        
    </Routes>
    </>
 </div>
)
}