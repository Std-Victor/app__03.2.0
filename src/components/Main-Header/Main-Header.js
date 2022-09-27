import { NavLink, Link } from "react-router-dom";
import style from "./Main-Header.module.css";

export default function MainHeader() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link to="/">LOGO</Link>
      </div>
      <div className={style.nav__links}>
        <ul>
          <li>
            <NavLink
              className={(data) => (data.isActive ? style.active : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(data) => (data.isActive ? style.active : "")}
              to="/product"
            >
              Product
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.sign}>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
}
