import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Mainfooter from '../components/Mainfooter'

const EndUserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Mainfooter/>
        </>
    )

}

export default EndUserLayout
