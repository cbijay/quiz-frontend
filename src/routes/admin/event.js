import Events from "../../pages/events/Events";
import AddEvent from "../../pages/events/AddEvent";
import EditEvent from "../../pages/events/EditEvent";

const eventRoutes = {
  path: "/events",
  component: Events,
  scope: ["admin"],
  routes: [
    {
      path: "/add",
      component: AddEvent,
      scope: ["admin"],
    },
    {
      path: "/edit/:id",
      component: EditEvent,
      scope: ["admin"],
    },
  ],
};

export default eventRoutes;
