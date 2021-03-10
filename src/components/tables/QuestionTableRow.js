import React from "react";
import {
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Button,
} from "@material-ui/core";
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
  Check as CheckIcon,
  Close as CloseIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteQuestion,
  updateStatus,
} from "../../store/actions/questionAction";
import AppStyle from "../../styles/AppStyle";

/* const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
}); */

function QuestionTableRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = AppStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    history.push(`/admin/questions/${row.topic_id}/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteQuestion(id));
  };

  const handleStatus = (id, status) => {
    let questionStatus;

    status === true ? (questionStatus = 1) : (questionStatus = 0);

    dispatch(updateStatus(row.topic_id, id, questionStatus));
  };

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.question}
        </TableCell>
        <TableCell align="center">
          {row.status === 1 ? "Active" : "Inactive"}
        </TableCell>
        <TableCell>
          <Grid container spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={clsx(classes.editButton, classes.button)}
                onClick={() => handleEdit(row.id)}
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
                onClick={() => handleDelete(row.id)}
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
                onClick={() => handleStatus(row.id, !row.status)}
              >
                {row.status === 0 ? (
                  <CheckIcon className={classes.buttonIcon} />
                ) : (
                  <CloseIcon className={classes.buttonIcon} />
                )}
                {row.status === 0 ? "Active" : "Inactive"}{" "}
              </Button>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Question Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>B</TableCell>
                    <TableCell>C</TableCell>
                    <TableCell>D</TableCell>
                    <TableCell>Answer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{row.a}</TableCell>
                    <TableCell>{row.b}</TableCell>
                    <TableCell>{row.c}</TableCell>
                    <TableCell>{row.d}</TableCell>
                    <TableCell>{row.answer}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default QuestionTableRow;
