import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "../redux/AuthSlice";
import NewsSlice from "../redux/NewsSlice";

export const store = configureStore({
  reducer: {
    AuthSlice: AuthSlice,
    NewsSlice: NewsSlice
  },
})