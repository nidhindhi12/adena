import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Adminlayout from '../Layout/Adminlayout'
import Dashboard from '../components/Admin/Dashboard'
import Product from '../components/Admin/Product'
import Employee from '../components/Admin/User'
import Orders from '../components/Admin/Orders'
import Category from '../components/Admin/Category'
import Metal from '../components/Admin/Metal'
import Ocassion from '../components/Admin/Ocassion'
import ProductList from '../components/Admin/ProductList'
import User from '../components/Admin/User'
import { AdminProtectedRoutes } from '../utils/Protectedroute'


const Adminroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<Adminlayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/user' element={<User/>} />
                    <Route path='/admin/products' element={<Product />} />
                    <Route path='/admin/orders' element={<Orders />} />
                    <Route path='/admin/category' element={<Category />} />
                    <Route path='/admin/metal' element={<Metal />} />
                    <Route path='/admin/ocassion' element={<Ocassion />} />
                    <Route path='/admin/productlist' element={<ProductList />} />
                </Route>
            </Routes>
        </>
    )
}

export default Adminroutes
