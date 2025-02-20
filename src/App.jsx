import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import WhatsappBtn from "./components/WhatsappBtn";
import ServiceDetails from "./components/ServiceDetails";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "en");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/pageData/:id" element={<ServiceDetails />} /> */}
          <Route path="/pp/:id" element={<ServiceDetails />} />
        
        </Routes>
        <WhatsappBtn/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
