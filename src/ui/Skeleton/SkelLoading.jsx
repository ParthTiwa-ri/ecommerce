import styles from "./SkelLoading.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkelLoading() {
  return (
    <div className={styles.card}>
      <Skeleton />
    </div>
  );
}

export default SkelLoading;
