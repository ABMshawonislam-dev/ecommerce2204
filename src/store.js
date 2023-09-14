import { configureStore } from "@reduxjs/toolkit";
import breadCrumbSlices from "./slices/breadCrumbSlices";
import cartSlices from "./slices/cartSlices";
export default configureStore({
  reducer: {
    breadcrumb: breadCrumbSlices,
    cart: cartSlices,
  },
});
