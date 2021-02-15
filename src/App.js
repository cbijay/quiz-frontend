import Echo from "laravel-echo";
import { ThemeProvider } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clear } from "./store/actions/alertAction";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/admin/index";
import SiteRoutes from "./routes/site/index";
import {
  getActiveQuestion,
  getAllQuestions,
} from "./store/actions/questionAction";
import { getParticipants } from "./store/actions/studentAction";

//Import Pusher
window.Pusher = require("pusher-js");

//Laravel Echo config
window.Echo = new Echo({
  broadcaster: "pusher",
  key: "myKey",
  wsHost: "127.0.0.1",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  const listen = useCallback(() => {
    window.Echo.channel(`question`).listen(
      ".App\\Events\\ActiveQuestion",
      () => {
        dispatch(getActiveQuestion());
        dispatch(getAllQuestions());
      }
    );

    window.Echo.channel(`participants`).listen(
      ".App\\Events\\ParticipantScore",
      () => {
        dispatch(getParticipants());
      }
    );
  }, [dispatch]);

  useEffect(() => {
    listen();
  }, [listen]);

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
