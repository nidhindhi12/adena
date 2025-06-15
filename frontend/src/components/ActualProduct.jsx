import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const ActualProduct = () => {
    const products = useSelector((state) => state.filterproduct.products);
    const isLoading = !products || products.length === 0;

    return (
        <>
            {
                isLoading ? (
                    <div className='loader'>
                        <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749984592/Loder-gazelle_zk6pgj.gif" alt="" />
                    </div>
                ) : (
                    <Row className=' flex-wrap justify-content-center col-gap-2 gap-4 mx-0'>
                        <p className=' text-center mt-3 fs-5 fw-medium'>Total Products:{products.length}</p>
                        {
                            products.map((item, index) => (

                                <Card style={{ width: '16rem' }} className='mt-4 px-0 border-0 bg-transparent' key={index}>

                                    <Card.Img variant="top" src={item.image[0].url} className='img-fluid'
                                        style={{ height: '300px', objectFit: 'cover' }} />
                                    <Card.Body className=' bg-transparent'>
                                        <h5 className='fs-6 fw-medium text-truncate'>{item.title}</h5>
                                        <Card.Text className=' fw-bold d-flex justify-content-between'>
                                            <span>&#x20B9; {item.price}</span>
                                            <span className='text-danger'>
                                                {item.discount ? `${item.discount} % Off` : ''}
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </Row>
                )
            }
        </>

    )
}

export default ActualProduct