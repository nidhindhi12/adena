import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Teaser from './Teaser';

const Categories = () => {
  return (
    <div>
      <Container>
        <h1 style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)" }} className=' text-center heading-size mb-0'>Find Your Perfect Match</h1>
        <p className=' sub-heading-size text-center' style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)", opacity: "0.6" }}>Shop by Categories</p>
        <Row className=' text-center'>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749660916/b03fd0cfb31f62f1a76c195e375577db_ledbnn.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor ' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}> Earrings</p>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661056/9d81a57d5d2a8feccf0e901dc8192a6c_k9nf15.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}>Rings</p>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661349/808afe0892ea0a972eca54069d8ccef7_tzbfan.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}>Chains</p>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661631/bracelets-cat_jayyok.webp" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}>Bracelets</p>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661742/168f6e9fc55292c948709929038a9dc0_ju8c3e.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}>Bangles</p>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749662035/a9069844ae836f2f89df41a9ac68a3e8_thpp9t.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}>Ankelets</p>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661807/848c5577f6e420edc0a9e8b33088dede_byrhcj.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}>Mangalsutras</p>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749663800/14af4d856e3ee0b79e3b15f9e4004788_wibtay.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor' />
            <p className=' fs-5 fw-medium' style={{ fontFamily: 'var(--secondary-font)' }}>Necklaces</p>
          </Col>
        </Row>
      </Container>
      <Teaser/>
    </div>
  )
}

export default Categories
