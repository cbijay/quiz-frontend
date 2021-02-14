import { ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clear } from "./store/actions/alertAction";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/admin/index";
import SiteRoutes from "./routes/site/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AdminRoutes />
        <SiteRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
