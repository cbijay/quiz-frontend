import { messageService } from "../../services/messageService";
import { alertType } from "./types/alertType";
import { messageType } from "./types/messageType";

export const getMessages = () => async (dispatch) => {
  const res = await messageService.getMessages();

  dispatch({
    type: messageType.GET_MESSAGES_DETAIL,
    messages: res.data,
  });
};

export const getMessage = (messageId) => async (dispatch) => {
  try {
    const res = await messageService.getMessage(messageId);

    dispatch({
      type: messageType.GET_MESSAGE_DETAIL,
      message: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const createMessage = (request) => async (dispatch) => {
  try {
    await messageService.createMessage(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Message created successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateMessage = (messageId, request) => async (dispatch) => {
  try {
    await messageService.updateMessage(messageId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Message updated successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteMessage = (messageId) => async (dispatch) => {
  try {
    const res = await messageService.deleteMessage(messageId);

    dispatch({
      type: messageType.REMOVE_MESSAGE,
      messages: Number(res.data),
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Message deleted successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
