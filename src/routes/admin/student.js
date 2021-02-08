import Students from "../../pages/students/Students";
import AddStudent from "../../pages/students/AddStudent";
import EditStudent from "../../pages/students/EditStudent";

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
  ],
};

export default studentRoutes;
