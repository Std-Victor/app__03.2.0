import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Product.module.css";

import SearchBox from "../../components/Search-Box/Search-Box";
import CardList from "../../components/Card-list/Card-List";
import { fetchProductData } from "../../redux/Product-Reducer/product.api.calls";
import Modal from "../../components/Modal/Modal";

export default function Product() {
  const isFetched = useSelector((state) => state.product.isFetched);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProductData(dispatch);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Choose Your Product </h1>
        {isFetched && <SearchBox />}
      </div>
      <CardList />
      <Modal />
    </div>
  );
}
