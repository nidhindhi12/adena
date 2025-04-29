import React from 'react'
import { Routes, Route } from "react-router-dom"
import Wishlist from '../components/Wishlist'
import Home from "../components/Home"
import EndUserLayout from '../Layout/EndUserLayout'

const EndUserroute = () => {
    return (
        <Routes >
            <Route path='/' element={<EndUserLayout />}>
                <Route index element={<Home />} />
                <Route path='/wishlist' element={<Wishlist />} />
               
            </Route>
        </Routes>
    )
}

export default EndUserroute
