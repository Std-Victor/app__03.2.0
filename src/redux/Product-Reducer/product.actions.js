import { productActionType } from "./product.actions.type";

export const fetchData = (data) => ({
  type: productActionType.FETCH_DATA,
  payload: data,
});
