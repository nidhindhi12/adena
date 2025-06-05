import React from 'react'
import admin_logo from '../../images/admin-logo.svg'
import '../Data'
import { adminnavbar } from '../Data'
import { Offcanvas, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { offcanvasAdminToggle } from '../../Store/slice/Offcanvas_slice'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = () => {
  const admincanvasshow = useSelector(state => state.offcanvasmenu.adminShow);
  const dispatch = useDispatch();
 

  return (
    <>
      <Offcanvas show={admincanvasshow} onHide={() => dispatch(offcanvasAdminToggle())} responsive="md" className='px-2  vh-100' style={{ backgroundColor: 'var(--admin-hover)', width: '350px' }} >

        <Offcanvas.Title>
          <div className=' d-flex gap-3  pt-3 justify-content-start' >
            <img src={admin_logo} alt="" width={30} />
            <span className=' text-white fs-3 fw-bold'>Adena</span>

          </div>
        </Offcanvas.Title>
        <Offcanvas.Body>
          <div>
            <ul className=' list-unstyled mt-4'>
              {
                adminnavbar.map((item, index) => (
                  <li className='  mb-2  px-auto mx-2  py-2 fw-semibold d-flex gap-3' key={index}>
                    <div className=' icon-color '><item.icon /></div>

                    <Link to={item.path} className=' text-white'>{item.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar