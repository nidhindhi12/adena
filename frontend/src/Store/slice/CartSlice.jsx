import { createSlice } from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        products: []
    },
    reducers: {
        addcartItems: (state, action) => {
            state.value +=1;
            const cartitemqty = { ...action.payload, qty: 1 };
            state.products = [...state.products, cartitemqty];
            console.log(state.products);
        }
    }
})


export const { addcartItems } = CartSlice.actions
export default CartSlice.reducer