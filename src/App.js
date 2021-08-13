import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clear } from "./store/actions/alertAction";
import theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
/* import {
  getActiveQuestion,
  getAskedQuestion,
  getTopicQuestions,
} from "./store/actions/questionAction";
import { getParticipants } from "./store/actions/studentAction"; */

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  /* const listen = useCallback(() => {
    window.Echo.channel(`question`).listen(
      ".App\\Events\\ActiveQuestion",
      () => {
        dispatch(getActiveQuestion());
        dispatch(getTopicQuestions(topicId));
        dispatch(getAskedQuestion());
      }
    );

    window.Echo.channel(`participants`).listen(
      ".App\\Events\\ParticipantScore",
      () => {
        dispatch(getParticipants());
      }
    );
  }, [dispatch, topicId]);

  useEffect(() => {
    listen();
  }, [listen]); */

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
