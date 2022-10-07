import { cartActionTyp } from "./cart.actions.type";

export const toggleCart = () => ({
  type: cartActionTyp.TOGGLE_CART_HIDDEN,
});
