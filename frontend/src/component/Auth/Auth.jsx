import { Modal, Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <Modal
        open={
          location.pathname === "/account/register" ||
          location.pathname === "/account/login"
        }
        onClose={handleClose}
      >
        <Box className="bg-white p-5 rounded-md w-[400px] mx-auto mt-[10%]">
          
          {location.pathname === "/account/register" ? (
            <h2 className="text-xl font-semibold">Register Form</h2>
          ) : (
            <h2 className="text-xl font-semibold">Login Form</h2>
          )}

        </Box>
      </Modal>
    </>
  );
};
export default Auth;