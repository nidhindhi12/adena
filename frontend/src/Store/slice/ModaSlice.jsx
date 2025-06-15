import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modalMenu',
    initialState: {
        isopen: false,
        adminmodal: false,
        mode: '',
        selectedCat: {},
        productmodel: false
    },
    reducers: {
        changeIsOpen: (state) => {
            state.isopen = !state.isopen;

        },
        changeAdminmodal: (state, action) => {
            state.adminmodal = !state.adminmodal;
            state.mode = action.payload;
        },
        fetchSelectedCatId: (state, action) => {
            state.selectedCat = action.payload;
            console.log(state.selectedCat);
        },
        toggleproductmodel: (state) => {
            state.productmodel = !state.productmodel
        }


    }
})

export const { changeIsOpen, changeAdminmodal, fetchSelectedCatId, toggleproductmodel } = modalSlice.actions
export default modalSlice.reducer 