import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Product-Detail.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ProductDetail() {
  const [item, setItem] = useState();
  let navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    +id > 20
      ? navigate(`/${id}`)
      : fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => response.json())
          .then((json) => setItem(json));
  }, [id]);
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.img__container}>
          <img src={item?.image} alt={item?.title} />
        </div>
        <div className={style.item__info}>
          <div className={style.title__cat}>
            <h1>{item?.title}</h1>
            <p>category : {item?.category}</p>
          </div>
          <div className={style.rate__price}>
            <div className={style.rating}>
              <span className={style.rate}>
                <AiFillStar className={style.icon} />
                {item?.rating.rate}
              </span>
              <span className={style.count}>({item?.rating.count})</span>
            </div>
            <button className={style.price}>$ {item?.price}</button>
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h3>Description :</h3>
        <p>{item?.description}</p>
      </div>
    </div>
  );
}
