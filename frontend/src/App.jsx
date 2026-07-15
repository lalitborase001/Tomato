import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import DarkTheme from "./Theme/DarkTheme";
import CustomerRoute from "./component/Routers/CustomerRoute";
import { getUser } from "./component/State/Authentication/Action";

function App() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const jwt = auth?.jwt || localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;