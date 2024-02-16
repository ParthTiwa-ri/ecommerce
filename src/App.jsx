import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Cart from "./pages/Cart";
import ProductDetail from "./features/product/ProductDetail";
import Products from "./features/product/Products";
import { Toaster } from "react-hot-toast";
import SearchPage from "./features/Search/SearchPage";
import CartOverview from "./features/cart/CartOverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products from="home" />} />

          <Route path="cart" element={<CartOverview />} />
          <Route path="search/:query" element={<SearchPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
