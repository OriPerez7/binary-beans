import React from "react";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Order from "./components/Order/Order";
import AppsBanner from "./components/AppsBanner/AppsBanner";

const App = () => {
  return <div className="overflow-x-hidden">
    <Hero />
    <Products />
    <Order />
    <AppsBanner />
  </div>;
};

export default App;
