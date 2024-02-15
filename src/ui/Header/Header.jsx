import style from "./Header.module.css";
import headIcon from "../../images/headIcon.png";
import { useSelector } from "react-redux";
import Search from "../../features/Search/Search";
import { Link } from "react-router-dom";
// import Filter from "../../features/Filter/Filter";

function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const cartLength = cart.length;

  return (
    <div className={style.header}>
      <div className={style.icon}>
        <Link to="/">
          <img className={style.img} src={headIcon} alt="" />
        </Link>
        {/* <h3>ShopWorld</h3> */}
        <Search />
      </div>

      {/* <Filter /> */}
      <div className={style.cartContainer}>
        {cart.length === 0 ? (
          <ion-icon name="cart-outline"></ion-icon>
        ) : (
          <ion-icon name="cart"></ion-icon>
        )}
        {cartLength ? (
          <div className={style.cartNumber}>{cartLength}</div>
        ) : null}
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Header;
