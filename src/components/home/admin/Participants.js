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
  Avatar,
  Button,
  Collapse,
} from "@material-ui/core";
import clsx from "clsx";
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";

const imageBaseUrl = process.env.REACT_APP_BASE_IMAGE_URL;

function Participants({ participants, classes }) {
  const avatarColor = [
    `${classes.success}`,
    `${classes.primary}`,
    `${classes.dark}`,
    `${classes.secondary}`,
  ];

  const [selectedId, setSelectedId] = React.useState();
  const [answerOption, setAnswerOption] = React.useState();

  const handleClick = (id) => {
    setSelectedId(id);
    setAnswerOption(!answerOption);
  };

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
                {participants.map(
                  ({ id, name, per_q_mark, answers, image }, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {image === "undefined" || image === "Null" ? (
                          <Avatar
                            className={clsx(
                              classes.avatar,
                              avatarColor[
                                Math.floor(Math.random() * avatarColor.length)
                              ]
                            )}
                          >
                            {name.charAt(0)}
                          </Avatar>
                        ) : (
                          <Avatar
                            className={classes.avatar}
                            src={`${imageBaseUrl}/users/${image}`}
                            alt={name}
                          />
                        )}
                        {name}
                      </TableCell>

                      <TableCell>
                        {answers.filter(
                          (answer) => answer.answer === answer.user_answer
                        ).length * per_q_mark}
                      </TableCell>
                      <TableCell align="center">
                        <Button color="primary" onClick={() => handleClick(id)}>
                          <VisibilityIcon />
                        </Button>
                        <Collapse in={id === selectedId && answerOption}>
                          {answers.length > 0
                            ? answers[0].user_answer
                            : "No Answer"}
                        </Collapse>
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
                  )
                )}
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
