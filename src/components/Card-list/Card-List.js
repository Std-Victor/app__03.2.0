import style from "./Card-List.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function CardList({ products }) {
  return (
    <div className={style.list}>
      {products.map((pro) => (
        <Link to={`/product/${pro.id}`}>
          <Card key={pro.id} product={pro} />
        </Link>
      ))}
    </div>
  );
}
