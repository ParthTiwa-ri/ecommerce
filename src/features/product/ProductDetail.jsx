import { Link, useParams } from "react-router-dom";
import style from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import { fetchProductID } from "../../services/apiProduct";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";
import * as Unicons from "@iconscout/react-unicons";
function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(
    function () {
      async function fetch() {
        const data = await fetchProductID(id);
        setProduct(data);
        setLoading(false);
        console.log(data);
      }
      fetch();
    },
    [id]
  );

  if (isLoading) return <Loader />;

  console.log(id);
  return (
    <>
      <Link to="/">
        <Button classname="btnFlex">
          <Unicons.UilArrowLeft />
          Back
        </Button>
      </Link>
      <div className={style.container}>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt="" />
        <img src={product.images.at(0)} alt="" />
        <img src={product.images.at(1)} alt="" />
        <img src={product.images.at(2)} alt="" />
        <img src={product.images.at(3)} alt="" />
      </div>
    </>
  );
}

export default ProductDetail;
