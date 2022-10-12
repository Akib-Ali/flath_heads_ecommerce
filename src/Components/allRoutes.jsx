import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { Home } from '../Pages/home'
import { Shop } from '../Pages/shop'
import { ProductDetail } from '../Pages/productdetail'
import { MenProduct } from '../Pages/men'
import { WomenProduct } from '../Pages/women'
import Simple from '../Components/navbar'
import LargeWithLogoLeft from './footer'
import { Checkout } from './checkout'
import { Payment } from './payment'

export const AllRoutes=()=>{

return(
 <div>
 <>
   
   <Simple/> 
 

    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/collections/all' element={<Shop/>}/>
        <Route path='/collections/all/:id' element={<ProductDetail/>}/>
        <Route path='/collection/men-shop' element={<MenProduct/>}/>
         <Route path='/collection/women-shop' element={<WomenProduct/>} /> 
         <Route path="/checkout" element={<Checkout/>} />
         <Route path='/payment' element={<Payment/>}/>

        
    </Routes>

    <LargeWithLogoLeft/>
    </>
 </div>
)
}