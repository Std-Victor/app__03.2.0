import { shopActionType } from "./shop.actions.type";

const INISIAL_STATE = {
  total_selected_item: 0,
  total_amount: 0,
  shopList: [],
};

const shopReducer = (state = INISIAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.ADD_ITEM:
      return {
        ...state,
        shopList: [
          ...state.shopList,
          {
            item: action.payload,
            quantity: 1,
            sub_total: action.payload.price,
          },
        ],
        total_selected_item: state.total_selected_item + 1,
        total_amount: state.total_amount + action.payload.price,
      };
    case shopActionType.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        total_selected_item: state.total_selected_item + 1,
        shopList: state.shopList.map((prd) =>
          prd.item.id === action.payload
            ? {
                ...prd,
                quantity: prd.quantity + 1,
                sub_total: prd.sub_total + prd.item.price,
              }
            : prd
        ),
        total_amount:
          state.total_amount +
          state.shopList.reduce(
            (total, item) =>
              total + (item.item.id === action.payload ? item.item.price : 0),
            0
          ),
        // state.shopList.map(item => item.item.id === action.payload ? item.item.price : 0)
        // state.shopList.reduce((total, item) => total + item.sub_total, 0),
      };
    case shopActionType.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        total_selected_item: state.total_selected_item - 1,
        shopList:state.shopList.map((prd) =>
          prd.item.id === action.payload
            ? {
                ...prd,
                quantity: prd.quantity - 1,
                sub_total:prd.sub_total - prd.item.price ,
              }
            : prd
        ),
        total_amount:
        state.total_amount -
        state.shopList.reduce(
          (total, item) =>
            total + (item.item.id === action.payload ? item.item.price : 0),
          0
          ),
      };
    case shopActionType.FELTER_ITEM:
      return {
        ...state,
        shopList : state.shopList.filter(item => item.quantity !==0)
      }
    default:
      return state;
  }
};

export default shopReducer;
