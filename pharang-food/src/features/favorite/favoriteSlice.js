import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: [],
};

const slice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavoriteSuccess(state, action) {
      state.favoriteList = action.payload;
    },
  },
});
export const setFavorite = (favorite) => async (dispatch) => {
  try {
    dispatch(slice.actions.setFavoriteSuccess(favorite));
  } catch (error) {
    console.log(error);
  }
};
export default slice.reducer;
