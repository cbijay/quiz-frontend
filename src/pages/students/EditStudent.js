import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import StudentForm from "../../components/forms/StudentForm";
import { useSelector, useDispatch } from "react-redux";
import { getStudent } from "../../store/actions/studentAction";

function EditStudent({ match }) {
  const { student } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const studentId = match.params.id;

  useEffect(() => {
    dispatch(getStudent(studentId));
  }, [dispatch, studentId]);

  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Edit Student
              </Typography>
              <Divider />

              <StudentForm mode="edit" student={student} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditStudent;
