import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { authReducer } from "./auth/authReducer";
import { studentReducer } from "./studentReducer";
import { topicReducer } from "./topicReducer";
import { questionReducer } from "./questionReducer";
import { reportReducer } from "./reportReducer";
import { messageReducer } from "./messageReducer";
import { subjectReducer } from "./subjectReducer";
import { eventReducer } from "./eventReducer";
import { paymentReducer } from "./paymentReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  students: studentReducer,
  topics: topicReducer,
  questions: questionReducer,
  reports: reportReducer,
  messages: messageReducer,
  subjects: subjectReducer,
  events: eventReducer,
  payments: paymentReducer,
});
