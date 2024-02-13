import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { fetchProducts } from "../../services/apiProduct";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../ui/Loader/Loader";
import { updateProductList } from "./productSlice";
import ItemNotFound from "../../ui/ItemNotFound/ItemNotFound";

function Products() {
  const product = useSelector((state) => state.product.productList);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  console.log(product);

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

  if (isLoading) return <Loader />;

  if (product.length === 0) {
    return <ItemNotFound />;
  }
  return (
    <>
      <div className={styles.cards}>
        {product.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Products;
