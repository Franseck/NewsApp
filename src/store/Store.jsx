import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "../redux/AuthSlice";
import NewsSlice from "../redux/NewsSlice";

export const store = configureStore({
  reducer: {
    authReducer: AuthSlice,
    newsReducer: NewsSlice
  },
})