import { configureStore } from "@reduxjs/toolkit";
import StacklineReducer from "./features/stacklineSlice";

export const store = configureStore({
  reducer: {
    stacklineData: StacklineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
