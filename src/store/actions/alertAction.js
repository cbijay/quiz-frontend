import { alertType } from "./types/alertType";

export const success = (message) => {
  return {
    type: alertType.SUCCESS,
    message,
  };
};

export const error = (message) => {
  return {
    type: alertType.ERROR,
    message,
  };
};

export const clear = (message) => {
  return {
    type: alertType.CLEAR,
  };
};
