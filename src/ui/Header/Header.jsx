import style from "./Header.module.css";
import headIcon from "../../images/headIcon.png";
import { useSelector } from "react-redux";
import Search from "../../features/Search/Search";
// import Filter from "../../features/Filter/Filter";

function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const cartLength = cart.length;

  return (
    <div className={style.header}>
      <div className={style.icon}>
        <img className={style.img} src={headIcon} alt="" />
        {/* <h3>ShopWorld</h3> */}
        <Search />
      </div>

      {/* <Filter /> */}
      <div className={style.cartContainer}>
        {cart.length === 0 ? (
          <ion-icon size="large" name="cart-outline"></ion-icon>
        ) : (
          <ion-icon size="large" name="cart"></ion-icon>
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
