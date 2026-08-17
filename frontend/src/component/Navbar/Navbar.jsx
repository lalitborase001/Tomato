import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Person } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (auth?.user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };

  return (
    <Box
      className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between"
    >
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          className="logo font-semibold text-gray-700 list-none"
          onClick={() => navigate("/")}
        >
          Tomato
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>

        {auth?.user ? (
          <Avatar
            sx={{ bgcolor: "white", color: pink.A400, cursor: "pointer" }}
            onClick={handleAvatarClick}
          >
            {auth.user.fullName?.charAt(0).toUpperCase()}
          </Avatar>
        ) : (
          <IconButton onClick={() => navigate("/account/login")}>
            <Person />
          </IconButton>
        )}

        <IconButton onClick={() => navigate("/cart")}>
          <Badge
            color="secondary"
            badgeContent={cart?.cart?.cartItems?.length || 0}
          >
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </IconButton>
      </div>
    </Box>
  );
};

export default Navbar;