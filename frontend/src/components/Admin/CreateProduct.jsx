import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const CreateProduct = ({formData ,setFormData, handleImageChange,addProduct }) => {
    return (
        <div className="pb-2">
            <Container className='my-3'>
                <h5 className=' fw-bold text-white  ps-2' style={{ fontFamily: 'var( --secondary-font-1)' }}>Create Products</h5>
                <div className='   text-center  mx-auto py-2 fw-bold fs-5 mt-3' style={{ backgroundColor: 'var(--admin-bg-color)', width: "90%" }}>
                    <p className=' text-white my-3' style={{ fontFamily: 'var( --secondary-font)-1' }}>Add product details</p>
                   
                    <div>
                        <Form className=' text-start mt-3 product-form px-3'>
                            <Row className=' mb-2' >
                               
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label >Title</Form.Label>
                                    <Form.Control type="text" name={formData.title} placeholder="Enter Title" />
                                </Form.Group>
                            </Row>
                            <Row className='mb-2' >
                                <Form.Group as={Col} s={12} sm={6} controlId="formGridPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Price" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridDiscount">
                                    <Form.Label>Discount/Offer</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Discount" />
                                </Form.Group>
                            </Row>
                            <Row className=' mb-2'>
                                <Form.Group as={Col} controlId="formGridDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder='Enter description' />
                                </Form.Group>
                            </Row>
                            <Row className='mb-2'>
                                <Form.Group as={Col} xs={12} sm={6} controlId="formGridGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control type="text" placeholder="Gender" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Category" />
                                </Form.Group>

                            </Row>
                            <Row className='mb-2'>
                                <Form.Group as={Col} xs={12} sm={6} controlId="formGridMetal">
                                    <Form.Label>Metal</Form.Label>
                                    <Form.Control type="text" placeholder="Enter metal" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridOccasion">
                                    <Form.Label>Ocassion</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Occasion" />
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} controlId="formGridImage">

                                <Form.Label>Product Image Uploads</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>

                            <div className=' text-center mt-3'>
                                <Button className="submit w-50 mb-5" style={{ backgroundColor: 'var(--admin-text-hover)' }}>Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default CreateProduct

