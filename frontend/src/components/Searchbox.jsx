import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { searchToggleShow } from '../Store/slice/Offcanvas_slice';


const Searchbox = () => {
    const search = useSelector((state) => state.offcanvasmenu.searchShow);
    const dispatch = useDispatch();
    console.log(search);
    return (
        <Offcanvas show={search} onHide={() => dispatch(searchToggleShow())} placement="top">
            <Offcanvas.Header className='justify-content-center' closeButton>
                <Offcanvas.Title className=' fw-bolder fs-4 text-center'>Search</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                This is an Offcanvas from the top. Add any content you want here.
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Searchbox
