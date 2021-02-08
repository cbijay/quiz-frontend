import Questions from "../../pages/questions/Questions";
import ViewQuestions from "../../pages/questions/ViewQuestions";
import AddQuestion from "../../pages/questions/AddQuestion";
import ImportQuestion from "../../pages/questions/ImportQuestion";
import EditQuestion from "../../pages/questions/EditQuestion";

const questionRoutes = {
  path: "/questions",
  component: Questions,
  routes: [
    {
      path: "/:topicId",
      component: ViewQuestions,
      routes: [
        {
          path: "/add",
          component: AddQuestion,
        },
        {
          path: "/edit/:id",
          component: EditQuestion,
        },
        {
          path: "/import",
          component: ImportQuestion,
        },
      ],
    },
  ],
};

export default questionRoutes;
