import React from "react";

import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome to ...</h1>
      <p className={style.sub__title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores
        voluptates architecto cupiditate deserunt, harum nobis aspernatur itaque
        unde magnam distinctio consectetur sit laudantium ipsum!
      </p>
    </div>
  );
}
