/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartOverview.module.css";
import { deleteItem } from "./cartSlice";
// import { useState } from "react";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cartCard}>
          {cart.map((item) => (
            <CartCard key={item.itemId} item={item} />
          ))}
        </div>

        <div className={styles.checkOut}>
          <div className={styles.checkOutCard}></div>
        </div>
      </div>
    </div>
  );
}

export default CartOverview;

function CartCard({ item }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(deleteItem(item.itemId));
    console.log(item.itemId);
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
            <span className={styles.minus}>
              <ion-icon name="remove-sharp"></ion-icon>
            </span>
            <span className={styles.num}>1</span>
            <span className={styles.plus}>
              <ion-icon name="add-sharp"></ion-icon>
            </span>
          </div>
          <p className={styles.unitPrice}>{item.unitPrice}</p>
          <p className={styles.totalPrice}>{item.totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
