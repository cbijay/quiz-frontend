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
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../../store/actions/questionAction";
import { Link } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";
import { getTopic } from "../../store/actions/topicAction";
import QuestionTableRow from "../../components/tables/QuestionTableRow";

function ViewQuestions({ match }) {
  const classes = AppStyle();
  const { questions } = useSelector((state) => state.questions);
  const { topic: { title } = {} } = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  const topicId = match.params.topicId;

  //Questions url
  const addQuestionLink = `/admin/questions/${topicId}/add`;
  const importQuestionLink = `/admin/questions/${topicId}/import`;

  const columns = [
    { headingName: "#", align: "left" },
    { headingName: "Questions", align: "left" },
    { headingName: "Question Name", align: "center" },
    { headingName: "Status", align: "center" },
    { headingName: "Actions", align: "left" },
  ];

  useEffect(() => {
    dispatch(getTopic(topicId));
    dispatch(getQuestions(topicId));
  }, [dispatch, topicId]);

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
                {columns.map(({ headingName, align }, index) => (
                  <TableCell key={index} align={align}>
                    {headingName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.length > 0 ? (
                questions.map((question, index) => (
                  <QuestionTableRow
                    key={index}
                    topicId={topicId}
                    row={question}
                  />
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
