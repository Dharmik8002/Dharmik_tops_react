import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from "../fetures/accordionSlice";

export default configureStore({
  reducer: {
    accordion: accordionReducer,
  },
});
