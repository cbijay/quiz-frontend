import { questionService } from "../../services/questionService";
import { alertType } from "./types/alertType";
import { questionType } from "./types/questionType";

export const getQuestionTopics = () => async (dispatch) => {
  const res = await questionService.getQuestionTopics();

  dispatch({
    type: questionType.GET_QUESTION_TOPICS,
    topics: res.data,
  });
};

export const getAllQuestions = () => async (dispatch) => {
  const res = await questionService.getAllQuestions();

  dispatch({
    type: questionType.GET_ALL_QUESTIONS,
    questions: res.data,
  });
};

export const getQuestions = (topicId) => async (dispatch) => {
  const res = await questionService.getQuestions(topicId);

  dispatch({
    type: questionType.GET_QUESTIONS_DETAIL,
    questions: res.data,
  });
};

export const getActiveQuestion = () => async (dispatch) => {
  try {
    const res = await questionService.getActiveQuestion();

    dispatch({
      type: questionType.GET_ACTIVE_QUESTION,
      question: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const resetTimerStatus = (questionId, status) => async (dispatch) => {
  try {
    const res = await questionService.resetTimerStatus(questionId, status);

    dispatch({
      type: questionType.RESET_TIMER_STATUS,
      question: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const getAskedQuestion = () => async (dispatch) => {
  try {
    const res = await questionService.getAskedQuestion();

    dispatch({
      type: questionType.GET_ASKED_QUESTIONS,
      totalQuestions: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const getQuestion = (questionId) => async (dispatch) => {
  try {
    const res = await questionService.getQuestion(questionId);

    dispatch({
      type: questionType.GET_QUESTION_DETAIL,
      question: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const createQuestion = (topicId, request) => async (dispatch) => {
  try {
    await questionService.createQuestion(topicId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Question created successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const importQuestion = (topicId, request) => async (dispatch) => {
  try {
    await questionService.importQuestion(topicId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Question imported successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const openQuestion = (questionId, status) => async (dispatch) => {
  try {
    await questionService.openQuestion(questionId, status);

    if (status === 1) {
      dispatch({
        type: alertType.SUCCESS,
        message: "Question is active !!",
      });
    }
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateStatus = (questionId, status) => async (dispatch) => {
  try {
    const res = await questionService.updateStatus(questionId, status);

    dispatch({
      type: questionType.UPDATE_QUESTION_STATUS,
      questions: res.data,
    });

    dispatch({
      type: alertType.SUCCESS,
      message: `Question updated successfully !!`,
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateQuestion = (questionId, request) => async (dispatch) => {
  try {
    await questionService.updateQuestion(questionId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Question updated successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteQuestion = (questionId) => async (dispatch) => {
  try {
    const res = await questionService.deleteQuestion(questionId);

    dispatch({
      type: questionType.REMOVE_QUESTION,
      questions: Number(res.data),
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Question deleted successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
