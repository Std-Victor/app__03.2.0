import { useDispatch } from "react-redux";
import { selectProduct } from "../../redux/Product-Reducer/product.slice";
import style from "./Card.module.css";

export default function Card({ product }) {
  const txtFormat = (txt) => txt.split(" ").slice(0, 3).join(" ").concat("...");
  const dispatch = useDispatch()
  return (
    <div className={style.container} onClick={()=> dispatch(selectProduct(product))}>
      <div className={style.img__container}>
        <img src={product.image} alt={product.title} />
      </div>
      <h4>{txtFormat(product.title)}</h4>
    </div>
  );
}
