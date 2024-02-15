/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { updateProductList } from "../product/productSlice";
import { fetchProductsSearch } from "../../services/apiProduct";
// import Filter from "../Filter/Filter";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  useEffect(
    function () {
      {
        fetchProductsSearch(searchValue).then((data) =>
          dispatch(updateProductList(data.products))
        );
      }
    },
    [searchValue, dispatch]
  );

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
      {/* <Filter /> */}
    </div>
  );
}

export default Search;
