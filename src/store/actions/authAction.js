import { authService } from "../../services/authService";
import { authType } from "./types/authType";
import { alertType } from "./types/alertType";

export const login = (request) => async (dispatch) => {
  try {
    dispatch({
      type: authType.LOGIN_REQUEST,
    });

    const res = await authService.login(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Login Successful!!",
    });

    dispatch({
      type: authType.LOGIN_SUCCESS,
      user: res.data,
    });

    setTimeout(() => {
      dispatch({
        type: alertType.CLEAR,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: authType.LOGIN_FAILURE,
      error: error.response.data.message,
    });

    dispatch({
      type: alertType.ERROR,
      message: error.response.data.message,
    });
  }
};

export const registerUser = (request) => async (dispatch) => {
  try {
    dispatch({
      type: authType.REGISTER_REQUEST,
    });

    await authService.register(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "User has been registered!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType.CLEAR,
      });
    }, 1000);

    dispatch({
      type: authType.REGISTER_SUCCESS,
    });
  } catch (error) {
    if (error.hasOwnProperty("response")) {
      dispatch({
        type: authType.REGISTER_FAILURE,
        error: error.response.data.message,
      });

      dispatch({
        type: alertType.ERROR,
        message: error.response.data.message,
      });
    }
  }
};

export const logout = (request) => async (dispatch) => {
  await authService.logout(request);

  dispatch({
    type: authType.LOGOUT,
  });
};
