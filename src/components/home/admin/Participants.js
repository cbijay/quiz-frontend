import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Check as CheckIcon, Close as CloseIcon } from "@material-ui/icons";

function Participants({ participants, classes }) {
  return (
    <Grid item xs={12} lg={4}>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Participants
          </Typography>

          {participants.length > 0 ? (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Answer</TableCell>
                  <TableCell>Remarks</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {participants.map(({ name, per_q_mark, answers }, index) => (
                  <TableRow key={index}>
                    <TableCell> {name} </TableCell>

                    <TableCell>
                      {answers.filter(
                        (answer) => answer.answer === answer.user_answer
                      ).length * per_q_mark}
                    </TableCell>
                    <TableCell>
                      {answers.length > 0 ? answers[0].user_answer : ""}
                    </TableCell>
                    <TableCell>
                      {answers.length > 0 ? (
                        answers[0].answer === answers[0].user_answer ? (
                          <CheckIcon className={classes.rightAnswer} />
                        ) : Number(answers[0].user_answer) === 0 ? (
                          <Typography>Time up!!</Typography>
                        ) : (
                          <CloseIcon className={classes.wrongAnswer} />
                        )
                      ) : (
                        ""
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography component="p">No participants!!</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Participants;
