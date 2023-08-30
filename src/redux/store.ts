import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counterSlice";
import counterReducer from "@/redux/features/counterSlice";
import themeReducer from "@/redux/features/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
