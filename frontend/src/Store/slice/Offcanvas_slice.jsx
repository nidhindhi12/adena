import { createSlice } from '@reduxjs/toolkit'


const OffCanvasSlice = createSlice({
    name: 'offcanvasmenu',
    initialState: {
        toggleShow: false,
        searchShow: false,
        adminShow: false,
    },
    reducers: {
        offcanvasToggleShow: (state) => {
            state.toggleShow = !state.toggleShow
        },
        searchToggleShow: (state) => {
            state.searchShow = !state.searchShow
        },
        offcanvasAdminToggle: (state) => {
            state.adminShow = !state.adminShow
        }
    }
})

export const { offcanvasToggleShow, searchToggleShow ,offcanvasAdminToggle } = OffCanvasSlice.actions
export default OffCanvasSlice.reducer