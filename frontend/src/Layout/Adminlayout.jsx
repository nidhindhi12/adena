import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import AdminHeader from '../components/Admin/AdminHeader'
import Sidebar from '../components/Admin/Sidebar'
import AdminFooter from '../components/Admin/AdminFooter'

const Adminlayout = () => {
  return (
    <>
      <AdminHeader />
      <div>
        <Row className=' mx-0'>
          <Col className='px-0 vh-90 bg-info' md={3}>
            <Sidebar />
          </Col>
          <Col className='px-0' md={9}>
            <div>
              <Outlet />
            </div>
            <div>
              <AdminFooter />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )

}

export default Adminlayout
