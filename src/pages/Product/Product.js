import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import style from "./Product.module.css";

import SearchBox from "../../components/Search-Box/Search-Box";
import CardList from "../../components/Card-list/Card-List";

import {fetchData} from "../../redux/Product-Reducer/product.actions";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => dispatch(fetchData(json)));
  }, []);

  const handleChange = (e) => setSearchField(e.target.value);
  const filteredPro = products.filter((pro) =>
    pro.title.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Choose Your Product </h1>
        <SearchBox
          placeholder={`search for product`}
          handleChange={handleChange}
        />
      </div>
      <CardList products={filteredPro} />
    </div>
  );
}
