import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Adminlayout from '../Layout/Adminlayout'
import Dashboard from '../components/Admin/Dashboard'
import Product from '../components/Admin/Product'
import Employee from '../components/Admin/Employee'
import Orders from '../components/Admin/Orders'


const Adminroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<Adminlayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/employee' element={<Employee />} />
                    <Route path='/admin/products' element={<Product />} />
                    <Route path='/admin/orders' element={<Orders />} />
                    
                </Route>
            </Routes>
        </>
    )
}

export default Adminroutes
