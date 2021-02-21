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
import { getMessages, deleteMessage } from "../../store/actions/messageAction";
import { Link, useHistory } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";

function Messages() {
  const classes = AppStyle();
  const { messages } = useSelector((state) => state.messages);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Description" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("/admin/messages/edit/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteMessage(id));
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
                Messages
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={Link}
                to="/admin/messages/add"
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
              {messages.length > 0 ? (
                messages.map(({ id, description }, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell> {description} </TableCell>
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

export default Messages;
