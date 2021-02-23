import Students from "../../pages/students/Students";
import AddStudent from "../../pages/students/AddStudent";
import EditStudent from "../../pages/students/EditStudent";
import ViewStudent from "../../pages/students/ViewStudent";

const studentRoutes = {
  path: "/students",
  component: Students,
  routes: [
    {
      path: "/add",
      component: AddStudent,
    },
    {
      path: "/edit/:id",
      component: EditStudent,
    },
    {
      path: "/:id",
      component: ViewStudent,
    },
  ],
};

export default studentRoutes;
