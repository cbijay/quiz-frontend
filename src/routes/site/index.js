import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/site/home/Home";
import AdminHome from "../../pages/site/home/AdminHome";
import UserHome from "../../pages/site/home/UserHome";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import About from "../../pages/site/About";
import Contact from "../../pages/site/Contact";
import schoolRoutes from "./school";
import quizRoutes from "./quiz";
import ApplicationForm from "../../pages/site/quiz/ApplicationForm";
import SchoolTeam from "../../pages/site/school/SchoolTeam";
import { useSelector } from "react-redux";

function SiteRoutes() {
  const { user: { role } = {} } = useSelector((state) => state.auth);

  const homeComponent = () => {
    if (role === "A") {
      return <AdminHome />;
    } else if (role === "S") {
      return <UserHome />;
    } else {
      return <Home />;
    }
  };

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
      path: "/",
      component: homeComponent,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/school",
      component: SchoolTeam,
      routes: schoolRoutes,
    },
    {
      path: "/quiz",
      component: ApplicationForm,
      routes: quizRoutes,
    },
  ];

  const flattenRoutes = (routes) =>
    routes
      .map((route) => [route.routes ? flattenRoutes(route.routes) : [], route])
      .flat(Infinity);

  return (
    <Switch>
      {flattenRoutes(buildPaths(routes)).map(
        ({ exact, path, component }, index) => (
          <Route key={index} exact={exact} path={path} component={component} />
        )
      )}
    </Switch>
  );
}

export default SiteRoutes;
