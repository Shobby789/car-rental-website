import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import CarDetails from "./pages/CarDetails";

export default function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:carName/:id" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/cars/:carName/:id" element={<CarDetails />} /> */}
    </Routes>
  );
}
