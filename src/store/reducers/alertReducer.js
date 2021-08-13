import alertType from "../actions/types/alertType";

export const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case alertType?.SUCCESS:
      return {
        type: "success",
        message: action.message,
      };
    case alertType?.ERROR:
      return {
        type: "error",
        message: action.message,
      };
    case alertType?.CLEAR:
      return {};
    default:
      return state;
  }
};
