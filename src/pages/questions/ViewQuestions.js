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
import clsx from "clsx";
import {
  Add as AddIcon,
  ImportExport as ImportExportIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuestions,
  deleteQuestion,
} from "../../store/actions/questionAction";
import { Link, useHistory } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";
import { getTopic } from "../../store/actions/topicAction";

function ViewQuestions({ match }) {
  const classes = AppStyle();
  const { questions } = useSelector((state) => state.questions);
  const { topic: { title } = {} } = useSelector((state) => state.topics);
  const history = useHistory();
  const dispatch = useDispatch();
  const topicId = match.params.topicId;
  const addQuestionLink = `/admin/questions/${topicId}/add`;
  const importQuestionLink = `/admin/questions/${topicId}/import`;

  const columns = [
    { headingName: "#" },
    { headingName: "Questions" },
    { headingName: "A - Option" },
    { headingName: "B - Option" },
    { headingName: "C - Option" },
    { headingName: "D - Option" },
    { headingName: "Correct Answer" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getTopic(topicId));
    dispatch(getQuestions(topicId));
  }, [dispatch, topicId]);

  const handleEdit = (id) => {
    history.push(`/admin/questions/${topicId}/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteQuestion(id));
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
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to={addQuestionLink}
                    className={clsx(classes.button, classes.circularButton)}
                  >
                    <AddIcon />
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to={importQuestionLink}
                    className={clsx(
                      classes.button,
                      classes.greenButton,
                      classes.circularButton
                    )}
                  >
                    <ImportExportIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
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
              {questions.length > 0 ? (
                questions.map(({ id, question, a, b, c, d, answer }, index) => (
                  <TableRow key={id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell> {question} </TableCell>
                    <TableCell> {a} </TableCell>
                    <TableCell> {b} </TableCell>
                    <TableCell> {c} </TableCell>
                    <TableCell> {d} </TableCell>
                    <TableCell> {answer} </TableCell>
                    <TableCell>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={clsx(classes.editButton, classes.button)}
                            onClick={() => handleEdit(id)}
                          >
                            <CreateIcon className={classes.buttonIcon} />
                            Edit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.button}
                            onClick={() => handleDelete(id)}
                          >
                            <DeleteIcon className={classes.buttonIcon} />
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8}>No record found!!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default ViewQuestions;
