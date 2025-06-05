import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import AdminHeader from '../components/Admin/AdminHeader'
import Sidebar from '../components/Admin/Sidebar'
import AdminFooter from '../components/Admin/AdminFooter'

const Adminlayout = () => {
  return (
    <>
      <div className='d-md-block d-none' style={{ 'backgroundColor': 'var(  --admin-bg-color)' }}>
        <Row className=' mx-0'>
          <Col className='px-0' md={2} style={{ backgroundColor: 'var(--admin-hover)' }} >
            <Sidebar />
          </Col>
          
          <Col className=' position-relative px-0 mx-3'>
            <div> <AdminHeader /></div>
            <div><Outlet /></div>

            <div className=' position-absolute bottom-0 w-100 rounded rounded-3'>
              <AdminFooter />
            </div>
          </Col>
        </Row>
      </div>
      <div className=' d-md-none d-block 'style={{ 'backgroundColor': 'var(  --admin-bg-color)' }}>
        <div> <AdminHeader /></div>
        <Sidebar/>
        <Outlet/>
        <div className=' fixed-bottom w-100 rounded rounded-3'>
          <AdminFooter/>
        </div>
      </div>


    </>
  )

}

export default Adminlayout
