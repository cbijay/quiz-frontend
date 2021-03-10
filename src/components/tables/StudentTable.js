import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Button,
} from "@material-ui/core";
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import { deleteStudent, updateStatus } from "../../store/actions/studentAction";
import AppStyle from "../../styles/AppStyle";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function StudentTable({ students, dashboard, columns }) {
  const classes = AppStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    history.push("/admin/students/edit/" + id);
  };

  const handleView = (id) => {
    history.push("/admin/students/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleStatus = (id, status) => {
    let studentStatus;

    status === true ? (studentStatus = 1) : (studentStatus = 0);

    dispatch(updateStatus(id, studentStatus));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell key={index}>{column.headingName}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {students.length > 0 ? (
          students.map(({ id, name, email, status }, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell> {name} </TableCell>
              <TableCell> {email} </TableCell>
              <TableCell> {status === 0 ? "Inactive" : "Active"} </TableCell>
              {!dashboard && (
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
                        color="primary"
                        size="small"
                        className={clsx(classes.greenButton, classes.button)}
                        onClick={() => handleView(id)}
                      >
                        <VisibilityIcon className={classes.buttonIcon} />
                        View
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
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={clsx(classes.greenButton, classes.button)}
                        onClick={() => handleStatus(id, !status)}
                      >
                        {status === 0 ? (
                          <CheckIcon className={classes.buttonIcon} />
                        ) : (
                          <CloseIcon className={classes.buttonIcon} />
                        )}
                        {status === 0 ? "Active" : "Inactive"}{" "}
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              )}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6}>No record found!!</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default StudentTable;
