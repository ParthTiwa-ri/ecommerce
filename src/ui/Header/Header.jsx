import style from "./Header.module.css";
import headIcon from "../../images/headIcon.png";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../features/Search/Search";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
// import Filter from "../../features/Filter/Filter";

function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartLength = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  function handlLogOut() {
    dispatch(logout());
    navigate("/login");
  }
  return (
    <>
      <div className={style.header}>
        <div className={style.icon}>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Smooth scroll behavior
              });
            }}
          >
            <img className={style.img} src={headIcon} alt="" />
          </Link>
          {/* <h3>ShopWorld</h3> */}
          <div className={style.searchHide}>
            <Search />
          </div>
          {/* <div className={style.filterHide}>
            <Filter />
          </div> */}
        </div>

        {/* <Filter /> */}
        <div className={`${style.cartContainer} ${style.cartflex}`}>
          <div onClick={handlLogOut} className={style.logoutIcon}>
            <ion-icon name="log-out-outline"></ion-icon>
            <p>Logout</p>
          </div>
          <Link to="/cart" className={style.cartContainer}>
            {cart.length === 0 ? (
              <ion-icon name="cart-outline"></ion-icon>
            ) : (
              <ion-icon name="cart"></ion-icon>
            )}
            {cartLength ? (
              <div className={style.cartNumber}>{cartLength}</div>
            ) : null}
            <p>Cart</p>
          </Link>
        </div>
      </div>
      <div className={style.searchShow + " " + style.searchHeader}>
        <Search />
      </div>
    </>
  );
}

export default Header;
