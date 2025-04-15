import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
import logo from '../images/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";





const Header = () => {
    return (
        <>
            {/* <div className=' py-2 text-white fw-bold' style={{ 'backgroundColor': 'var(--marquee-color)' }}>
                <marquee behavior="scroll" direction="right">
                    Free Delivery On Orders Over &#8377; 1000 & 100 Day Returns
                </marquee>
            </div> */}
            <nav>
                <Container>
                    <Row className=' justify-content-between py-3'>
                        <Col lg={3}>
                            <div>
                                <img src={logo} alt="" width={80} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Form>
                                <Form.Control
                                    type='search'
                                    placeholder='Search Gold ,Diamond Jewellery and more...'
                                    className='w-100 rounded-3'


                                />
                            </Form>
                        </Col>
                        <Col lg={3}>
                            <div className="header-icons text-end ">
                                <FaRegHeart className=' fs-4 icon-color' />
                                <LuUser className=' fs-4 mx-2 icon-color' />
                                <HiOutlineShoppingBag className=' fs-4 icon-color' />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>

        </>
    );
};

export default Header;
