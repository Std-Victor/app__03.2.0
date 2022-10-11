import { createSlice } from "@reduxjs/toolkit";

const INISIAL_STATE = {
  total_selected_item: 0,
  total_amount: 0,
  shopList: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState: INISIAL_STATE,
  reducers: {
    addItem: (state, action) => ({
      ...state,
      shopList: [...state.shopList.map((prd) => prd.item.id)].includes(
        action.payload.id
      )
        ? state.shopList.map((prd) =>
            prd.item.id === action.payload.id
              ? {
                  ...prd,
                  quantity: prd.quantity + 1,
                  sub_total: prd.sub_total + prd.item.price,
                }
              : prd
          )
        : [
            ...state.shopList,
            {
              item: action.payload,
              quantity: 1,
              sub_total: action.payload.price,
            },
          ],
      total_selected_item: state.total_selected_item + 1,
      total_amount: state.total_amount + action.payload.price,
    }),

    felterItemQuantity: (state) => ({
      ...state,
      shopList: state.shopList.filter((item) => item.quantity !== 0),
    }),

    handleItemQuantity: (state, action) => ({
      ...state,
      total_selected_item: state.shopList.reduce(
        (total, prd) =>
          total +
          (prd.item.id === action.payload.id
            ? +action.payload.quantity
            : prd.quantity),
        0
      ),
      shopList: state.shopList.map((prd) =>
        prd.item.id === action.payload.id
          ? {
              ...prd,
              quantity: +action.payload.quantity,
              sub_total: +action.payload.quantity * prd.item.price,
            }
          : prd
      ),
      total_amount: state.shopList.reduce(
        (total, item) =>
          total +
          (item.item.id === action.payload.id
            ? +action.payload.quantity * item.item.price
            : item.quantity * item.item.price),
        0
      ),
    }),
  },
});

export const { addItem, felterItemQuantity, handleItemQuantity } =
  shopSlice.actions;
export default shopSlice.reducer;
