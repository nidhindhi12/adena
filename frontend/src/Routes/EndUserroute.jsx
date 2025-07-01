import React from 'react'
import { Routes, Route } from "react-router-dom"
import Wishlist from '../components/Wishlist'
import Home from "../components/Home"
import EndUserLayout from '../Layout/EndUserLayout'
import ShowProducts from '../components/ShowProducts'
import Cart from '../components/Cart'
import { Protectedroute } from '../utils/Protectedroute'
import ActualProduct from '../components/ActualProduct'

const EndUserroute = () => {
    return (
        <Routes >
            <Route path='/' element={<EndUserLayout />}>
                <Route index element={<Home />} />
                {/* <Route path/> */}
                <Route path='/wishlist' element={<Protectedroute><Wishlist /></Protectedroute>} />
                <Route path='/filterproduct/:itemName' element={<Protectedroute><ShowProducts /></Protectedroute>} />
               
                <Route path='/cart' element={<Protectedroute><Cart /></Protectedroute>} />
            </Route>
        </Routes>
    )
}

export default EndUserroute
