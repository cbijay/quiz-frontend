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
  Chip,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getPayments } from "../../store/actions/paymentAction";
import AppStyle from "../../styles/AppStyle";

function Payments() {
  const classes = AppStyle();
  const { payments } = useSelector((state) => state.payments);
  const dispatch = useDispatch();

  const columns = [
    { headingName: "#" },
    { headingName: "Student Name" },
    { headingName: "Subjects" },
    { headingName: "Payment Id" },
    { headingName: "Amount" },
    { headingName: "Currency" },
    { headingName: "Status" },
    { headingName: "Payment Date" },
  ];

  useEffect(() => {
    dispatch(getPayments());
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
                Payments
              </Typography>
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
              {payments.length > 0 ? (
                payments.map(
                  (
                    {
                      name,
                      subjects,
                      payment_id,
                      amount,
                      currency,
                      status,
                      payment_date,
                    },
                    index
                  ) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell> {name} </TableCell>
                      <TableCell>
                        {subjects.length > 0 &&
                          subjects.map(({ subject_name }, subjectIndex) => (
                            <Grid
                              container
                              key={subjectIndex}
                              spacing={1}
                              justify="space-between"
                            >
                              <Grid item xs={12}>
                                {(subjectIndex ? ", " : "") + subject_name}
                              </Grid>
                            </Grid>
                          ))}
                      </TableCell>
                      <TableCell> {payment_id} </TableCell>
                      <TableCell> {amount} </TableCell>
                      <TableCell> {currency} </TableCell>
                      <TableCell>
                        <Chip
                          label={status.toUpperCase()}
                          className={classes.greenButton}
                          color="primary"
                        />
                      </TableCell>
                      <TableCell> {payment_date} </TableCell>
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

export default Payments;
