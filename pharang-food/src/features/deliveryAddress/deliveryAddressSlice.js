import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryAddress: {},
};

const slice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setDeliverySuccess(state, action) {
      state.deliveryAddress = action.payload;
    },
    clearDeliverySuccess(state, action) {
      state.deliveryAddress = {};
    },
  },
});
export const setDelivery = (delivery) => async (dispatch) => {
  try {
    dispatch(slice.actions.setDeliverySuccess(delivery));
  } catch (error) {
    console.log(error);
  }
};

export const clearDelivery = (delivery) => async (dispatch) => {
  try {
    dispatch(slice.actions.clearDeliverySuccess(delivery));
  } catch (error) {
    console.log(error);
  }
};
export default slice.reducer;
