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
import { getEvents, deleteEvent } from "../../store/actions/eventAction";
import { Link, useHistory } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";

function Events() {
  const classes = AppStyle();
  const { events } = useSelector((state) => state.events);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Title" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("/admin/events/edit/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
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
                Events
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={Link}
                to="/admin/events/add"
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
              {events.length > 0 ? (
                events.map(({ id, title }, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell> {title} </TableCell>
                    <TableCell>
                      <Grid container spacing={1}>
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

export default Events;
