import { createSlice } from "@reduxjs/toolkit";

export const breadCrumbSlices = createSlice({
  name: "breadCrumbSlices",
  initialState: {
    currentname: "",
    previousname:""
  },
  reducers: {
    pageName: (state,action) => {
        state.previousname = state.currentname;
        state.currentname = action.payload;
    },
 
  },
});

// Action creators are generated for each case reducer function
export const { pageName } = breadCrumbSlices.actions;

export default breadCrumbSlices.reducer;
