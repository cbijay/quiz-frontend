import Messages from "../../pages/messages/Messages";
import AddMessage from "../../pages/messages/AddMessage";
import EditMessage from "../../pages/messages/EditMessage";

const messageRoutes = {
  path: "/messages",
  component: Messages,
  routes: [
    {
      path: "/add",
      component: AddMessage,
    },
    {
      path: "/edit/:id",
      component: EditMessage,
    },
  ],
};

export default messageRoutes;
