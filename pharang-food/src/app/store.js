import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';
import riceReducer from "../features/rice/riceSlice";
import noodleSoupReducer from "../features/noodleSoup/noodleSoupSlice";
import porridgeReducer from "../features/porridge/porridgeSlice";
import hotpotReducer from "../features/hotpot/hotpotSlice";
import juiceReducer from "../features/juice/juiceSlice";
import milkteaReducer from "../features/milktea/milkteaSlice";
import coffeeReducer from "../features/coffee/coffeeSlice";
import cartReducer from "../features/shoppingCart/shoppingCartSlice";
import allFoodReducer from "../features/all-food/allFoodSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    rice: riceReducer,
    noodleSoup: noodleSoupReducer,
    porridge: porridgeReducer,
    hotpot: hotpotReducer,
    juice: juiceReducer,
    milktea: milkteaReducer,
    coffee: coffeeReducer,
    cart: cartReducer,
    allFood: allFoodReducer,
  },
});
