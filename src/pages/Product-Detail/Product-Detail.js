import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Product-Detail.module.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/Shop-Reducer/shop.slice";

export default function ProductDetail() {
  const [item, setItem] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    +id > 20
      ? navigate(`/${id}`)
      : fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => response.json())
          .then((json) => setItem(json));
  }, [id]);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.img__container}>
          <img src={item?.image} alt={item?.title} />
          <button
            className={style.add_to_cart}
            onClick={() => dispatch(addItem(item))}
          >
            Add to Cart
          </button>
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
            <button
              className={style.price}
              onClick={() => dispatch(addItem(item))}
            >
              $ {item?.price}
            </button>
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
