import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import { fetchProductID } from "../../services/apiProduct";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";
import * as Unicons from "@iconscout/react-unicons";
import "./style.css";
import { formatPrice } from "../../util/helper";
import Header from "../../ui/Header/Header";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductID(id);
      setProduct(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (isLoading) return <Loader />;

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className={styles.btnpos}>
      <Header />
      <Link className={styles.btn} to="/">
        <Button>
          <Unicons.UilArrowLeft />
          Back
        </Button>
      </Link>
      <main className={styles.container}>
        {/* Left Column / Headphones Image */}
        <div className={styles["left-column"]}>
          {product.images.map((image, i) => (
            <img
              key={i}
              className={i !== selectedImageIndex ? styles.hidden : ""}
              data-image="black"
              src={image}
              alt=""
            />
          ))}
        </div>

        {/* Right Column */}
        <div className={styles["right-column"]}>
          {/* Product Description */}
          <div className={styles["product-description"]}>
            <span>{product.category}</span>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>

          {/* Product Configuration */}
          <div className={styles["product-configuration"]}>
            {/* Product Color */}
            <div className={styles["product-rbc"]}>
              <p>Rating: </p> <span>{product.rating}</span>
              <div className={styles.verticalLine}></div>
              <p>Brand: </p> <span>{product.brand}</span>
              <div className={styles.verticalLine}></div>
              <p>Category: </p> <span>{product.category}</span>
            </div>

            {/* Cable Configuration */}
            <div className={styles["smallImage"]}>
              {product.images.map((image, i) => (
                <img
                  key={i}
                  data-image="black"
                  src={image}
                  alt=""
                  onClick={() => handleImageClick(i)}
                  className={i === selectedImageIndex ? styles.sactive : ""}
                />
              ))}
            </div>
          </div>

          {/* Product Pricing */}
          <div className={styles["product-price"]}>
            <span>{formatPrice(product.price)}</span>
            <a href="#" className={styles["cart-btn"]}>
              Add to cart
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
