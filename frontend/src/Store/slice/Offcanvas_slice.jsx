import { createSlice } from '@reduxjs/toolkit'


const OffCanvasSlice = createSlice({
    name: 'offcanvasmenu',
    initialState: {
        toggleShow: false,
        searchShow: false
    },
    reducers: {
        offcanvasToggleShow: (state) => {
            state.toggleShow = !state.toggleShow
        },
        searchToggleShow: (state) => {
            state.searchShow = !state.searchShow
        }
    }
})

export const { offcanvasToggleShow, searchToggleShow } = OffCanvasSlice.actions
export default OffCanvasSlice.reducer