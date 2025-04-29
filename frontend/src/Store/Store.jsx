import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './slice/ModaSlice'
import offcanvasReducer from './slice/Offcanvas_slice'
import toastReducer from './slice/ToastSlice'



const store = configureStore({
    reducer: {
        modalMenu: modalReducer,
        offcanvasmenu: offcanvasReducer,
        toastbox: toastReducer
    }
})


export default store



