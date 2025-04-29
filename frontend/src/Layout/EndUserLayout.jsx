import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const EndUserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )

}

export default EndUserLayout
