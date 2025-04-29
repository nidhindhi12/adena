import React from 'react'

const Sidebar = () => {
  return (
    <div className=' bg-info p-3'>
      <ul className='list-unstyled d-flex justify-content-center flex-column align-items-center'>
        <li>Dashboard</li>
        <li>Employee</li>
        <li>Orders</li>
        <li>Product</li>
      </ul>
    </div>
  )
}

export default Sidebar