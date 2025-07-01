import React from 'react'
import collection from '../../images/collection.jpg'
import chain from '../../images/chain.webp'
import bangle from '../../images/bangle.webp'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Collection = () => {
    return (
        <div className=' spacer'>
            <Container className=' px-0'>
                <h1 style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)" }} className=' text-center heading-size mb-0'>Adena Collection
                </h1>
                <p className=' sub-heading-size text-center' style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)",opacity:"0.6" }}>Explore our newly launched collection</p>
                <Row className=' g-2 mx-0 flex-wrap px-4'>
                    <Col md={6}>
                        <p to='/'> <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517608/collection_ctvmpb.jpg" alt="" className='rounded-4 img-fluid' /></p>

                    </Col>
                    <Col md={6}>

                        <p to='/'><img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517639/chain_ev15l2.webp" alt="" className='rounded-4 mb-2 img-fluid' /></p>
                        <p to='/'> <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517658/bangle_wbtsh0.webp" alt="" className='rounded-4 img-fluid' /></p>

                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Collection
