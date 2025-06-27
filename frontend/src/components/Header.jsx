import React, { useEffect } from 'react'
import { Container, Badge, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
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
import { clearLogout } from '../Store/slice/AuthSlice';
import { headerdata } from './Data';



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleModal = () => {
        dispatch(changeIsOpen());
    }
    const handleOffcanvas = () => {
        dispatch(offcanvasToggleShow())
    }
    const handleSearch = () => {
        dispatch(searchToggleShow());
    }
    const handleLogout1 = () => {
        localStorage.removeItem('token');
        dispatch(clearLogout());
    }
    const handleFilter = (item) => {
        dispatch(setgetfilter(item));
    }
    const handlewishlist = () => {

        const token = localStorage.getItem('token');
        if (token) {
            navigate('/wishlist');
        }
        else
            dispatch(changeIsOpen())
    }
    const auth = useSelector((state) => state.auth.authvalue)
    const isOpen = useSelector((state) => state.modalMenu.isopen)
    const wishlist = useSelector((state) => state.filterproduct.countwishlist);
    console.log(wishlist);



    return (
        <>
            <Navbar expand="lg" className=" px-4 bg-color text-color">
                <Container fluid>
                    <Navbar.Brand className='d-none d-lg-block'>
                        <Link to='/'> <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517034/download_qd4tvl.svg   " alt="" width={140} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='d-none' />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className=" my-2 my-lg-0 navhover mx-auto gap-4" style={{ maxHeight: '100px' }} navbarScroll>z
                            {
                                headerdata.map((item, index) => (
                                    <Link to="/filterproduct" style={{ fontFamily: 'var(--secondary-font)' }} onClick={() => handleFilter(item)} key={index}>{item}</Link>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <div className="header-icons d-flex gap-2 justify-content-end text-color fw-bold d-none d-lg-flex">
                        <div className='position-relative'><FiSearch className=' fs-4' onClick={handleSearch} />
                            <Searchbox />
                        </div>
                        <div className='position-relative'>
                            <p onClick={handlewishlist} className='mb-0'> <RiPokerHeartsLine className=' fs-4' /></p>
                            <div className=' position-absolute badge-position '><Badge className='rounded-5' style={{ backgroundColor: "var(--icon-color) !important" }}>{wishlist}</Badge></div>
                        </div>
                        <div className=' position-relative'>
                            <RiUser6Fill className='fs-4' onClick={handleModal} />
                            {
                                auth ?
                                    (<div className="position-absolute login-drop z-3 text-center" >
                                        <div className={isOpen ? 'd-block' : 'd-none'} style={{ backgroundColor: 'var(--admin-hover)', padding: '10px 20px', height: '50px', borderRadius:'3px' }}>
                                            {/* <div className=' mb-2'> <Link to='/myaccount' className='text-white'>My Account</Link></div> */}
                                            <div className=' mb-2'> <span className='text-white cursor' onClick={handleLogout1}>Logout</span></div>
                                        </div>
                                    </div>)
                                    :
                                    (<Signup_login />)
                            }
                        </div>
                        <div className=' position-relative' onClick={() => navigate('/cart')}><IoIosCart className=' fs-4' />
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
