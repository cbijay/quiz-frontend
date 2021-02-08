import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { authReducer } from "./auth/authReducer";
import { questionReducer } from "./questionReducer";
import { reportReducer } from "./reportReducer";
import { studentReducer } from "./studentReducer";
import { topicReducer } from "./topicReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  students: studentReducer,
  topics: topicReducer,
  questions: questionReducer,
  reports: reportReducer,
});
