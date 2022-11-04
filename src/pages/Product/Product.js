import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Product.module.css";

import SearchBox from "../../components/Search-Box/Search-Box";
import CardList from "../../components/Card-list/Card-List";
import { fetchProductData } from "../../redux/Product-Reducer/product.api.calls";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

export default function Product() {
  const {
    product: { isFetched, productList },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  useEffect(() => {
    fetchProductData(dispatch);
  }, [dispatch]);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProductsList =
    productList && productList.slice(firstProductIndex, lastProductIndex);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Choose Your Product </h1>
        {isFetched && <SearchBox />}
      </div>
      {productList && <CardList products={currentProductsList} />}
      {productList && (
        <Pagination
          totalPages={Math.ceil(productList.length / productPerPage)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      <Modal />
    </div>
  );
}
