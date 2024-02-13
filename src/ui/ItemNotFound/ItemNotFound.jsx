import styles from "./ItemNotFound.module.css";
import itemNotFoundImg from "../../images/ItemNotFound.webp";
function ItemNotFound() {
  return (
    <div className={styles.centerImg}>
      <img src={itemNotFoundImg} alt="ItemNotFound" />
    </div>
  );
}

export default ItemNotFound;
