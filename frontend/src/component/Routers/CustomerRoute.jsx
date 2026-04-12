import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import RestaurantDetails from "../Restaurant/RestaurantDetails";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";

const CustomerRoute = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetails />}
        />
      </Routes>

      {/* ✅ Modal controlled by URL */}
      <Auth />
    </div>
  );
};

export default CustomerRoute;