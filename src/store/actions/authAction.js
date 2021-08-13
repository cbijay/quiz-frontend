import { authService } from "../../services/authService";
import authType from "./types/authType";
import alertType from "./types/alertType";

export const login = (request) => async (dispatch) => {
  try {
    dispatch({
      type: authType?.LOGIN_REQUEST,
    });

    const res = await authService.login(request);

    dispatch({
      type: alertType?.SUCCESS,
      message: "Login Successful!!",
    });

    dispatch({
      type: authType?.LOGIN_SUCCESS,
      user: res.data,
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: authType?.LOGIN_FAILURE,
      message: error.response.data.message,
    });

    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};

export const registerUser = (request) => async (dispatch) => {
  try {
    dispatch({
      type: authType?.REGISTER_REQUEST,
    });

    const { data } = await authService.register(request);

    console.log(data);

    dispatch({
      type: alertType?.SUCCESS,
      message: data?.message,
    });

    dispatch({
      type: authType?.REGISTER_SUCCESS,
      userRegister: data?.register,
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    if (error.hasOwnProperty("response")) {
      dispatch({
        type: authType?.REGISTER_FAILURE,
        message: error.response.data.message,
        userRegister: false,
      });

      dispatch({
        type: alertType?.ERROR,
        message: error.response.data.message,
      });
    }
  }
};

export const logout = (request) => async (dispatch) => {
  await authService.logout(request);

  dispatch({
    type: authType?.LOGOUT,
  });
};
