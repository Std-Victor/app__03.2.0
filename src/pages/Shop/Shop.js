import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item/Item";
import { fetletItem } from "../../redux/Shop-Reducer/shop.actions";

import style from "./Shop.module.css";

const Shop = () => {
  const { shopList, total_amount } = useSelector(state => state.shop)
  const dispatch = useDispatch()
  dispatch(fetletItem())
  return (
    <div className={style.container}>
      {
        shopList.map(item => <Item item={item} key={ item.item.id } />)
      }
      
      <div className={style.total}>
        <p>Amount to pay is : </p>
        <div className={style.amount}>
          <span className={style.amount_to_pay}>{ (+total_amount + .00).toFixed(2)}</span>
          <span className={style.coin}>$</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
