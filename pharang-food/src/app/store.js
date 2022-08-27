import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});
