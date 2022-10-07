import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Item from "../../components/Item/Item";
import { fetletItem } from "../../redux/Shop-Reducer/shop.actions";

import style from "./Shop.module.css";

const Shop = () => {
  const { shopList, total_amount, total_selected_item } = useSelector(
    (state) => state.shop
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetletItem());
    if (!total_selected_item) navigate('/product');
  }, [total_selected_item]);
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <div className={style.item__container}>
        {shopList.map((item) => (
          <Item item={item} key={item.item.id} />
        ))}
      </div>

      <div className={style.total}>
        <div className={style.line__field}>
          <p>Products</p>
          <p>{(+total_amount + 0.00).toFixed(2)}$</p>
        </div>
        <div className={style.line__field}>
          <p>Delivery</p>
          <p>4.00$</p>
        </div>
        <div className={style.total__field}>
          <div className={style.line__field}>
            <p>Total</p>
            <p>{(+total_amount + 4.00).toFixed(2)}$</p>
          </div>
          <div className={style.button__field}>
            <button>
              Validate my order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
