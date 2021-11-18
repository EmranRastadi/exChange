import {configureStore} from "@reduxjs/toolkit";
import exChange from "../hooks/reducers/exChange";

export const store = configureStore({
  reducer : {
    exChange : exChange
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
