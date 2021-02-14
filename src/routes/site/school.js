import SchoolTeam from "../../pages/site/school/SchoolTeam";
import Register from "../../pages/auth/Register";
import SchoolSyllabus from "../../pages/site/school/SchoolSyllabus";

const schoolRoutes = [
  {
    path: "/team",
    component: SchoolTeam,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/syllabus",
    component: SchoolSyllabus,
  },
];

export default schoolRoutes;
