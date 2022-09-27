import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/Product-Detail/Product-Detail";
import ErrorPage from "./pages/Error/Error-Page";
import MainHeader from "./components/Main-Header/Main-Header";

export default function App() {
  return (
    <div className="app__container">
      <MainHeader />
      <Routes>
        <Route path="/app__03/" element={<Navigate to="/app__03/home" />} />
        <Route path="/app__03/home" element={<Home />} />
        <Route path="/app__03/product" element={<Product />} />
        <Route path="/app__03/product/:id" element={<ProductDetail />} />
        <Route path="/app__03/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
