/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { updateProductList } from "../product/productSlice";
import { fetchProductsSearch } from "../../services/apiProduct";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (searchValue) {
        fetchProductsSearch(searchValue).then((data) =>
          dispatch(updateProductList(data.products))
        );
      }
    },
    [searchValue, dispatch]
  );

  function handleVisible() {
    setIsVisible((visible) => !visible);
  }
  return (
    <div className={styles.search}>
      <form className={styles.input} onSubmit={(e) => e.preventDefault()}>
        <Unicons.UilSearch style={{ outline: "gray", color: "gray" }} />
        <input
          placeholder="Search for a product"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <div className={styles.filter} onClick={handleVisible}>
        <p>Filter By Price</p>
        <Unicons.UilAngleDown />

        {isVisible && (
          <div className={styles.filterMenu}>
            <PriceOption price="All" />
            <PriceOption price="Less than $500" />
            <PriceOption price="Between $500 and $1000" />
            <PriceOption price="Greater than $1000" />
          </div>
        )}
      </div>
    </div>
  );
}

function PriceOption({ price }) {
  return <p style={{ color: "gray", fontSize: "1.2rem" }}>{price}</p>;
}

export default Search;
