import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../../views/HomeScreen";
import ProductScreen from "../../views/ProductScreen/ProductScreen";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
function RouteScreen() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/productScreen/:id" element={<ProductScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RouteScreen;
