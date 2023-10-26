import { Dashboard } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo,Navigate } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import { themeSettings } from "theme";
import { dashboard } from "scenes/dashboard";
import Layout from "scenes/layout"

function App() {
  const mode = useSelector((state) => state.global.mode); // select the mode which is accessible from every where
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/Dashboard" replace/>}/>
              <Route path ="/dashboard" element={<dashboard/>}/>

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
