import { productActionType } from "./product.actions.type";

const INISIAL_STATE = {};

const productReducer = (state = INISIAL_STATE, action) => {
  switch (action.type) {
    case productActionType.FETCH_DATA:
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};

export default productReducer;
