import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import COM from './COM';
import { useDispatch } from 'react-redux';
import { changeAdminmodal } from '../../Store/slice/ModaSlice';

const Ocassion = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(changeAdminmodal());

  }
  return (
    <Container>
      <div className=' d-flex justify-content-between align-items-center'>
        <h4 className=' text-white fw-bold fs-5 py-3'>Ocassion</h4>
        <div className=' d-flex text-white'>
          <Link to='/admin/dashboard' className=' text-white'>Dashboard / </Link>
          <Link className=' text-white-50'>Ocassion</Link>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--admin-hover)' }} className=' py-2'>
        <div className=' text-end px-4'>
          <button className='btn btn-color fs-14' style={{ backgroundColor: "transparent" }} onClick={handleModal}>
            + Add new Ocassion
          </button>
            <COM  label='Ocassion' placeholder='Enter the Ocassion Name' type='ocassion'/>
        </div>
      </div>
    </Container>
  )
}

export default Ocassion

