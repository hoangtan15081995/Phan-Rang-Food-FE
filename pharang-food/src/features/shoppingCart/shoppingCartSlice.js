import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  // clearAll: 1,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setFoodToCartSuccess(state, action) {
      let food = action.payload;
      let cartList = state.cartList;
      if (cartList.length === 0) {
        state.cartList = [...state.cartList, food];
      }
      if (cartList.length > 0) {
        let existFood = cartList.find((cart) => cart.id === food.id);
        if (existFood) {
          let indexFoodExist = cartList.findIndex(
            (cart) => cart.id === food.id
          );
          cartList.splice(indexFoodExist, 1);
          state.cartList = cartList;
        } else {
          cartList.unshift(food);
          state.cartList = cartList;
        }
      }
    },
    clearAllFoodToCartSuccess(state, action) {
      state.cartList = [];
      // state.clearAll = state.clearAll + 1;

    },
    DecreaseQuantitySuccess(state, action) {
      // let Oncart = action.payload;
      let cartList = state.cartList;
      state.cartList.forEach((cart) => {
        if (cart.id === action.payload) {
          if (cart.quantity === 1) {
           let indexQuantity = cartList.findIndex(
             (cart) => cart.id === action.payload
           );
           cartList.splice(indexQuantity, 1);
           state.cartList = cartList;
          } else {  
            return (cart.quantity -= 1);
         }
        } 
         
      });
      // state.cartList = newCart;
    },
    IncreaseQuantitySuccess(state, action) {
      // let Oncart = action.payload;
      // let cartList = state.cartList;
      state.cartList.forEach((cart) => {
        if (cart.id === action.payload) {
          return (cart.quantity += 1);
        }
      });
      // state.cartList = newCart;
    },

  },
});
export const setFoodToCart = (food) => async (dispatch) => {
  try {
    dispatch(slice.actions.setFoodToCartSuccess(food));
  } catch (error) {
    console.log(error);
  }
};

export const clearAllFoodToCart = () => async (dispatch) => {
  try {
    dispatch(slice.actions.clearAllFoodToCartSuccess());
  } catch (error) {
    console.log(error);
  }
};
export const DecreaseQuantity = (id) => async (dispatch) => {
  try {
    dispatch(slice.actions.DecreaseQuantitySuccess(id));
  } catch (error) {
    console.log(error);
  }
};
export const IncreaseQuantity = (id) => async (dispatch) => {
  try {
    dispatch(slice.actions.IncreaseQuantitySuccess(id));
  } catch (error) {
    console.log(error);
  }
};

export default slice.reducer;
