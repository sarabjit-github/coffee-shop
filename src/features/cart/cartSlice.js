import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    changeQuantity: (state, action) => {
        let newCart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                return { ...item, quantity: action.payload.quantity}
            }
            else{
                return item;
            }
        })
        return {
            ...state,
            cart: [...newCart]
        }
      },
      removeFromCart: (state, action)=>{
        let newCart = state.cart.filter((item)=>{
            return item.id !== action.payload;
        })
        return {
            ...state,
            cart: [...newCart]
        }
      }
  },
  
});

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
