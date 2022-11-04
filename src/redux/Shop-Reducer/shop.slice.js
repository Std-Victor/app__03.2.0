import { createSlice } from "@reduxjs/toolkit";

const list = JSON.parse(localStorage.getItem("shopList")) ?? {};

const INISIAL_STATE = {
  total_selected_item: 0,
  total_amount: 0,
  shopList: list,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState: INISIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      state.shopList[state.currentUserId] = [
        ...state.shopList[state.currentUserId].map((prd) => prd.item.id),
      ].includes(action.payload.id)
        ? state.shopList[state.currentUserId].map((prd) =>
            prd.item.id === action.payload.id
              ? {
                  ...prd,
                  quantity: prd.quantity + 1,
                  sub_total: prd.sub_total + prd.item.price,
                }
              : prd
          )
        : [
            ...state.shopList[state.currentUserId],
            {
              item: action.payload,
              quantity: 1,
              sub_total: action.payload.price,
            },
          ];
      state.total_selected_item = state.total_selected_item + 1;
      state.total_amount = state.total_amount + action.payload.price;

      localStorage.setItem("shopList", JSON.stringify(state.shopList))
    },

    felterItemQuantity: (state) => {
      state.shopList[state.currentUserId] = state.shopList[
        state.currentUserId
      ].filter((item) => item.quantity !== 0);
      localStorage.setItem("shopList", JSON.stringify(state.shopList))
    },

    handleItemQuantity: (state, action) => {
      state.total_selected_item = state.shopList[state.currentUserId].reduce(
        (total, prd) =>
          total +
          (prd.item.id === action.payload.id
            ? +action.payload.quantity
            : prd.quantity),
        0
      );
      state.shopList[state.currentUserId] = state.shopList[
        state.currentUserId
      ].map((prd) =>
        prd.item.id === action.payload.id
          ? {
              ...prd,
              quantity: +action.payload.quantity,
              sub_total: +action.payload.quantity * prd.item.price,
            }
          : prd
      );
      state.total_amount = state.shopList[state.currentUserId].reduce(
        (total, item) =>
          total +
          (item.item.id === action.payload.id
            ? +action.payload.quantity * item.item.price
            : item.quantity * item.item.price),
        0
      );
      localStorage.setItem("shopList", JSON.stringify(state.shopList))
    },
    initialShopList: (state, action) => {
      state.shopList[action.payload] = state.shopList[action.payload]
        ? [...state.shopList[action.payload]]
        : [];
      state.currentUserId = action.payload;
      state.total_selected_item = state.shopList[action.payload] ? state.shopList[action.payload].reduce((total, item) => total + +item.quantity, 0) : 0;
      state.total_amount = state.shopList[action.payload] ? state.shopList[action.payload].reduce((total, item) => total + +item.sub_total, 0) : 0;
    },
  },
});

export const {
  addItem,
  felterItemQuantity,
  handleItemQuantity,
  initialShopList,
} = shopSlice.actions;
export default shopSlice.reducer;
