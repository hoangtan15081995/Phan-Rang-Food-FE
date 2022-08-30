import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodDetail: {
    name: "Cơm chiên Gia Phú",
    catagory: "Cơm",
    price: "30.000",
    address: "30 Ngô Gia Tự thành phố Phan Rang Tháp Chàm",
    rating: "4",
    image: "https://i.ytimg.com/vi/FR4DH5sSysI/maxresdefault.jpg",
  },
};

const slice = createSlice({
  name: "foodDetail",
  initialState,
  reducers: {
    setFoodDetailSuccess(state, action) {
      state.foodDetail = action.payload;
    },
  },
});
export const setFoodDetail = (foodDetail) => async (dispatch) => {
  try {
    dispatch(slice.actions.setFoodDetail(foodDetail));
  } catch (error) {
    console.log(error);
  }
};
export default slice.reducer;
