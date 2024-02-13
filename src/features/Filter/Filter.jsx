/* eslint-disable react/prop-types */
import * as Unicons from "@iconscout/react-unicons";
import styles from "./Filter.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductList } from "../product/productSlice";
function Filter() {
  const [isVisible, setIsVisible] = useState(false);
  const products = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  function handleVisible() {
    setIsVisible((visible) => !visible);
  }

  function handleFilterClick() {
    const sortedProducts = products.slice().sort((a, b) => a.price - b.price);

    dispatch(updateProductList(sortedProducts));
  }
  return (
    <div className={styles.filter} onClick={handleVisible}>
      <p>Filter By Price</p>
      <Unicons.UilAngleDown />

      {isVisible && (
        <div className={styles.filterMenu}>
          <p onClick={handleFilterClick} className={styles.p}>
            Ascending
          </p>
        </div>
      )}
    </div>
  );
}

export default Filter;
