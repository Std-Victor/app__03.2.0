import style from "./Search-Box.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.search}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <AiOutlineSearch className={style.icon} />
    </div>
  );
}
