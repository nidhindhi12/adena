import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: 'users',
    initialState: {
        user: []
    },
    reducers: {
        userdata: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { userdata } = UserSlice.actions
export default UserSlice.reducer