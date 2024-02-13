import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.icon}>
        <img className={style.img} src="src/images/headIcon.png" alt="" />
        <h2>ShopWorld</h2>
      </div>
    </div>
  );
}

export default Header;
