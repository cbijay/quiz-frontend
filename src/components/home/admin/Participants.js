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
    <Card className={classes.participantContainer}>
      <CardContent>
        <Typography component="h2" variant="h6" gutterBottom>
          Participants
        </Typography>

        {participants.length > 0 ? (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell} align="center">
                  Score
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  Answer
                </TableCell>
                <TableCell className={classes.tableCell}>Remarks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participants.map(
                ({ id, name, answers, image, score }, index) => (
                  <TableRow key={index}>
                    <TableCell className={classes.tableCell}>
                      <Grid container spacing={1}>
                        <Grid item>
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
                        </Grid>
                        <Grid item>{name}</Grid>
                      </Grid>
                    </TableCell>

                    <TableCell align="center" className={classes.tableCell}>
                      {score}
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      <Button
                        className={classes.tableCell}
                        onClick={() => handleClick(id)}
                      >
                        <VisibilityIcon />
                      </Button>
                      <Collapse in={id === selectedId && answerOption}>
                        {answers.length > 0
                          ? answers[0].user_answer
                          : "No Answer"}
                      </Collapse>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
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
  );
}

export default Participants;
