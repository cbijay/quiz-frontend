import Topics from "../../pages/topics/Topics";
import AddTopic from "../../pages/topics/AddTopic";
import EditTopic from "../../pages/topics/EditTopic";

const topicRoutes = {
  path: "/topics",
  component: Topics,
  scope: ["admin"],
  routes: [
    {
      path: "/add",
      component: AddTopic,
      scope: ["admin"],
    },
    {
      path: "/edit/:id",
      component: EditTopic,
      scope: ["admin"],
    },
  ],
};

export default topicRoutes;
