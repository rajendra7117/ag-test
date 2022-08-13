import { createSlice } from "@reduxjs/toolkit";

const templateSlice = createSlice({
  name: "template",
  initialState: {
    isSelected: false,
    selectedTemp: {},
    preview: false,
    postData: {},
  },
  reducers: {
    selectTemp(state, action) {
      state.isSelected = true;
      state.selectedTemp = action.payload;
    },
    unSelectTemp(state, action) {
      state.isSelected = false;
      state.selectedTemp = {};
    },
    showPreview(state, action) {
      state.preview = true;
      state.postData = action.payload;
    },
    cancelPreview(state, action){
        console.log('cancel')
        state.preview = false
        state.postData = {}
        state.isSelected = false 
        state.selectedTemp = {}
    }
  },
});

export const templateSliceActions = templateSlice.actions;

export default templateSlice;
