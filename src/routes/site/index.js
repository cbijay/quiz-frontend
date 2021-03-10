import Home from "../../pages/site/home/Home";
import AdminHome from "../../pages/site/home/AdminHome";
import UserHome from "../../pages/site/home/UserHome";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import About from "../../pages/site/About";
import Contact from "../../pages/site/Contact";
import Gallery from "../../pages/site/Gallery";
import schoolRoutes from "./school";
import quizRoutes from "./quiz";
import ApplicationForm from "../../pages/site/quiz/ApplicationForm";
import SchoolTeam from "../../pages/site/school/SchoolTeam";
import Events from "../../pages/site/Events";
import NotFound from "../../pages/error/NotFound";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  const { user: { role } = {} } = useSelector((state) => state.auth);

  if (role === "A") {
    return <AdminHome />;
  } else if (role === "S") {
    return <UserHome />;
  } else {
    return <Home />;
  }
};

const siteRoutes = [
  {
    exact: true,
    path: "/",
    component: HomeComponent,
    scope: ["site"],
  },
  {
    path: "/login",
    component: Login,
    scope: ["site"],
  },
  {
    path: "/register",
    component: Register,
    scope: ["site"],
  },
  {
    path: "/about",
    component: About,
    scope: ["site"],
  },
  {
    path: "/contact",
    component: Contact,
    scope: ["site"],
  },
  {
    path: "/gallery",
    component: Gallery,
    scope: ["site"],
  },
  {
    path: "/school",
    component: SchoolTeam,
    routes: schoolRoutes,
    scope: ["site"],
  },
  {
    path: "/quiz",
    component: ApplicationForm,
    routes: quizRoutes,
    scope: ["site"],
  },
  {
    path: "/events",
    component: Events,
    scope: ["site"],
  },
  {
    path: "*",
    component: NotFound,
    scope: ["site"],
  },
];

export default siteRoutes;
