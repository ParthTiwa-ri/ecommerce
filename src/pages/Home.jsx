import Search from "../features/Search/Search";
import Products from "../features/product/Products";
import Header from "../ui/Header/Header";
import ProductHeader from "../ui/ProductHeader/ProductHeader";

function Home() {
  return (
    <>
      <Header />
      <Search />
      <ProductHeader />
      <Products />
    </>
  );
}

export default Home;
