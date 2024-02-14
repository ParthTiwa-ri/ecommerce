/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import StarRating from "../../ui/StarRating";
import {
  discountedPrice,
  formatPrice,
  truncateDescription,
} from "../../util/helper";
import styles from "./ProductItem.module.css";
function ProductItem({ item }) {
  return (
    <>
      <Link to={`product/${item.id}`} className={styles.card}>
        <div>
          <div className={styles.category}>{item?.category}</div>
          <img className={styles.img} src={item.thumbnail} alt="flag" />

          <div className={styles.details}>
            <h3>{truncateDescription(item.title, 2)}</h3>

            <p className={styles.itemDesc}>
              {truncateDescription(item.description, 8)}
            </p>
            {/* <p className={styles.itemPrice}>
              <span>$</span>
              {item.price}
              
            </p> */}

            <div className={styles.price}>
              <span className={styles.oldPrice}>
                {formatPrice(item?.price)}
              </span>
              <span className={styles.newPrice}>
                {formatPrice(
                  discountedPrice(item.price, item.discountPercentage)
                )}
              </span>
              <span className={`${styles.discount} ${styles.fw6}`}>
                ({item?.discountPercentage}% Off)
              </span>
            </div>
            <StarRating
              maxRating={5} // Optional: Maximum rating, default is 5
              defaultRating={item.rating} // Optional: Default rating, default is 0
              color="#fcc419" // Optional: Color of the stars, default is "#fcc419"
              size={18} // Optional: Size of the stars, default is 48
            />
          </div>
        </div>
        <div className={styles.addtocart}>
          <p>Add to Cart</p>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
