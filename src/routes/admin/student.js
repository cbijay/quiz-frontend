import Students from "../../pages/students/Students";
import AddStudent from "../../pages/students/AddStudent";
import EditStudent from "../../pages/students/EditStudent";
import ViewStudent from "../../pages/students/ViewStudent";

const studentRoutes = {
  path: "/students",
  component: Students,
  scope: ["admin"],
  routes: [
    {
      path: "/add",
      component: AddStudent,
      scope: ["admin"],
    },
    {
      path: "/edit/:id",
      component: EditStudent,
      scope: ["admin"],
    },
    {
      path: "/:id",
      component: ViewStudent,
      scope: ["admin"],
    },
  ],
};

export default studentRoutes;
