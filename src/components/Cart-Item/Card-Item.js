import React from "react";
import style from "./cart-Item.module.css";

export const CardItem = ({ item, quantity }) => {
  const txtFormat = (txt) => txt.split(" ").slice(0, 2).join(" ").concat("...");
  return (
    <div className={style.container}>
      <img src={item.image} alt={item.title} />
      <div className={style.detail}>
        <span className={style.name}>{txtFormat(item.title)}</span>
        <span className={style.price}>
          {quantity}x{item.price}$
        </span>
      </div>
    </div>
  );
};
