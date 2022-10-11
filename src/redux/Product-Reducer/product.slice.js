import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    pending: false,
    error: false,
    openModal: false,
    isFetched: false,
  },
  reducers: {
    fetchProductStart: (state) => ({ ...state, pending: true }),
    fetchProductSuccess: (state, action) => ({
      ...state,
      pending: false,
      productList: action.payload,
      isFetched: true,
    }),
    fetchProductError: (state) => ({ ...state, pending: false, error: true }),
    selectProduct: (state, action) => ({
      ...state,
      openModal: !state.openModal,
      selectedProduct: action.payload,
    }),
    toggleModal: (state) => ({ ...state, openModal: !state.openModal }),
    searchForProduct: (state, action) => ({
      ...state,
      productList: action.payload,
    }),
  },
});

export const {
  fetchProductData,
  fetchProductStart,
  fetchProductSuccess,
  fetchProductError,
  toggleModal,
  selectProduct,
  searchForProduct,
} = productSlice.actions;
export default productSlice.reducer;
