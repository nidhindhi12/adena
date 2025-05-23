import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { offcanvasToggleShow } from '../Store/slice/Offcanvas_slice';
import logo from '../images/Indriya-Logo.svg'
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import offcanvasgif from '../images/offcanvas.gif'
import samavapattern from '../images/Samava-Pattern.svg'
import Signup_login from '../components/Signup_login'
import { changeIsOpen } from '../Store/slice/ModaSlice';

function OffCanvasMobile({ name, ...props }) {
  const offcanvasShow = useSelector((state) => state.offcanvasmenu.toggleShow);
  const dispatch = useDispatch();
  const handleModal = () => {
    console.log('true')
    dispatch(changeIsOpen());
  }
  return (
    <>
      <Offcanvas show={offcanvasShow} onHide={() => dispatch(offcanvasToggleShow())} {...props} className='bg-color custom-canvas'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to='/'> <img src={logo} alt="" width={130} /></Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='px-0'>
          <div className=' d-flex flex-column  gap-4 text-color px-3' >
            <Link to="#" className=' d-flex  justify-content-between'>Shop All <span><FaAngleDown /></span></Link>
            <Link to="#" className=' d-flex  justify-content-between'>Celebs Favourite <span><FaAngleDown /></span></Link>
            <Link to="#" className=' d-flex  justify-content-between'>Best Sellers <span><FaAngleDown /></span></Link>
            <Link to="#" className=' d-flex  justify-content-between'>New Arrivals <span><FaAngleDown /></span></Link>
            <Link to="#" className=' d-flex  justify-content-between'>Daily Wear <span><FaAngleDown /></span></Link>
          </div>
          <div className='d-lg-none text-center mt-5'>
            <img src={offcanvasgif} alt="" width={170} />
            <div style={{ 'backgroundColor': "var(--icon-color)" }} className=' text-start text-white pt-2 position-relative pb-60'>
              <p className='px-3'>Wishlist</p>
              <p className=' px-3' style={{ cursor: 'pointer' }} onClick={handleModal}>Login/Sign Up</p>
              <Signup_login />

              <p className='px-3 '><input type="search" placeholder='search...' className=' w-100' /></p>
              <div className=' position-absolute bottom-0'>
                <img src={samavapattern} alt="" className='w-100' />
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default function OffcanvasOptions() {
  const config = {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,

  };

  return (
    <div className="m-3">
      <OffCanvasMobile {...config} />
    </div>
  );
}

