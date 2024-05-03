// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
   
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.value.push(action.payload);
        },
        increamentQuantity: (state, action) => {
            const item = state.value.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreamentQuantity: (state, action) => {
            const item = state.value.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        handleSizeChange: (state, action) => {
            const { id, newSize } = action.payload;
            const item = state.value.find(item => item.id === id);
            if (item) {
                item.size = newSize;
            }
            console.log("changed")
        },
        deleteCartItem: (state, action) => {
            const idToDelete = action.payload;
            state.value = state.value.filter(item => item.id !== idToDelete);
        }
    },
});

export const { addCart, increamentQuantity, decreamentQuantity, handleSizeChange,deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer;
