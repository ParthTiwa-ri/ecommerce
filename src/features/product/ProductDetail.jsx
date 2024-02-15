import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import { fetchProductID } from "../../services/apiProduct";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";
import * as Unicons from "@iconscout/react-unicons";
import "./style.css";
import { discountedPrice, formatPrice } from "../../util/helper";
import Header from "../../ui/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import toast from "react-hot-toast";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dispatch = useDispatch();

  const { id } = useParams();

  const cart = useSelector((state) => state.cart.cart);

  const isInCart = cart.find((item) => item.itemId === product.id);
  const navigate = useNavigate();
  const unitPrice = discountedPrice(product.price, product.discountPercentage);
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

  const handleGoToCart = () => {
    navigate("/cart");
  };

  function handleAddCart() {
    const newItem = {
      itemId: product.id,
      name: product.title,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      img: product.thumbnail,
      desc: product.description,
    };
    if (isInCart) {
      toast.error("Already in cart");
    } else {
      dispatch(addItem(newItem));
      toast.success(`${product.title} Added to cart successfully`);
    }
  }
  return (
    <>
      <div className={styles.btnpos}>
        <Header />
        <Link className={styles.backBtn} to="/">
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
                className={i === selectedImageIndex ? styles.active : ""}
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
              <span>
                <span className={styles["price"]}>Price:</span>
                {formatPrice(unitPrice)}
              </span>
              {!isInCart ? (
                <button onClick={handleAddCart} className={styles["cart-btn"]}>
                  Add to cart
                </button>
              ) : (
                <button
                  onClick={handleGoToCart}
                  className={styles["cart-btn-goto"]}
                >
                  Go to cart
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProductDetail;
