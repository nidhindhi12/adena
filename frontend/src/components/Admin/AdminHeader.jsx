import React from 'react'
import logo from '../../images/Indriya-Logo.svg'
import { Row, Col } from 'react-bootstrap'
import { IoSearch } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { IoMdSunny } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { GoBellFill } from "react-icons/go";

const AdminHeader = () => {
  return (
    <div style={{ backgroundColor: 'var(--header-bg-color)' }}>
      <Row className=' px-5 py-2 mx-0 align-items-center'>
        <Col sm={3}>
          <img src={logo} alt="" />
        </Col>
        <Col sm={7}>
          <div className=' position-relative'>
            <input type="search" className=' w-100 py-1 border-0 rounded-4 px-2' placeholder='Search...' />
            <div className=' position-absolute top-0 start-50'>
              <IoSearch />
            </div>
          </div>
        </Col>
        <Col sm={2}>
          <div className=' d-flex justify-content-end gap-3 fs-5'>
            <LuSunMoon />
            <IoMdSunny />
            <MdMessage />
            <GoBellFill />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AdminHeader
