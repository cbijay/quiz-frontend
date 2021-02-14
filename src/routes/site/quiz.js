import ApplicationForm from "../../pages/site/quiz/ApplicationForm";
import QuizRules from "../../pages/site/quiz/QuizRules";
import QuizSyllabus from "../../pages/site/quiz/QuizSyllabus";
import QuizTeam from "../../pages/site/quiz/QuizTeam";

const quizRoutes = [
  {
    path: "/application-form",
    component: ApplicationForm,
  },
  {
    path: "/syllabus",
    component: QuizSyllabus,
  },
  {
    path: "/rules",
    component: QuizRules,
  },
  {
    path: "/team",
    component: QuizTeam,
  },
];

export default quizRoutes;
