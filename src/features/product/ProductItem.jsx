/* eslint-disable react/prop-types */
import StarRating from "../../ui/StarRating";
import { truncateDescription } from "../../util/helper";
import styles from "./ProductItem.module.css";
function ProductItem({ item }) {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img className={styles.img} src={item.thumbnail} alt="flag" />

          <div className={styles.details}>
            <h3>{truncateDescription(item.title, 2)}</h3>

            <p className={styles.itemDesc}>
              {truncateDescription(item.description, 8)}
            </p>
            <p className={styles.itemPrice}>
              <span>$</span>
              {item.price}
            </p>

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
      </div>
    </>
  );
}

export default ProductItem;
