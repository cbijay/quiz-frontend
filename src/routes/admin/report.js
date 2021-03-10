import Reports from "../../pages/reports/Reports";
import ViewReports from "../../pages/reports/ViewReports";

const reportRoutes = {
  path: "/reports",
  component: Reports,
  scope: ["admin"],
  routes: [
    {
      path: "/:topicId",
      component: ViewReports,
      scope: ["admin"],
    },
  ],
};

export default reportRoutes;
