import React from "react";

import style from "./cardDropdown.module.css";

import { CardItem } from "../Cart-Item/Card-Item";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CardDropdown = () => {
  const item = useSelector(state => state.shop.shopList);
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.items}>
        {item.map(item => <CardItem item={item.item} quantity={item.quantity} key={item.item.id} />)}
      </div>
      <div className={style.button}>
        <button onClick={()=> navigate('/shop')}>Go to Checkout</button>
      </div>
    </div>
  );
};
