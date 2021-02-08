import Reports from "../../pages/reports/Reports";
import ViewReports from "../../pages/reports/ViewReports";

const reportRoutes = {
  path: "/reports",
  component: Reports,
  routes: [
    {
      path: "/:topicId",
      component: ViewReports,
    },
  ],
};

export default reportRoutes;
