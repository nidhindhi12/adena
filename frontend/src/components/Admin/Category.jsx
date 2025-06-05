import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import COM from './COM';
import { useDispatch, useSelector } from 'react-redux';
import { changeAdminmodal } from '../../Store/slice/ModaSlice';
import { useEffect, useState } from 'react';
import axios from 'axios'


const Category = () => {
    const dispatch = useDispatch();
    const [fetchdata, setFetchData] = useState([]);
    const handleAdminModal = () => {
        dispatch(changeAdminmodal());

    }
    const handleDelete = async (id) => {
        try {

            const res = await axios.delete(`http://localhost:5000/category/deletecategory/${id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        const fetchCategoryCount = async () => {
            try {
                const res = await axios.get('http://localhost:5000/category/categorieswithcount');
                setFetchData(res.data.data.data);
            } catch (error) {
                console.log(error);
            }

        }
        fetchCategoryCount();

    }, [])
    

    return (
        <Container>
            <div className=' d-flex justify-content-between align-items-center'>
                <h4 className=' text-white fw-bold fs-5 py-3'>Category</h4>
                <div className=' d-flex text-white'>
                    <Link to='/admin/dashboard' className=' text-white'>Dashboard / </Link>
                    <Link className=' text-white-50'> Category</Link>
                </div>
            </div>
            <div style={{ backgroundColor: 'var(--admin-hover)' }} className=' py-2'>
                <div className='d-flex justify-content-between px-4 align-item-center'>
                    <p className=" text-white mt-2">Total Products: {fetchdata.length}</p>

                    <button className='btn btn-color fs-14 text-end' style={{ backgroundColor: "transparent" }} onClick={handleAdminModal}>+ Add new category </button>
                </div>
                <COM label="Category" placeholder="Enter the Category Name" type='category'/>

            </div>
            <div className=' mt-4'>
                <div style={{ marginBottom: "77px" }}>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th className=" text-white">Icon</th>
                                <th className=" text-white">Category Name</th>
                                <th className=" text-white">Total Products</th>
                                <th className=" text-white text-end pe-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchdata.map((item, index) => (
                                <tr key={index}>

                                    <td><p className="list-icon m-0 text-white ps-3 pt-1">{item.categoryame?.charAt(0).toUpperCase()}</p></td>
                                    <td className="text-capitalize text-white">{item.categoryame}</td>
                                    <td className="text-white text-center" style={{ width: '15%' }}>{item.totalProducts}</td>
                                    <td className='text-end pe-4' style={{ width: '20%' }}>
                                        <FaEdit className="text-success me-3 cursor-pointer" />
                                        <FaTrashAlt className="text-danger cursor-pointer" onClick={() => handleDelete(item.categoryId)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}
export default Category
