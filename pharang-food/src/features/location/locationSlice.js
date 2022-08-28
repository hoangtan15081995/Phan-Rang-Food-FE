import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationPathname: "rice"
};

const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationSuccess(state, action) {
      state.locationPathname = action.payload;
    },
  },
});
export const setLocation = (locationPathname) => async(dispatch) => {
  try {
    dispatch(slice.actions.setLocationSuccess(locationPathname));
  } catch (error) {
    console.log(error)
  }
};
export default slice.reducer;
