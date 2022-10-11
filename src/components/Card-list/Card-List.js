import style from "./Card-List.module.css";
import Card from "../Card/Card";

import { useSelector } from "react-redux";

import FetchError from "../Fetch-Error/Fetch.Error";

export default function CardList() {
  const { productList, error } = useSelector((state) => state.product);
  if (error) return <FetchError />;
  if (!productList) return null;
  return (
    <div className={style.list}>
      {productList.map((pro) => (
        <Card product={pro} key={pro.id} />
      ))}
    </div>
  );
}
