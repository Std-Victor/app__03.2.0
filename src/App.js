import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/Product-Detail/Product-Detail";
import Shop from "./pages/Shop/Shop";
import ErrorPage from "./pages/Error/Error-Page";
import MainHeader from "./components/Main-Header/Main-Header";
import SignIn from "./pages/Sign-In/SignIn";
import { useSelector } from "react-redux";

export default function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div className="app__container">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        {isAuth && (
          <>
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<Shop />} />
          </>
        )}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin/signin" element={<SignIn />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
