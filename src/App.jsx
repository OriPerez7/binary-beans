import React from "react";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Order from "./components/Order/Order";

const App = () => {
  return <div className="overflow-x-hidden">
    <Hero />
    <Products />
    <Order />
  </div>;
};

export default App;
