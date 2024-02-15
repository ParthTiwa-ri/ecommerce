/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartOverview.module.css";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";
import { useEffect } from "react";
import { formatPrice } from "../../util/helper";
import toast from "react-hot-toast";
// import { useState } from "react";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.cartCard}>
            {cart.map((item) => (
              <CartCard key={item.itemId} item={item} />
            ))}
          </div>

          <div className={styles.checkOut}>
            <div className={styles.checkOutCard}>
              <h1>Cart totals</h1>
              <div className={styles.subtotal}>
                <p>SUBTOTAL</p>
                <span>{formatPrice(total)}</span>
              </div>
              <div className={styles.total}>
                <p>TOTAL</p>
                <span className={styles.bold}>{formatPrice(total)}</span>
              </div>
              <button className={styles.chkoutBtn}>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.chkoutBtnbtm}>Proceed to checkout</button>
    </>
  );
}

export default CartOverview;

function CartCard({ item }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(deleteItem(item.itemId));
    toast.success(`${item.name} removed successfully`);
  }

  function handleInc() {
    dispatch(increaseItemQuantity(item.itemId));
    toast.success(`${item.name} quantity increased`);
  }
  function handleDec() {
    dispatch(decreaseItemQuantity(item.itemId));
    toast.success(`${item.name} quantity decreased`);
  }
  return (
    <div className={styles.card}>
      <div onClick={handleRemove} className={styles.close}>
        <ion-icon size="large" name="close-sharp"></ion-icon>
      </div>
      <div className={styles.cardImage}>
        <img className={styles.images} src={item.img} alt="" />
      </div>
      <div className={styles.cardDetails}>
        <h1>{item.name}</h1>
        <p className={styles.gray}>{item.desc}</p>
        <div className={styles.quantity}>
          <p>Qty: </p>
          <div className={styles.qtyWrapper}>
            <span onClick={handleDec} className={styles.minus}>
              <ion-icon name="remove-sharp"></ion-icon>
            </span>
            <span className={styles.num}>{item.quantity}</span>
            <span onClick={handleInc} className={styles.plus}>
              <ion-icon name="add-sharp"></ion-icon>
            </span>
          </div>
          <p className={styles.unitPrice}>{formatPrice(item.unitPrice)}</p>
          <p className={styles.totalPrice}>{formatPrice(item.totalPrice)}</p>
        </div>
      </div>
    </div>
  );
}
