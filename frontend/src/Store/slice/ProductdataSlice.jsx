import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: 'productdata',
    initialState: {
        category: [],
        gender: [],
        metal: [],
        ocassion: []
    },
    reducers: {
        categorydata: (state, action) => {
            state.category = action.payload;
        },
        genderdata: (state, action) => {
            state.gender = action.payload;
        },
        metaldata: (state, action) => {
            state.metal = action.payload;
        },
        ocassiondata: (state, action) => {
            state.ocassion = action.payload;
        }

    }
});

export const { categorydata, genderdata, metaldata, ocassiondata } = ProductSlice.actions;
export default ProductSlice.reducer