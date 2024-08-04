import React from "react";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Order from "./components/Order/Order";
import AppsBanner from "./components/AppsBanner/AppsBanner";
import Footer from "./components/Footer/Footer";

const App = () => {
  return <div className="overflow-x-hidden">
    <Hero />
    <Products />
    <Order />
    <AppsBanner />
    <Footer />
  </div>;
};

export default App;
