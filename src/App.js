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
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
