import React from "react";
import Header from "./Header";
import Aboutus from "../Components/Aboutus";
import Hero from "../Components/Hero";
import Footer from "./Footer";
import Missiom_vision from "../Components/Missiom_vision";
import Products from "../Components/Products";
import Cacto from "../Components/Cacto";
import Contact from "../Components/Contact";
import Sustainabilty_model from "../Components/Sustainabilty_model";
import Leadther from "../Components/Leadther";
import Catlogue from "../Components/Catlogue";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Aboutus />
      <Cacto />
      <Missiom_vision />
      <Leadther/>
      <Sustainabilty_model/>
      <Catlogue/>
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
