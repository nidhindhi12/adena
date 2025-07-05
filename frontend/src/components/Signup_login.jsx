// import React, { useState } from 'react'
// import { Modal, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
// import loginImg1 from '../images/loginImg1.jpg'
// import loginImg2 from '../images/loginImg2.jpg'
// import loginImg3 from '../images/loginImg3.jpg'
// import { useDispatch, useSelector } from 'react-redux';
// import { changeIsOpen } from '../Store/slice/ModaSlice';
// import { loginfield, signupfield } from './Data';
// import { Link } from 'react-router-dom';
// import axios from 'axios'
// import { showToast } from '../Store/slice/ToastSlice';
// import { changeauthvalue } from '../Store/slice/AuthSlice';



// const Signup_login = () => {
//     const imggallery = [loginImg1, loginImg2, loginImg3];
//     const [addUser, setAddUser] = useState({});
//     const isOpen = useSelector((state) => state.modalMenu.isopen)
//     const [toggleForm, setToggleForm] = useState(true)
//     const dispatch = useDispatch();
//     const handleToggleForm = () => setToggleForm(!toggleForm);



//     const handleAddUser = (e) => {
//         const { name, value } = e.target;
//         setAddUser({ ...addUser, [name]: value });
//     }
//     //#region Add new User
//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/', addUser);
//             if (response.data.status) {
//                  localStorage.setItem("token", response.data.data.token);
//                 localStorage.setItem("user", JSON.stringify(response.data.data.data));
//                 dispatch(showToast({ message: response.data.data.message, type: 'success' }))
//                 dispatch(changeauthvalue(response.data.data.data))

//             }
//         } catch (error) {

//             dispatch(showToast({ message: error.response?.data?.data?.message, type: "error" }))
//         }
//         dispatch(changeIsOpen());
//     }
//     //#endregion
//     //#region  login user
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/loginuser', addUser);

//             if (response.data.status) {
//                   localStorage.setItem("token", response.data.data.token);
//                 localStorage.setItem("user", JSON.stringify(response.data.data.data));
//                 dispatch(showToast({ message: response.data.data.message, type: 'success' }));
//                 dispatch(changeauthvalue(response.data.data.data));
            
//             }
//         }
//         catch (error) {
//             dispatch(showToast({ message: error.response?.data?.data?.message, type: "error" }))
//         }
//         dispatch(changeIsOpen());
//     }
//     return (
//         <>
//             <Modal fullscreen="sm-down" size='lg' show={isOpen} onHide={() => dispatch(changeIsOpen())} >
//                 <Modal.Body className=' p-0 overflow-hidden'>
//                     <Row className=' m-0 p-0 h-100 '  >
//                         <Col md={6} className='p-0 m-0 d-none d-md-block h-100' >
//                             <Carousel>{imggallery.map((item, index) => (
//                                 <Carousel.Item key={index}>
//                                     <img src={item} alt={`slide-s${index}`} className='w-100 rounded-start-3 vh-100  object-fit-cover' />
//                                 </Carousel.Item>
//                             ))}
//                             </Carousel>
//                         </Col>
//                         <Col sm={12} md={6}>
//                             <Modal.Header closeButton></Modal.Header>
//                             <Modal.Body style={{ 'borderColor': 'var(--header-bg-color' }} className=' pe-3 ps-3 pb-3'>
//                                 <h2 style={{ 'fontFamily': 'var(--secondary-font)' }}>
//                                     {toggleForm ? 'Sign Up' : 'Login In'}
//                                 </h2>
//                                 <span className=' opacity-75 fst-italic fw-700' style={{ 'fontSize': '14px' }}>Stay connected for exquisite designs and exclusive offers.</span>
//                                 <Form className='mt-3'>
//                                     {(toggleForm ? signupfield : loginfield).map((row, rowIndex) => (
//                                         <Row className="mb-3" key={rowIndex}>
//                                             {row.map((field, colIndex) => (
//                                                 <Form.Group as={Col} key={colIndex} controlId={field.id}>
//                                                     <Form.Control type={field.type} placeholder={field.placeholder}
//                                                         value={addUser[field.name] || ''} name={field.name}
//                                                         style={{
//                                                             border: 'none', borderBottom: '1px solid red', borderRadius: '0', boxShadow: 'none'
//                                                         }} onChange={handleAddUser}
//                                                     />
//                                                 </Form.Group>
                                                
//                                             ))}
//                                         </Row>
//                                     ))}
//                                     <label style={{ 'fontSize': '12px' }} className=' opacity-75 fw-700 mt-4' >
//                                         <input type="checkbox" className=' me-2 custom-checkbox' />
//                                         I agree to be contacted by Indriya Jewels regarding my interest via phone call, SMS, Text, WhatsApp or email.
//                                         <Link to="" className='text-color fw-bold'> T&C </Link>
//                                         and <Link to="" className='text-color fw-bold'>  Privacy Policy </Link>
//                                     </label>

//                                     <div className=' text-center mt-3 '>
//                                         <Button variant='transparent' className='btn-border rounded-0 py-2 w-100' style={{ 'color': 'var(--icon-color)' }} onClick={toggleForm ? handleSignUp : handleLogin}>
//                                             {toggleForm ? 'Sign Up' : 'Login In'}
//                                         </Button>
//                                     </div>
//                                     <div className=' text-center mt-3 '>
//                                         <Button variant='transparent' className='btn-border rounded-0 py-2 w-100' style={{ 'color': 'var(--icon-color)' }} onClick={handleToggleForm}>{toggleForm ? 'Already a member? Login In' : 'Not a member? Sign Up'}</Button>
//                                     </div>
//                                 </Form>
//                             </Modal.Body>
//                         </Col>
//                     </Row>
//                 </Modal.Body>
//             </Modal>
//         </>
//     )
// }
// export default Signup_login
import React, { useState } from 'react'
import { Modal, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import loginImg1 from '../images/loginImg1.jpg'
import loginImg2 from '../images/loginImg2.jpg'
import loginImg3 from '../images/loginImg3.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { changeIsOpen } from '../Store/slice/ModaSlice';
import { loginfield, signupfield } from './Data';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { showToast } from '../Store/slice/ToastSlice';
import { changeauthvalue } from '../Store/slice/AuthSlice';

const Signup_login = () => {
    const imggallery = [loginImg1, loginImg2, loginImg3];
    const [addUser, setAddUser] = useState({});
    const [errors, setErrors] = useState({});
    const isOpen = useSelector((state) => state.modalMenu.isopen);
    const [toggleForm, setToggleForm] = useState(true);
    const dispatch = useDispatch();

    const handleToggleForm = () => {
        setToggleForm(!toggleForm);
        setErrors({});
        setAddUser({});
    };

    const handleAddUser = (e) => {
        const { name, value } = e.target;
        setAddUser({ ...addUser, [name]: value });
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!addUser.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(addUser.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!addUser.password) {
            newErrors.password = "Password is required";
        } else if (addUser.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (toggleForm) { // Signup fields
            if (!addUser.name) {
                newErrors.name = "Name is required";
            }
            if (!addUser.phone) {
                newErrors.phone = "Phone number is required";
            } else if (!/^\d{10}$/.test(addUser.phone)) {
                newErrors.phone = "Phone number must be 10 digits";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log('hello')

        try {
            const response = await axios.post('http://localhost:5000/api/', addUser);
            if (response.data.status) {
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.data.data));
                dispatch(showToast({ message: response.data.data.message, type: 'success' }));
                dispatch(changeauthvalue(response.data.data.data));
            }
        } catch (error) {
            dispatch(showToast({ message: error.response?.data?.data?.message, type: "error" }));
        }
        dispatch(changeIsOpen());
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            
            const response = await axios.post('http://localhost:5000/api/loginuser', addUser);
            if (response.data.status) {
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.data.data));
                dispatch(showToast({ message: response.data.data.message, type: 'success' }));
                dispatch(changeauthvalue(response.data.data.data));
            }
        } catch (error) {
            dispatch(showToast({ message: error.response?.data?.data?.message, type: "error" }));
        }
        dispatch(changeIsOpen());
    };

    return (
        <Modal fullscreen="sm-down" size='lg' show={isOpen} onHide={() => dispatch(changeIsOpen())}>
            <Modal.Body className='p-0 overflow-hidden'>
                <Row className='m-0 p-0 h-100'>
                    <Col md={6} className='p-0 m-0 d-none d-md-block h-100'>
                        <Carousel>
                            {imggallery.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <img src={item} alt={`slide-${index}`} className='w-100 rounded-start-3 vh-100 object-fit-cover' />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col sm={12} md={6}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body style={{ borderColor: 'var(--header-bg-color)' }} className='pe-3 ps-3 pb-3'>
                            <h2 style={{ fontFamily: 'var(--secondary-font)' }}>
                                {toggleForm ? 'Sign Up' : 'Log In'}
                            </h2>
                            <span className='opacity-75 fst-italic fw-700' style={{ fontSize: '14px' }}>
                                Stay connected for exquisite designs and exclusive offers.
                            </span>
                            <Form className='mt-3'>
                                {(toggleForm ? signupfield : loginfield).map((row, rowIndex) => (
                                    <Row className="mb-3" key={rowIndex}>
                                        {row.map((field, colIndex) => (
                                            <Form.Group as={Col} key={colIndex} controlId={field.id}>
                                                <Form.Control
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    value={addUser[field.name] || ''}
                                                    name={field.name}
                                                    style={{
                                                        border: 'none',
                                                        borderBottom: '1px solid red',
                                                        borderRadius: '0',
                                                        boxShadow: 'none'
                                                    }}
                                                    onChange={handleAddUser}
                                                />
                                                {errors[field.name] && (
                                                    <span style={{ color: 'red', fontSize: '12px' }}>
                                                        {errors[field.name]}
                                                    </span>
                                                )}
                                            </Form.Group>
                                        ))}
                                    </Row>
                                ))}

                                <label style={{ fontSize: '12px' }} className='opacity-75 fw-700 mt-4'>
                                    <input type="checkbox" className='me-2 custom-checkbox' />
                                    I agree to be contacted by Indriya Jewels regarding my interest via phone call, SMS, Text, WhatsApp or email.
                                    <Link to="" className='text-color fw-bold'> T&C </Link> and <Link to="" className='text-color fw-bold'> Privacy Policy </Link>
                                </label>

                                <div className='text-center mt-3'>
                                    <Button
                                        variant='transparent'
                                        className='btn-border rounded-0 py-2 w-100'
                                        style={{ color: 'var(--icon-color)' }}
                                        onClick={toggleForm ? handleSignUp : handleLogin}
                                    >
                                        {toggleForm ? 'Sign Up' : 'Log In'}
                                    </Button>
                                </div>
                                <div className='text-center mt-3'>
                                    <Button
                                        variant='transparent'
                                        className='btn-border rounded-0 py-2 w-100'
                                        style={{ color: 'var(--icon-color)' }}
                                        onClick={handleToggleForm}
                                    >
                                        {toggleForm ? 'Already a member? Log In' : 'Not a member? Sign Up'}
                                    </Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default Signup_login;
