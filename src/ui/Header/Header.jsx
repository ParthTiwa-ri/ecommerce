import style from "./Header.module.css";
import headIcon from "../../images/headIcon.png";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.icon}>
        <img className={style.img} src={headIcon} alt="" />
        <h2>ShopWorld</h2>
      </div>
    </div>
  );
}

export default Header;
