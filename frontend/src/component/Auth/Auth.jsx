import { Modal, Box } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegister = location.pathname === "/account/register";
  const isLogin = location.pathname === "/account/login";

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Modal
      open={isRegister || isLogin}   // ✅ boolean ONLY
      onClose={handleClose}
    >
      <Box
        className="bg-white p-6 rounded-lg w-[400px]"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none"
        }}
      >
        {/* ✅ SHOW FORM */}
        {isRegister ? <RegisterForm /> : <LoginForm />}
      </Box>
    </Modal>
  );
};

export default Auth;