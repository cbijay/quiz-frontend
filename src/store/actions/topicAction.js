import { topicService } from "../../services/topicService";
import { alertType } from "./types/alertType";
import { topicType } from "./types/topicType";

export const getTopics = () => async (dispatch) => {
  const res = await topicService.getTopics();

  dispatch({
    type: topicType.GET_TOPICS_DETAIL,
    topics: res.data,
  });
};

export const getTopic = (topicId) => async (dispatch) => {
  try {
    const res = await topicService.getTopic(topicId);

    dispatch({
      type: topicType.GET_TOPIC_DETAIL,
      topic: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const createTopic = (request) => async (dispatch) => {
  try {
    await topicService.createTopic(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Topic created successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType.CLEAR,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateTopic = (topicId, request) => async (dispatch) => {
  try {
    await topicService.updateTopic(topicId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Topic updated successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType.CLEAR,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteTopic = (topicId) => async (dispatch) => {
  try {
    const res = await topicService.deleteTopic(topicId);

    dispatch({
      type: topicType.REMOVE_TOPIC,
      topics: Number(res.data),
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Topic deleted successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType.CLEAR,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
