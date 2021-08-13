import { questionService } from "../../services/questionService";
import alertType from "./types/alertType";
import questionType from "./types/questionType";

export const getQuestionTopics = () => async (dispatch) => {
  const res = await questionService.getQuestionTopics();

  dispatch({
    type: questionType?.GET_QUESTION_TOPICS,
    topics: res.data,
  });
};

export const getAllQuestions = () => async (dispatch) => {
  const res = await questionService.getAllQuestions();

  dispatch({
    type: questionType?.GET_ALL_QUESTIONS,
    allQuestions: res?.data,
  });
};

export const getQuestions = (topicId) => async (dispatch) => {
  const res = await questionService.getQuestions(topicId);

  dispatch({
    type: questionType?.GET_QUESTIONS_DETAIL,
    questions: res.data,
  });
};

export const getTopicQuestions = (topicId) => async (dispatch) => {
  const res = await questionService.getQuestions(topicId);

  dispatch({
    type: questionType?.GET_TOPIC_QUESTIONS,
    topicQuestions: res.data,
  });
};

export const getActiveQuestion = () => async (dispatch) => {
  try {
    const res = await questionService.getActiveQuestion();

    dispatch({
      type: questionType?.GET_ACTIVE_QUESTION,
      question: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType?.error,
      message: error.response.data.message,
    });
  }
};

export const resetTimerStatus = (questionId, status) => async (dispatch) => {
  try {
    const res = await questionService.resetTimerStatus(questionId, status);

    dispatch({
      type: questionType?.RESET_TIMER_STATUS,
      question: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType?.error,
      message: error.response.data.message,
    });
  }
};

export const getAskedQuestion = () => async (dispatch) => {
  try {
    const res = await questionService.getAskedQuestion();

    dispatch({
      type: questionType?.GET_ASKED_QUESTIONS,
      askedQuestions: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType?.error,
      message: error.response.data.message,
    });
  }
};

export const getQuestion = (questionId) => async (dispatch) => {
  try {
    const res = await questionService.getQuestion(questionId);

    dispatch({
      type: questionType?.GET_QUESTION_DETAIL,
      question: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType?.error,
      message: error.response.data.message,
    });
  }
};

export const createQuestion = (topicId, request) => async (dispatch) => {
  try {
    await questionService.createQuestion(topicId, request);

    dispatch({
      type: alertType?.SUCCESS,
      message: "Question created successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};

export const importQuestion = (topicId, request) => async (dispatch) => {
  try {
    await questionService.importQuestion(topicId, request);

    dispatch({
      type: alertType?.SUCCESS,
      message: "Question imported successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};

export const openQuestion = (questionId, status) => async (dispatch) => {
  try {
    const { data } = await questionService.openQuestion(questionId, status);

    if (Number(data?.status) === 1) {
      dispatch({
        type: alertType?.SUCCESS,
        message: "Question is active !!",
      });

      setTimeout(() => {
        dispatch({
          type: alertType?.CLEAR,
        });
      }, 2000);
    }
  } catch (error) {
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};

export const updateStatus =
  (topicId, questionId, status) => async (dispatch) => {
    try {
      const res = await questionService.updateStatus(
        topicId,
        questionId,
        status
      );

      dispatch({
        type: questionType?.UPDATE_QUESTION_STATUS,
        questions: res.data,
      });

      dispatch({
        type: alertType?.SUCCESS,
        message: `Question updated successfully !!`,
      });

      setTimeout(() => {
        dispatch({
          type: alertType?.CLEAR,
        });
      }, 2000);
    } catch (error) {
      dispatch({
        type: alertType?.ERROR,
        message: error.response.data.message,
      });
    }
  };

export const updateQuestion = (questionId, request) => async (dispatch) => {
  try {
    await questionService.updateQuestion(questionId, request);

    dispatch({
      type: alertType?.SUCCESS,
      message: "Question updated successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};

export const deleteQuestion = (questionId) => async (dispatch) => {
  try {
    const { data } = await questionService.deleteQuestion(questionId);

    if (data?.message) {
      dispatch({
        type: alertType?.ERROR,
        message: data?.message,
      });
    } else {
      dispatch({
        type: questionType?.REMOVE_QUESTION,
        questions: Number(data),
      });

      dispatch({
        type: alertType?.SUCCESS,
        message: "Question deleted successfully!!",
      });
    }

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};
