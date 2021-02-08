import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { Add as AddIcon } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../../store/actions/studentAction";
import { Link } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";
import StudentTable from "../../components/tables/StudentTable";

function Students() {
  const classes = AppStyle();
  const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const columns = [
    { headingName: "#" },
    { headingName: "Student Name" },
    { headingName: "Email" },
    { headingName: "Mobile No" },
    { headingName: "Status" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  return (
    <AppLayout>
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                noWrap
              >
                Students
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={Link}
                to="/admin/students/add"
                className={clsx(classes.button, classes.circularButton)}
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <StudentTable students={students} columns={columns} />
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default Students;
