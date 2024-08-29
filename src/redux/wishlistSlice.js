import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions or logic to update the state are provided inside reducers
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        // to remove item from state using filter method, the method applies inside the state which is an array.
        removeFromWishlist:(state, action)=>{
               return state.filter(item=>item.id != action.payload)
        }
    }
})
export const {addToWishList, removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;

