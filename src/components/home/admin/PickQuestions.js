import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import {
  ChevronRight as ChevronRightIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getTopics } from "../../../store/actions/topicAction";
import {
  getQuestion,
  getQuestions,
} from "../../../store/actions/questionAction";

function PickQuestions() {
  const dispatch = useDispatch();
  const { topics } = useSelector((state) => state.topics);
  const { questions } = useSelector((state) => state.questions);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);

  const handleTopicQuestion = (topicId) => {
    setSelectedId(topicId);
    dispatch(getQuestions(topicId));
  };

  const handleQuestion = (questionId) => {
    dispatch(getQuestion(questionId));
  };

  return (
    <Grid item xs={12} lg={3}>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Pick Questions
          </Typography>

          {topics.length > 0 ? (
            topics.map(({ id, title }, topicIndex) => (
              <List key={topicIndex}>
                <ListItem
                  key={title}
                  button
                  onClick={() => handleTopicQuestion(id)}
                >
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                  {id === selectedId ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse
                  key={selectedId}
                  component="li"
                  in={id === selectedId}
                  timeout="auto"
                  unmountOnExit
                >
                  {questions.length > 0 ? (
                    questions
                      .filter((question) => question.status === 0)
                      .map(
                        ({ id, question, question_order }, questionIndex) => (
                          <List key={question} component="div" disablePadding>
                            <ListItem
                              key={questionIndex}
                              button
                              onClick={() => handleQuestion(id)}
                            >
                              <ListItemText
                                primary={`Question No.${question_order}`}
                              />
                            </ListItem>
                          </List>
                        )
                      )
                  ) : (
                    <Typography>No questions found!!</Typography>
                  )}
                </Collapse>
              </List>
            ))
          ) : (
            <Typography>Please create topics!!</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PickQuestions;
