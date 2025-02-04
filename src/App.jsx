import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";

const App = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Routes>

    </BrowserRouter>
  );
};

export default App;
