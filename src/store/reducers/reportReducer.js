import { reportType } from "../actions/types/reportType";

const initialState = {
  reports: [],
};

export const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case reportType.GET_REPORTS_DETAIL:
      return { ...state, reports: action.reports };

    case reportType.REMOVE_REPORT:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.questions
        ),
      };
    default:
      return state;
  }
};
