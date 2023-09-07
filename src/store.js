import { configureStore } from "@reduxjs/toolkit";
import breadCrumbSlices from "./slices/breadCrumbSlices";
export default configureStore({
  reducer: {
    breadcrumb: breadCrumbSlices,
  },
});
