import './App.css';
import NavigationComponent from "./components/navigation_component/NavigationComponent";
import {Provider} from "react-redux";
import store from "./store";
import {createTheme, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: orange[800],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

function App() {
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
             <NavigationComponent />
          </ThemeProvider>
      </Provider>

  );
}

export default App;
