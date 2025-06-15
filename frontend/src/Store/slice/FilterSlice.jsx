import { createSlice } from "@reduxjs/toolkit";


const FilterSlice = createSlice({
    name: 'filterproduct',
    initialState: {
        products: [],
        selectFilter: '',
        allproducts: []
    },
    reducers: {
        filterProductsbByCat: (state, action) => {
            state.selectFilter = action.payload;
            const filter = state.selectFilter.toLowerCase();
            if (filter == 'all') {
                state.products = state.allproducts;
            }
            else {
                state.products = state.allproducts.filter((item) => {
                    item.category.toLowerCase() === filter
                });
            }
        },
        showallproduct: (state, action) => {
            state.products = action.payload;
            state.allproducts = action.payload;
        },
       
    }

})


export const { filterProductsbByCat, showallproduct, getfilter } = FilterSlice.actions
export default FilterSlice.reducer