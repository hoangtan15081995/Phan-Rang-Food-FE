import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
  ],
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
    }
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

export default slice.reducer;
