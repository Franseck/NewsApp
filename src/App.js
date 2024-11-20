
import AppRouter from "./router/AppRouter";
import "./scss/app.scss"
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Special Elite',
      
    ].join(','),
  },});


function App() {
  return (
    <>
<ThemeProvider theme={theme}>
   <AppRouter/>
</ThemeProvider>
    </>

  );
}

export default App;
