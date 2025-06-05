import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CreateProduct = ({ formData, setFormData, handleImageChange, addProduct, imgPrev }) => {
    const categorydata = useSelector(state => state.productdata.category);
    const genderdata = useSelector(state => state.productdata.gender);
    const metaldata = useSelector(state => state.productdata.metal);
    const ocassiondata = useSelector(state => state.productdata.ocassion);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="pb-2">
            <Container className='my-3'>
                <h5 className=' fw-bold text-white  ps-2' style={{ fontFamily: 'var( --secondary-font-1)' }}>Create Products</h5>
                <div className='   text-center  mx-auto py-2 fw-bold fs-5 mt-3' style={{ backgroundColor: 'var(--admin-bg-color)', width: "90%" }}>
                    <p className=' text-white my-3' style={{ fontFamily: 'var( --secondary-font)-1' }}>Add product details</p>
                    <div>
                        <Form className=' text-start mt-3 product-form px-3'>
                            <Row className=' mb-2 admin-form' >

                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label >Title</Form.Label>
                                    <Form.Control type="text" name='title' className='admin-control' value={formData.title} placeholder="Enter Title" onChange={handleInputChange} />
                                </Form.Group>
                            </Row>
                            <Row className='mb-2' >
                                <Form.Group as={Col} s={12} sm={6} controlId="formGridPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="text" value={formData.price} placeholder="Enter Price" name='price' className='admin-control' onChange={handleInputChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridDiscount">
                                    <Form.Label>Discount/Offer</Form.Label>
                                    <Form.Control type="text" value={formData.discount} placeholder="Enter Discount" name='discount' className='admin-control' onChange={handleInputChange} />
                                </Form.Group>
                            </Row>
                            <Row className=' mb-2'>
                                <Form.Group as={Col} controlId="formGridDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" value={formData.description} rows={3} placeholder='Enter description' name='description' className='admin-control' onChange={handleInputChange} />
                                </Form.Group>
                            </Row>
                            <Row className='mb-2' >
                                <Form.Group as={Col} s={12} sm={6} controlId="formGridSize">
                                    <Form.Label>Product Size</Form.Label>
                                    <Form.Control type="text" value={formData.size} placeholder="Enter size" name='size' className='admin-control' onChange={handleInputChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridkaratage">
                                    <Form.Label>Karatage</Form.Label>
                                    <Form.Control type="text" value={formData.karatage} placeholder="Enter karatage" className='admin-control' name='karatage' onChange={handleInputChange} />
                                </Form.Group>
                            </Row>
                            <Row className='mb-2'>
                                <Form.Group as={Col} xs={12} sm={6} controlId="formGridGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select className='text-black' name='gender'
                                        value={formData.gender} onChange={handleInputChange}>
                                        <option >Choose...</option>
                                        {
                                            genderdata.map((value, index) => (
                                                <option key={index} value={value._id} className='text-black'>{value.gendername}</option>
                                            ))
                                        }
                                    </Form.Select>
                                   </Form.Group>
                                <Form.Group as={Col} controlId="formGridCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select className='accordion-headertext-black' name='category' value={formData.category} onChange={handleInputChange}>
                                        <option>Choose...</option>
                                        {
                                            categorydata.map((value, index) => (
                                                <option key={index} value={value._id} className='text-black'>{value.categoryname}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className='mb-2'>
                                <Form.Group as={Col} xs={12} sm={6} controlId="formGridMetal">
                                    <Form.Label>Metal</Form.Label>
                                    <Form.Select className='text-black' name="metal" value={formData.metal} onChange={handleInputChange}>
                                        <option>Choose...</option>
                                        {
                                            metaldata.map((value, index) => (
                                                <option key={index} value={value._id} className='text-black'>{value.metalname}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridOccasion">
                                    <Form.Label>Ocassion</Form.Label>
                                    <Form.Select className='text-black' value={formData.ocassion} name='ocassion' onChange={handleInputChange}>
                                        <option>Choose...</option>
                                        {
                                            ocassiondata.map((value, index) => (
                                                <option key={index} value={value._id} className='text-black'>{value.ocassionname}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} controlId="formGridImage">
                                <Form.Label>Product Image Uploads</Form.Label>
                                <Form.Control type="file" name='image' multiple className='px-4 text-white-50' onChange={handleImageChange} />
                                {
                                    imgPrev.map((img, i) => (
                                        <span key={i} className=' px-2 pt-4 d-inline-block'>
                                            <img src={img.src} alt="" style={{ width: '200px', height: '180px' }} />
                                        </span>
                                    )
                                    )}
                            </Form.Group>
                            <div className=' text-center mt-3'>
                                <Button className="submit w-50 mb-5" style={{ backgroundColor: 'var(--admin-text-hover)' }} onClick={addProduct}>Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </Container>
        </div>
    )
}
export default CreateProduct


