import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { isOpen: false },
  reducers: {
    toggleMenuBar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenuBar } = menuSlice.actions;
export default menuSlice.reducer;
