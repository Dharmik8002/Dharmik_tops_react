import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../fetures/Todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
 