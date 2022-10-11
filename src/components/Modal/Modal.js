import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleModal } from "../../redux/Product-Reducer/product.slice";
import { addItem } from "../../redux/Shop-Reducer/shop.slice";
import style from "./modal.module.css";

export default function Modal() {
  const txtFormat = (txt, nrbWord) =>
    txt.split(" ").slice(0, nrbWord).join(" ").concat("...");
  const { openModal, selectedProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!openModal) return null;
  return (
    <div className={style.overlay} onClick={() => dispatch(toggleModal())}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={style.modalContainer}
      >
        <div className={style.modal__header}>
          <div className={style.img__container}>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
          </div>
          <div className={style.product__info}>
            <p className={style.title}>{txtFormat(selectedProduct.title, 5)}</p>
            <p
              className={style.price}
              onClick={() => dispatch(addItem(selectedProduct))}
            >
              {selectedProduct.price}$
            </p>
          </div>
        </div>
        <div className={style.model__footer}>
          <p className={style.description}>
            {txtFormat(selectedProduct.description, 18)}
          </p>
          <button
            className={style.more__btn}
            onClick={() => {
              navigate(`/product/${selectedProduct.id}`);
              dispatch(toggleModal());
            }}
          >
            more...
          </button>
        </div>
      </div>
    </div>
  );
}
