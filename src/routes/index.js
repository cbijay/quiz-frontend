import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "../components/route/PrivateRoute";
import adminRoutes from "./admin";
import siteRoutes from "./site";

function Routes() {
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

  const routes = [...adminRoutes, ...siteRoutes];

  const flattenRoutes = (routes) =>
    routes
      .map((route) => [route.routes ? flattenRoutes(route.routes) : [], route])
      .flat(Infinity);

  return (
    <Switch>
      {flattenRoutes(
        buildPaths(routes)
      ).map(({ exact, path, component, scope }, index) =>
        scope && scope.includes("admin") ? (
          <PrivateRoute
            key={index}
            exact={exact}
            path={path}
            role={role}
            component={component}
          />
        ) : (
          <Route key={index} exact={exact} path={path} component={component} />
        )
      )}
    </Switch>
  );
}

export default Routes;
