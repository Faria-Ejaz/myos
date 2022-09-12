import { createTheme, ThemeProvider } from "@mui/material/styles";
//Components
import Nav from './components/Nav/Nav';
import ProductListing from './components/Products/ProductListing';
import { DialogBox } from "./components/DialogBox/DialogBox";
//Context
import {CartContextProvider} from "./context/CartContext";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

function App() {
  return (
    <CartContextProvider>
    <ThemeProvider theme={theme}>
      <Nav/>
      <DialogBox/>
      <ProductListing/>
    </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
