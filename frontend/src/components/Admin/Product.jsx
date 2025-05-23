import React, { useState } from 'react'
import axios from 'axios'
import { showToast } from '../../Store/slice/ToastSlice';
import CreateProduct from './CreateProduct';

const Product = () => {
  const initialState = {
    title: '',
    price: '',
    description: '',
    gender: '',
    category: "",
    ocassion: '',
    metal: '',
    discount: 0,
    imgages

  };
  const [show, setShow] = useState(false);
  const [imgPrev, setImgPrev] = useState([]);
  const [selctedFile, setSelectedFile] = useState([]);
  const [formData, setFormData] = useState(initialState);


  const handleImageChange = (e) => {
    const files = e.target.files;
    console.log(files);
    const fileArray = Array.from(files);

    const imagePreview = fileArray.map(file => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve({
            src: reader.result,
            name: file.name,
          })
        }
        reader.readAsDataURL(file)
      })
    })
    Promise.all(imagePreview).then(image => {
      setImgPrev(image)
      setSelectedFile(fileArray);
      console.log('selected files: ' +
        selctedFile
      )
    })
  }
  const addproduct = async () => {
    try {
      const allFormData = new FormData();
      allFormData.append("folder", productImg);
      selctedFile.forEach(file => {
        allFormData.append('image', file)
      })
      for (let key in formData) {
        allFormData.append(key, formData[key]);
      }
      allFormData.forEach((key, value) => {
        console.log(key, value);
      })

      const config={
          headers:{
            'Content-Type':"multipart/form-data"
          }
      }
      const res = await axios.post('http://localhost:5000/product/addproduct', allFormData,config);

      if (res.data.status) {
        showToast("product successfully");
      }
      setFormData(initialState);
      setImgPrev([]);
      setSelectedFiles([]);
      setShow(false);

    } catch (error) {
      showToast("failed to add product");
      console.log(error);
    }

  }

  return (
    <>
      <CreateProduct
        formData={formData}
        setFormData={setFormData}
        handleImageChange={handleImageChange}
        addProduct={addproduct}
      />
    </>
  )
}
export default Product



