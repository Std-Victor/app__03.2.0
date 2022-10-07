import { cartActionTyp } from "./cart.actions.type";

const INISIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INISIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTyp.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;