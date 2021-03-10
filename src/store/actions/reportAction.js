import { reportService } from "../../services/reportService";
import { alertType } from "./types/alertType";
import { reportType } from "./types/reportType";

export const getReports = (topicId) => async (dispatch) => {
  const res = await reportService.getReports(topicId);

  dispatch({
    type: reportType.GET_REPORTS_DETAIL,
    reports: res.data,
  });
};

export const deleteAnswer = (topicId, userId) => async (dispatch) => {
  try {
    const res = await reportService.deleteAnswer(topicId, userId);

    dispatch({
      type: reportType.REMOVE_ANSWER,
      reports: Number(res.data),
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Report has been reset!!",
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
