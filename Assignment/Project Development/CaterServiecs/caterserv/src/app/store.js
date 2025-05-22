import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "../Slicedata/AdminSlice";

export default configureStore({
  reducer: {
    users: AdminSlice,
  },
});
