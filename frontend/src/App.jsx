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

function App() {
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