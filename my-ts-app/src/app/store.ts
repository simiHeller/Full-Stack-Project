import { configureStore } from "@reduxjs/toolkit";
import DressReducer from "../features/Dress/dressSlice";
import userReducer from "../features/User/UserSlice";
import RentReducer from "../features/Rent/RentSlice";
export const store = configureStore({
  reducer: { DressReducer, userReducer, RentReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
