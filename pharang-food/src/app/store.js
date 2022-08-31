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
import foodDetailReducer from "../features/foodDetail/foodDetailSlice";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const reducer = combineReducers({
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
    foodDetail: foodDetailReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});


export const persistor = persistStore(store);



