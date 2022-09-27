import style from "./Error-Pge.module.css";

export default function ErrorPage() {
  return (
    <div className={style.container}>
      <p>404!</p>
      <h3>Page not found</h3>
    </div>
  );
}
