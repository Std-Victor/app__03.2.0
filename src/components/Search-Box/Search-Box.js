import style from "./Search-Box.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchForProduct } from "../../redux/Product-Reducer/product.slice";

export default function SearchBox() {
  const products = useSelector((state) => state.product.productList);
  const [productList, setProductList] = useState();
  const dispatch = useDispatch();
  useEffect(() => setProductList([...products]), []);
  const handleChange = (e) =>
    dispatch(
      searchForProduct(
        [
          ...new Map(
            [...productList, ...products].map((item) => [item.id, item])
          ).values(),
        ].filter((prd) =>
          prd.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    );
  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.search}
        placeholder="Search for Product"
        onChange={handleChange}
      />
      <AiOutlineSearch className={style.icon} />
    </div>
  );
}
