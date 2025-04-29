import React from 'react'
import { Container, Badge, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/Indriya-Logo.svg'
import { RiPokerHeartsLine, RiUser6Fill, RiMenu3Line } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { changeIsOpen } from '../Store/slice/ModaSlice';
import Signup_login from '../components/Signup_login'
import { offcanvasToggleShow, searchToggleShow } from '../Store/slice/Offcanvas_slice';
import OffcanvasOptions from './mobile_offcanvas'
import Searchbox from './Searchbox';

const Header = () => {
    const dispatch = useDispatch()
    const handleModal = () => {
        dispatch(changeIsOpen());
    }
    const handleOffcanvas = () => {
        dispatch(offcanvasToggleShow())
    }
    const handleSearch = () => {
        dispatch(searchToggleShow());
    }
    const searchIsOpen = useSelector((state) => state.offcanvasmenu.searchShow);
    return (
        <>
            <Navbar expand="lg" className=" px-4 bg-color text-color">
                <Container fluid>
                    <Navbar.Brand className='d-none d-lg-block'>
                        <Link to='/'> <img src={logo} alt="" width={140} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='d-none' />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className=" my-2 my-lg-0 navhover mx-auto gap-4" style={{ maxHeight: '100px' }} navbarScroll>
                            <Link to="#">Shop All</Link>
                            <Link to="#">Celebs Favourite</Link>
                            <Link to="#">Best Sellers</Link>
                            <Link to="#">New Arrivals</Link>
                            <Link to="#">Daily Wear</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="header-icons d-flex gap-2 justify-content-end text-color fw-bold d-none d-lg-flex">
                        <div className='position-relative'><FiSearch className=' fs-4' onClick={handleSearch} />
                            <Searchbox/>
                        </div>

                        <div className='position-relative'>
                            <Link to='/wishlist'> <RiPokerHeartsLine className=' fs-4' /></Link>
                            <div className=' position-absolute badge-position d-none'><Badge>0</Badge>
                            </div>
                        </div>
                        <div> <RiUser6Fill className=' fs-4 ' onClick={handleModal} /></div>
                        <Signup_login />
                        <div className=' position-relative'><IoIosCart className=' fs-4' />
                            <div className=' position-absolute badge-position d-none'><Badge>0</Badge></div>
                        </div>
                    </div>
                    <div className='d-flex d-lg-none justify-content-between align-items-center w-100 '>
                        <RiMenu3Line className='fs-4 ' onClick={handleOffcanvas} />
                        < OffcanvasOptions />
                        <Link to='/'> <img src={logo} alt="" width={140} /></Link>
                        <div className='position-relative'><FiSearch className=' fs-4' onClick={handleSearch} /></div>
                    </div>

                </Container>
            </Navbar>
        </>
    )
}
export default Header
