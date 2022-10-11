import { createSlice } from "@reduxjs/toolkit";

const INISIAL_STATE = {
  hidden: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INISIAL_STATE,
  reducers: {
    toggleCartHidden: (state) => ({...state, hidden : !state.hidden}),
  },
});

export const { toggleCartHidden } = cartSlice.actions
export default cartSlice.reducer;