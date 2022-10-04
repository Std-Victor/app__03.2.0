import style from "./Card-List.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CardList() {
  const productList = useSelector((state) => state.product.productList);
  if (!productList) return null;
  return (
    <div className={style.list}>
      {productList.map((pro) => (
        <Link to={`/product/${pro.id}`}>
          <Card key={pro.id} product={pro} />
        </Link>
      ))}
    </div>
  );
}
