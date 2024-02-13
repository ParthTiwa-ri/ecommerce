import Search from "../features/Search/Search";
import Products from "../features/product/Products";
import Header from "../ui/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Search />
      <Products />
    </>
  );
}

export default Home;
