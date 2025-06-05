import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { changeAdminmodal } from '../../Store/slice/ModaSlice'
import { showToast } from '../../Store/slice/ToastSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'


const COM = (props) => {
    const adminmodal = useSelector((state) => state.modalMenu.adminmodal);
    const dispatch = useDispatch();
    const [newChange, setNewChange] = useState('');

    const handleUpdate = (e) => {
        setNewChange(e.target.value);

    }

    const handleAdd = async () => {
        let payload = {}
        if (props.type == 'category') {
            payload = { categoryname: newChange };
        }
        else if (props.type === 'metal') {
            payload = { metalname: newChange };

        }
        else {
            payload = { ocassionname: newChange };
        }
        try {
            const res = await axios.post(`http://localhost:5000/${props.type}/add${props.type}`, payload);
            console.log(res);
            if (res.data.status) {
            dispatch(showToast({ message: res.data.data.message, type: "success" }));
            }

        } catch (error) {
            dispatch(showToast({ message: error.response?.data?.data?.message, type: "error" }))
        }
        dispatch(changeAdminmodal());
    }


    return (
        <div>
            <Modal show={adminmodal} onHide={() => dispatch(changeAdminmodal())}>
                <Modal.Header closeButton style={{ backgroundColor: 'var(--hover-color)' }}>
                    <Modal.Title className=' text-white fs-5'>Add New {props.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'var(--admin-hover)' }} className=' text-white'>
                    <Form>
                        <Form.Label>{props.label} Name</Form.Label>
                        <Form.Control placeholder={props.placeholder} value={newChange} onChange={handleUpdate}></Form.Control>
                    </Form>
                    <div className=' mt-4 text-center'>
                        <Button className='btn-color bg-transparent' onClick={handleAdd}> Add</Button>
                    </div>
                </Modal.Body>

            </Modal>
        </div >
    )
}

export default COM
