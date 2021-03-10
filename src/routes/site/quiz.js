import ApplicationForm from "../../pages/site/quiz/ApplicationForm";
import QuizRules from "../../pages/site/quiz/QuizRules";
import QuizSyllabus from "../../pages/site/quiz/QuizSyllabus";
import QuizTeam from "../../pages/site/quiz/QuizTeam";

const quizRoutes = [
  {
    path: "/application-form",
    component: ApplicationForm,
    scope: ["site"],
  },
  {
    path: "/syllabus",
    component: QuizSyllabus,
    scope: ["site"],
  },
  {
    path: "/rules",
    component: QuizRules,
    scope: ["site"],
  },
  {
    path: "/team",
    component: QuizTeam,
    scope: ["site"],
  },
];

export default quizRoutes;
