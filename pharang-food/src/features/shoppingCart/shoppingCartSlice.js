import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
  ],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartSuccess(state, action) {
      state.cartList = action.payload;
    },
  },
});
export const setCart = (cart) => async (dispatch) => {
  try {
    dispatch(slice.actions.setCartSuccess(cart));
  } catch (error) {
    console.log(error);
  }
};
export default slice.reducer;
