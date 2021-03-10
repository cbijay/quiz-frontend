import SchoolTeam from "../../pages/site/school/SchoolTeam";
import Register from "../../pages/auth/Register";
import SchoolSyllabus from "../../pages/site/school/SchoolSyllabus";

const schoolRoutes = [
  {
    path: "/team",
    component: SchoolTeam,
    scope: ["site"],
  },
  {
    path: "/register",
    component: Register,
    scope: ["site"],
  },
  {
    path: "/syllabus",
    component: SchoolSyllabus,
    scope: ["site"],
  },
];

export default schoolRoutes;
