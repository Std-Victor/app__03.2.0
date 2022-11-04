import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialShopList } from "../../redux/Shop-Reducer/shop.slice";

import style from "./Home.module.css";

export default function Home() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialShopList(currentUser.id))
  }, [currentUser])
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Welcome{" "}
        {currentUser ? `Dear Customer ${currentUser.username}.` : "to ..."}
      </h1>
      <p className={style.sub__title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores
        voluptates architecto cupiditate deserunt, harum nobis aspernatur itaque
        unde magnam distinctio consectetur sit laudantium ipsum!
      </p>
    </div>
  );
}
