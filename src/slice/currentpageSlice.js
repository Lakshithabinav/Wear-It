import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : "home",
}
export const currentpageSlice= createSlice({
    name : 'currentPage',
    initialState,
    reducers :{
        setCurrentPage:(state, action) =>{
            state.value = action.payload
        },
    },
})
export const {setCurrentPage} = currentpageSlice.actions

export default currentpageSlice.reducer
