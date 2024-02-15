import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { fetchProducts } from "../../services/apiProduct";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../ui/Loader/Loader";
import { updateProductList } from "./productSlice";
import ItemNotFound from "../../ui/ItemNotFound/ItemNotFound";
import { discountedPrice } from "../../util/helper";
import ProductHeader from "../../ui/ProductHeader/ProductHeader";

function Products() {
  const products = useSelector((state) => state.product.productList);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const asc = useSelector((state) => state.filter.asc);
  const des = useSelector((state) => state.filter.des);
  const above = useSelector((state) => state.filter.above);
  const one = useSelector((state) => state.filter.one);
  const five = useSelector((state) => state.filter.five);

  useEffect(() => {
    async function fetch() {
      const data = await fetchProducts();
      dispatch(updateProductList(data.products));
      setLoading(false);
      // fetchProducts().then((data) =>
      //   dispatch(updateProductList(data.products))
      // );
    }
    fetch();
  }, [dispatch]);

  let productList;

  switch (true) {
    case asc:
      productList = products.slice().sort((a, b) => a.price - b.price);
      break;
    case des:
      productList = products.slice().sort((a, b) => b.price - a.price);
      break;
    case five:
      productList = products.filter(
        (item) => discountedPrice(item.price, item.discountPercentage) <= 500
      );
      break;
    case one:
      productList = products.filter(
        (item) =>
          discountedPrice(item.price, item.discountPercentage) > 500 &&
          discountedPrice(item.price, item.discountPercentage) <= 1000
      );
      break;
    case above:
      productList = products.filter(
        (item) => discountedPrice(item.price, item.discountPercentage) > 1000
      );
      break;
    default:
      productList = products;
      break;
  }

  if (isLoading) return <Loader />;

  if (productList.length === 0) {
    return <ItemNotFound />;
  }
  return (
    <>
      <ProductHeader />
      <div className={styles.cards}>
        {/* <SkelLoading /> */}
        {productList.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Products;
