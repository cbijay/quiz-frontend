import { useCallback, useEffect } from "react";
import Echo from "laravel-echo";
import { ThemeProvider } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clear } from "./store/actions/alertAction";
import theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
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
  wsHost: process.env.REACT_APP_LARAVEL_ECHO_HOST,
  wsPort: process.env.REACT_APP_LARAVEL_ECHO_PORT,
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
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
