import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './slice/ModaSlice'
import offcanvasReducer from './slice/Offcanvas_slice'
import toastReducer from './slice/ToastSlice'
import authReducer from './slice/AuthSlice'



const store = configureStore({
    reducer: {
        modalMenu: modalReducer,
        offcanvasmenu: offcanvasReducer,
        toastbox: toastReducer,
        auth:authReducer
    }
})


export default store



