import { studentService } from "../../services/studentService";
import { alertType } from "./types/alertType";
import { studentType } from "./types/studentType";

export const getStudents = () => async (dispatch) => {
  const res = await studentService.getStudents();

  dispatch({
    type: studentType.GET_STUDENTS_DETAIL,
    students: res.data,
  });
};

export const latestStudents = () => async (dispatch) => {
  const res = await studentService.latestStudents();

  dispatch({
    type: studentType.GET_LATEST_STUDENTS,
    students: res.data,
  });
};

export const getStudent = (studentId) => async (dispatch) => {
  try {
    const res = await studentService.getStudent(studentId);

    dispatch({
      type: studentType.GET_STUDENT_DETAIL,
      student: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      error: error.toString(),
    });
  }
};

export const createStudent = (request) => async (dispatch) => {
  try {
    await studentService.createStudent(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Student created successfully!!",
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

export const updateStudent = (studentId, request) => async (dispatch) => {
  try {
    await studentService.updateStudent(studentId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Student updated successfully!!",
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

export const deleteStudent = (studentId) => async (dispatch) => {
  try {
    const res = await studentService.deleteStudent(studentId);

    dispatch({
      type: studentType.REMOVE_STUDENT,
      students: Number(res.data),
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Student deleted successfully!!",
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

export const updateStatus = (id, status) => async (dispatch) => {
  try {
    const res = await studentService.updateStatus(id, status);

    dispatch({
      type: studentType.UPDATE_STATUS,
      students: res.data,
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Status updated successfully!!",
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

export const getParticipants = () => async (dispatch) => {
  try {
    const res = await studentService.participants();

    dispatch({
      type: studentType.GET_PARTICIPANTS,
      students: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      error: error.toString(),
    });
  }
};

export const participantAnswer = (request, timeUp) => async (dispatch) => {
  try {
    const res = await studentService.participantAnswer(request);

    if (!timeUp && res) {
      dispatch({
        type: alertType.SUCCESS,
        message: "Answer submited successfully!!",
      });

      setTimeout(() => {
        dispatch({
          type: alertType.CLEAR,
        });
      }, 1000);
    }
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      message: error.response.data.message,
    });
  }
};
