import Messages from "../../pages/messages/Messages";
import AddMessage from "../../pages/messages/AddMessage";
import EditMessage from "../../pages/messages/EditMessage";

const messageRoutes = {
  path: "/messages",
  component: Messages,
  scope: ["admin"],
  routes: [
    {
      path: "/add",
      component: AddMessage,
      scope: ["admin"],
    },
    {
      path: "/edit/:id",
      component: EditMessage,
      scope: ["admin"],
    },
  ],
};

export default messageRoutes;
