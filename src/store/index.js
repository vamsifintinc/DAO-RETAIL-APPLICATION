import { configureStore } from "@reduxjs/toolkit";
import getStartedReducer from "./getstarted-slice";

const store = configureStore({
  reducer: {
    Getstarted: getStartedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
store.subscribe(() => {
  console.log("🟢 Redux Store:", store.getState());
});


export default store;
