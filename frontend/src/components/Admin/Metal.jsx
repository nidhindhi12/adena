import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import COM from './COM';
import { useDispatch } from 'react-redux';
import { changeAdminmodal } from '../../Store/slice/ModaSlice';


const Metal = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(changeAdminmodal());

  }
  return (
    <Container>
      <div className=' d-flex justify-content-between align-items-center'>
        <h4 className=' text-white fw-bold fs-5 py-3'>Metal</h4>
        <div className=' d-flex text-white'>
          <Link to='/admin/dashboard' className=' text-white'>Dashboard / </Link>
          <Link className=' text-white-50'>Metal</Link>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--admin-hover)' }} className=' py-2'>
        <div className=' text-end px-4'>
          <button className='btn btn-color fs-14' style={{ backgroundColor: "transparent" }} onClick={handleModal}>
            + Add new metal
          </button>
            <COM label='Metal' placeholder='Enter the Metal Name' type='metal' />
        </div>
      </div>
    </Container>
  )
}

export default Metal

