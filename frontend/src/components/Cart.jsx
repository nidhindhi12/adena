import React from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    console.log(products);

    return (

        <>
            <Container>
                <div className='d-flex mx-0  justify-content-between align-items-center'>
                    <span className='fw-semibold text-nowrap' style={{ color: 'var(--icon-color)', fontSize: 'var( --section-heading)' }}>Cart Details</span>
                    <p className=' text-capitalize mb-0 text-end'>Home /Cart</p>
                </div>
                <div className='image text-center position-relative mt-2'>
                    <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749888603/PLP-Flower-Icon_zthbyq.svg" alt="" className=' position-absolute img-pos' />
                </div>
                <Row>
                    <Col md={8}>
                        {
                            products.map((item, index) => (
                                <div>

                                    <div className="product-img">
                                        <img src='' alt="" />
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            ))

                        }
                    </Col>
                    <Col md={4}></Col>

                </Row>
            </Container>
        </>
    )

}

export default Cart

