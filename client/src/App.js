import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.global.mode); // select the mode which is accessible from every where
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return <div className="app"></div>;
}

export default App;
