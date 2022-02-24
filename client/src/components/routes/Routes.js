import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../../views/HomeScreen";
import ProductScreen from "../../views/ProductScreen/ProductScreen";
function RouteScreen() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/productScreen/:id" element={<ProductScreen />} />
    </Routes>
  );
}

export default RouteScreen;
