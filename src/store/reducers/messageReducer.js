import { messageType } from "../actions/types/messageType";

const initialState = {
  messages: [],
};
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case messageType.GET_MESSAGES_DETAIL:
      return { ...state, messages: action.messages };

    case messageType.GET_MESSAGE_DETAIL:
      return { ...state, message: action.message };

    case messageType.REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.messages
        ),
      };
    default:
      return state;
  }
};
