import style from "./Header.module.css";
import headIcon from "../../images/headIcon.png";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className={style.header}>
      <div className={style.icon}>
        <img className={style.img} src={headIcon} alt="" />
        <h2>ShopWorld</h2>
      </div>
      {cart.length === 0 ? (
        <ion-icon size="large" name="cart-outline"></ion-icon>
      ) : (
        <ion-icon size="large" name="cart"></ion-icon>
      )}
    </div>
  );
}

export default Header;
