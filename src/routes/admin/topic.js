import Topics from "../../pages/topics/Topics";
import AddTopic from "../../pages/topics/AddTopic";
import EditTopic from "../../pages/topics/EditTopic";

const topicRoutes = {
  path: "/topics",
  component: Topics,
  routes: [
    {
      path: "/add",
      component: AddTopic,
    },
    {
      path: "/edit/:id",
      component: EditTopic,
    },
  ],
};

export default topicRoutes;
