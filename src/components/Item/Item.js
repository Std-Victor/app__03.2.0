import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useDispatch } from 'react-redux';

import { increaseItemQuantity, decreaseItemQuantity } from '../../redux/Shop-Reducer/shop.actions'

import style from "./item.module.css";

const Item = ({ item: { item, quantity, sub_total } }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className={style.inf}>
        <div className={style.quantity}>
          <FaAngleLeft className={style.icon} onClick={ () => dispatch(decreaseItemQuantity(item.id))  } />
          <span className={style.quantity__value}>{ quantity }</span>
          <FaAngleRight className={style.icon} onClick={ () => dispatch(increaseItemQuantity(item.id))  }/>
          x <span className={style.price}>{ (+item.price + 0.00).toFixed(2) }</span>
        </div>
        <div className={style.sup__total}>
          <span className={style.total}>{(+sub_total + 0.00).toFixed(2)}</span>
          <span className={style.coin}>$</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
