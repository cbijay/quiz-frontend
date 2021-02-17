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
  Create as CreateIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getTopics, deleteTopic } from "../../store/actions/topicAction";
import { Link, useHistory } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";

function Topics() {
  const classes = AppStyle();
  const { topics } = useSelector((state) => state.topics);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Topic Title" },
    { headingName: "Description" },
    { headingName: "Per Question Mark" },
    { headingName: "Time" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("/admin/topics/edit/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteTopic(id));
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
                Topics
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={Link}
                to="/admin/topics/add"
                className={clsx(classes.button, classes.circularButton)}
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column.headingName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {topics.length > 0 ? (
                topics.map(
                  ({ id, title, description, per_q_mark, timer }, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell> {title} </TableCell>
                      <TableCell> {description} </TableCell>
                      <TableCell> {per_q_mark} </TableCell>
                      <TableCell> {`${timer} min`} </TableCell>
                      <TableCell>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              className={clsx(
                                classes.editButton,
                                classes.button
                              )}
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

export default Topics;
