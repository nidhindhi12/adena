import { createSlice } from "@reduxjs/toolkit";


const ToastSlice = createSlice({
    name: "toastbox",
    initialState: {
        type: '',
        message: ''
    },
    reducers: {
        showToast: (state, action) => {
            state.message = action.payload.message,
            state.type = action.payload.type
        },
        closeToast: (state, actions) => {
            state.type = '',
            state.message = ''
        }
    }
})
export const { showToast, closeToast } = ToastSlice.actions
export default ToastSlice.reducer