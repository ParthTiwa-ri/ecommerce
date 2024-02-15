/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./Search.module.css";
// import { useDispatch } from "react-redux";
// import { updateProductList } from "../product/productSlice";
// import { fetchProductsSearch } from "../../services/apiProduct";
import { useNavigate } from "react-router-dom";
// import Filter from "../Filter/Filter";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(
  //   function () {
  //     {
  //       fetchProductsSearch(searchValue).then((data) =>
  //         dispatch(updateProductList(data.products))
  //       );
  //     }
  //   },
  //   [searchValue, dispatch]
  // );
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
    setSearchValue("");
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit} className={styles.input}>
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
