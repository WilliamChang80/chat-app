import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/features/counter/slices";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
