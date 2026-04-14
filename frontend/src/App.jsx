import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import Home from "./component/Home/Home";
import Navbar  from './component/Navbar/Navbar'
import  DarkTheme  from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import CustomerRoute from "./component/Routers/CustomerRoute";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth}= useSelector((store) => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  return (
        <ThemeProvider theme={DarkTheme}>
          <CssBaseline />
          
        {/* <RestaurantDetails /> */}
        {/*<Cart />*/}
        {/*<Home />*/}
        {/*<Profile/>*/}
        <CustomerRoute /> 
        </ThemeProvider>
  );
}

export default App