import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import clsx from "clsx";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import AppStyle from "../../styles/AppStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudents, latestStudents } from "../../store/actions/studentAction";
import { getTopics } from "../../store/actions/topicAction";
import { getAllQuestions } from "../../store/actions/questionAction";
import StudentTable from "../../components/tables/StudentTable";

function AdminDashboard() {
  const classes = AppStyle();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { students } = useSelector((state) => state.students);
  const { topics } = useSelector((state) => state.topics);
  const { questions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const columns = [
    { headingName: "#" },
    { headingName: "Student Name" },
    { headingName: "Email" },
    { headingName: "Phone No" },
    { headingName: "Status" },
  ];

  useEffect(() => {
    dispatch(getStudents());
    dispatch(getTopics());
    dispatch(getAllQuestions());
    dispatch(latestStudents());
  }, [dispatch]);

  return (
    <AppLayout>
      <Typography
        component="h5"
        variant="h6"
        color="textSecondary"
        noWrap
        className={classes.pageHeading}
      >
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Total Students */}
        <Grid item xs={12} md={8} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Total Students
            </Typography>
            <Typography component="p" variant="h4" className={classes.stat}>
              {students.length}
            </Typography>
            <Button component={Link} to="/admin/students" align="left ">
              More Info
            </Button>
          </Paper>
        </Grid>
        {/* Total Topics */}
        <Grid item xs={12} md={8} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Total Topics
            </Typography>
            <Typography component="p" variant="h4" className={classes.stat}>
              {topics.length}
            </Typography>
            <Button component={Link} to="/admin/topics" align="left ">
              More Info
            </Button>
          </Paper>
        </Grid>
        {/* Total Questions */}
        <Grid item xs={12} md={8} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Total Questions
            </Typography>
            <Typography component="p" variant="h4" className={classes.stat}>
              {questions.length}
            </Typography>
            <Button component={Link} to="/admin/questions" align="left ">
              More Info
            </Button>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Latest Students
            </Typography>

            <StudentTable
              dashboard={true}
              students={students}
              columns={columns}
            />
          </Paper>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default AdminDashboard;
