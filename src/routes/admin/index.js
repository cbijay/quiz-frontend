import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "../../components/route/PrivateRoute";
import AdminDashboard from "../../pages/dashboard/AdminDashboard";
import studentRoutes from "./student";
import topicRoutes from "./topic";
import questionRoutes from "./question";
import reportRoutes from "./report";
import messageRoutes from "./message";

function AdminRoutes() {
  const { user: { role } = {} } = useSelector((state) => state.auth);
  const combinePaths = (parent, child) =>
    `${parent.replace(/\/$/, "")}/${child.replace(/^\//, "")}`;

  const buildPaths = (navigation, parentPath = "") =>
    navigation.map((route) => {
      const path = combinePaths(parentPath, route.path);

      return {
        ...route,
        path,
        ...(route.routes && { routes: buildPaths(route.routes, path) }),
      };
    });

  const routes = [
    {
      exact: true,
      path: "/admin",
      component: AdminDashboard,
      routes: [
        studentRoutes,
        topicRoutes,
        questionRoutes,
        reportRoutes,
        messageRoutes,
      ],
    },
  ];

  const flattenRoutes = (routes) =>
    routes
      .map((route) => [route.routes ? flattenRoutes(route.routes) : [], route])
      .flat(Infinity);

  return (
    <>
      <Switch>
        {flattenRoutes(buildPaths(routes)).map(
          ({ exact, path, component }, index) => (
            <PrivateRoute
              key={index}
              exact={exact}
              path={path}
              role={role}
              component={component}
            />
          )
        )}
      </Switch>
    </>
  );
}

export default AdminRoutes;
