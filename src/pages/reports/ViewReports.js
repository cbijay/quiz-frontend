import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer, getReports } from "../../store/actions/reportAction";
import AppStyle from "../../styles/AppStyle";
import { getTopic } from "../../store/actions/topicAction";

function ViewReports({ match }) {
  const classes = AppStyle();
  const { reports } = useSelector((state) => state.reports);
  const { topic: { title, per_q_mark } = {} } = useSelector(
    (state) => state.topics
  );

  const dispatch = useDispatch();
  const topicId = match.params.topicId;

  const columns = [
    { headingName: "#" },
    { headingName: "Student" },
    { headingName: "Marks" },
    { headingName: "Total Marks" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getTopic(topicId));
    dispatch(getReports(topicId));
  }, [dispatch, topicId]);

  const handleDelete = (userId) => {
    dispatch(deleteAnswer(topicId, userId));
  };

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
                {`${title} Questions`}
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column.headingName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.length > 0 ? (
                reports.map(
                  ({ id, name, mobile, questions, answers }, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell> {name} </TableCell>
                      <TableCell>
                        {answers &&
                          answers.filter(
                            (answer) => answer.answer === answer.user_answer
                          ).length * per_q_mark}
                      </TableCell>
                      <TableCell>{questions * per_q_mark}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          className={classes.button}
                          onClick={() => handleDelete(id)}
                        >
                          <DeleteIcon className={classes.buttonIcon} />
                          Reset Response
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>No record found!!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default ViewReports;
