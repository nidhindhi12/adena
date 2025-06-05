import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { categorydata, genderdata, metaldata, ocassiondata } from '../Store/slice/ProductdataSlice';

const ProductData = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        const categoryData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/category/readcategorydata');
                dispatch(categorydata(res.data.data.data));
            } catch (error) {
                console.log(error);
            }
        }
        categoryData();
        const genderData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/gender/readgenderdata')
                dispatch(genderdata(res.data.data.data));
            } catch (error) {
                console.log(error);
            }
        }
        genderData();
        const metalData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/metal/readmetaldata');
                
                dispatch(metaldata(res.data.data.data));
            } catch (error) {
                console.log(error);
            }
        }
        metalData();
        const ocassionData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/ocassion/readocassiondata')
               
                dispatch(ocassiondata(res.data.data.data));
            } catch (error) {
                console.log(error);
            }
        }
        ocassionData();
    }, [])
    return (
        <></>
    )
}

export default ProductData


