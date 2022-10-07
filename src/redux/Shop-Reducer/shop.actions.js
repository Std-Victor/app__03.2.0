import { shopActionType } from "./shop.actions.type";

export const addItem = (item) => ({
  type: shopActionType.ADD_ITEM,
  payload: item,
});

export const increaseItemQuantity = (id) => ({
  type: shopActionType.INCREASE_ITEM_QUANTITY,
  payload: id,
});

export const decreaseItemQuantity = (id) => ({
  type: shopActionType.DECREASE_ITEM_QUANTITY,
  payload: id,
});

export const fetletItem = () => ({
  type : shopActionType.FELTER_ITEM
})

export const handleItemQuantity = ({id, quantity}) => ({
  type: shopActionType.HANDLE_ITEM_QUANTITY,
  payload: {id, quantity},
})