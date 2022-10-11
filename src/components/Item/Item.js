import { useDispatch } from "react-redux";

import { handelItemQuantity } from "../../redux/Shop-Reducer/shop.slice";

import style from "./item.module.css";

const Item = ({ item: { item, quantity, sub_total } }) => {
  const txtFormat = (txt) => txt.split(" ").slice(0, 9).join(" ").concat("...");
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={style.inf}>
        <div className={style.detail}>
          <p className={style.title}>{txtFormat(item.title)}</p>
          <p className={style.category}>{item.category}</p>
          <p className={style.price}>{item.price}$</p>
        </div>
        <div className={style.seling}>
          <input
            type="number"
            name=""
            defaultValue={quantity}
            min="0"
            id=""
            onChange={(e) =>
              dispatch(
                handelItemQuantity({ id: item.id, quantity: e.target.value })
              )
            }
          />
          <p className={style.sub__total}>{(+sub_total + 0.0).toFixed(2)}$</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
