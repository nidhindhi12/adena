import axios from 'axios';
import { changeIsOpen } from '../Store/slice/ModaSlice';
import { showToast } from '../Store/slice/ToastSlice';


export const addToWishlist = async (productId, dispatch) => {
  const token = localStorage.getItem('token');
  
    if (!token) {
    dispatch(changeIsOpen());
    return;
  }

  try {
    const res = await axios.post(
      'http://localhost:5000/wishlist/addwishlist',
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.status) {
      dispatch(showToast({ message: res.data.data.message, type: 'success' }));
      console.log('done');
    } else {
      dispatch(showToast({ message: res.data.data.message, type: 'info' }));
    }
  } catch (error) {
    const errMsg = error?.response?.data?.data?.message || 'Something went wrong';
    dispatch(showToast({ message: errMsg, type: 'error' }));
  }
};
