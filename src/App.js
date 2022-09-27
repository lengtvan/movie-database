import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MovProvider } from "./contexts/MovieContext";
import MyRoute from "./Routes/Router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
theme = responsiveFontSizes(darkTheme);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <MovProvider>
      <BrowserRouter>
        <MyRoute />
      </BrowserRouter>
    </MovProvider>
    </ThemeProvider>
   
  );
}

export default App;
