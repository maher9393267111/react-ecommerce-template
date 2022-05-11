import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global";
//import postSlice from "./features/post/postSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
   // post: postSlice,
  },
});