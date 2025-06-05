import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modalMenu',
    initialState: {
        isopen: false,
        adminmodal: false,
    },
    reducers: {
        changeIsOpen: (state) => {
            state.isopen = !state.isopen;

        },
        changeAdminmodal: (state) => {
            state.adminmodal = !state.adminmodal;
            console.log(state.adminmodal);
        }

    }
})

export const { changeIsOpen, changeAdminmodal } = modalSlice.actions
export default modalSlice.reducer 