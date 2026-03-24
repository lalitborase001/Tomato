import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import Home from "./component/Home/Home";
import Navbar  from './component/Navbar/Navbar'
import  DarkTheme  from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';

function App() {
  return (
        <ThemeProvider theme={DarkTheme}>
          <CssBaseline />
<Navbar />          
        <RestaurantDetails />
        </ThemeProvider>
  );
}

export default App