import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import ActualProduct from './ActualProduct';
const ShowProducts = () => {
    const getfilter = useSelector((state) => state.filterproduct.selectFilter);
    console.log(getfilter,"dchsghj");

    return (
        <>
            <Container>
                <Row className=' mx-0 mt-4 justify-content-between align-items-center'>
                    <Col>
                        <div className='d-flex gap-3 align-items-center'>
                            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749908565/filter-default_auuhsl.svg" alt="" />
                            <span className=' fs-4 fw-semibold' style={{ color: 'var(--icon-color)' }}>Sort & filter</span>
                        </div>
                    </Col>
                    <Col>
                        <p className=' text-capitalize mb-0 text-end py-2'>Home / <span style={{ color: 'var(--icon-color)' }} className=' fw-bolder fs-14'>{getfilter}</span></p>
                    </Col>
                </Row>
                <div className='image text-center position-relative mt-2'>
                    <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749888603/PLP-Flower-Icon_zthbyq.svg" alt="" className=' position-absolute img-pos' />
                </div>
            </Container>
            <ActualProduct />
        </>
    )
}

export default ShowProducts

