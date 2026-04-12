import React from 'react';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import RestaurantDetails from "../Restaurant/RestaurantDetails";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";

// React Router imports
import { Routes, Route } from 'react-router-dom';

export const CustomerRoute = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/account/login" element={<Auth />} />
        <Route path="/account/register" element={<Auth />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>
      <Auth />
    </div>
  );
};

export default CustomerRoute