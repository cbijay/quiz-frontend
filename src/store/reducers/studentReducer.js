import studentType from "../actions/types/studentType";

const initialState = {
  students: [],
  participants: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case studentType?.GET_STUDENTS_DETAIL:
      return { ...state, students: action.students };

    case studentType?.GET_PARTICIPANTS:
      return { ...state, participants: action.students };

    case studentType?.GET_LATEST_STUDENTS:
      return { ...state, students: action.students };

    case studentType?.GET_STUDENT_DETAIL:
      return { ...state, student: action.student };

    case studentType?.REMOVE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.students
        ),
      };
    case studentType?.UPDATE_STATUS:
      return {
        ...state,
        students: action.students,
      };
    default:
      return state;
  }
};
