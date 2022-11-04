import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GrShop } from "react-icons/gr";

import style from "./Main-Header.module.css";

import { CardDropdown } from "../CardDropdown/CardDropdown";
import { toggleCartHidden } from "../../redux/Cart/cart.slice";
import { singOut } from "../../redux/user/user.slice";

export default function MainHeader() {
  const {
    shop: { total_selected_item: item_selected },
    cart: { hidden },
    user: { isAuth },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
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
          {isAuth && (
            <>
              <li>
                <NavLink
                  className={(data) => (data.isActive ? style.active : "")}
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              <li>
                {item_selected ? (
                  <NavLink
                    className={(data) => (data.isActive ? style.active : "")}
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                ) : null}
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={style.left__side}>
        {isAuth && <div
          className={style.shopping}
          onClick={() => dispatch(toggleCartHidden())}
        >
          <GrShop className={style.shopping__icon} />
          <span className={style.shop__item}>{item_selected}</span>
          {hidden ? null : <CardDropdown />}
        </div>}
        <div className={style.sign}>
          {!isAuth ? (
            <Link to={"/signin"}>
              <button>Sign In</button>
            </Link>
          ) : (
            <button onClick={() => dispatch(singOut())}>Sign Out</button>
          )}
        </div>
      </div>
    </nav>
  );
}
