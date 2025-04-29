import { createSlice } from '@reduxjs/toolkit'

const modalSlice= createSlice({
    name:'modalMenu',
    initialState:{
        isopen: false,
    },
    reducers:{
        changeIsOpen:(state)=>{
            state.isopen= ! state.isopen;
        }

    }
})

 export const{changeIsOpen}=modalSlice.actions
 export default modalSlice.reducer 