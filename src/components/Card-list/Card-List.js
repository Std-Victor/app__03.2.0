import style from "./Card-List.module.css";
import Card from "../Card/Card";

import { useSelector } from "react-redux";

import FetchError from "../Fetch-Error/Fetch.Error";

export default function CardList({products}) {
  const  error  = useSelector((state) => state.product.error);
  if (error) return <FetchError />;
  return (
    <div className={style.list}>
      {products.map((pro) => (
        <Card product={pro} key={pro.id} />
      ))}
    </div>
  );
}
