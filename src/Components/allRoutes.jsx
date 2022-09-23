import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { Home } from '../Pages/home'
import { Shop } from '../Pages/shop'
import WithSubnavigation from '../Components/navbar'

export const AllRoutes=()=>{

return(
 <div>
 <>
  <WithSubnavigation/>  
 

    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>

        
    </Routes>
    </>
 </div>
)
}