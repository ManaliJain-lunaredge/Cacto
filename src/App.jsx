import Home from "./Pages/hOME.JSX";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Aboutus from "./Components/Aboutus";
import Mainproducts from "./Components/Mainproducts";
import Sustainabilty_model from "./Components/Sustainabilty_model";
import Services from "./Components/Services";
import { Routes, Route } from "react-router-dom";
import Catlogue from "./Components/Catlogue";
import Contact from "./Components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      once: true,
    });
  
    return () => AOS.refresh(); // Ensures animations refresh on remount
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<Aboutus />} />
          <Route path="products" element={<Mainproducts />} />
          <Route path="services" element={<Services />} />
          <Route path="catalouge" element={<Catlogue />} />
          <Route path="sustainabilitymodel" element={<Sustainabilty_model />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
