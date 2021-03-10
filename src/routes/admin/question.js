import Questions from "../../pages/questions/Questions";
import ViewQuestions from "../../pages/questions/ViewQuestions";
import AddQuestion from "../../pages/questions/AddQuestion";
import ImportQuestion from "../../pages/questions/ImportQuestion";
import EditQuestion from "../../pages/questions/EditQuestion";

const questionRoutes = {
  path: "/questions",
  component: Questions,
  scope: ["admin"],
  routes: [
    {
      path: "/:topicId",
      component: ViewQuestions,
      scope: ["admin"],
      routes: [
        {
          path: "/add",
          component: AddQuestion,
          scope: ["admin"],
        },
        {
          path: "/edit/:id",
          component: EditQuestion,
          scope: ["admin"],
        },
        {
          path: "/import",
          component: ImportQuestion,
          scope: ["admin"],
        },
      ],
    },
  ],
};

export default questionRoutes;
