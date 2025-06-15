import React from 'react'
import { Routes, Route } from "react-router-dom"
import Wishlist from '../components/Wishlist'
import Home from "../components/Home"
import EndUserLayout from '../Layout/EndUserLayout'
import ShowProducts from '../components/ShowProducts'

const EndUserroute = () => {
    return (
        <Routes >
            <Route path='/' element={<EndUserLayout />}>
                <Route index element={<Home />} />
                {/* <Route path/> */}
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/filterproduct' element={<ShowProducts />} />

            </Route>
        </Routes>
    )
}

export default EndUserroute
