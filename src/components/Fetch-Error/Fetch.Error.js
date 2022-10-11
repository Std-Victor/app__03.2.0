import React from "react";
import { useSelector } from "react-redux";

import style from "../../pages/Error/Error-Pge.module.css";

export default function FetchError() {
  return (
    <div className={style.container}>
      <p>503!</p>
      <h3>Faild to fetch data</h3>
    </div>
  );
}