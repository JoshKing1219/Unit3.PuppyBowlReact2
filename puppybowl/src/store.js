import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "./API/puppyBowlApi";

export const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

export default store;
