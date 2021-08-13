import reportType from "../actions/types/reportType";

const initialState = {
  reports: [],
};

export const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case reportType?.GET_REPORTS_DETAIL:
      return { ...state, reports: action.reports };

    case reportType?.REMOVE_ANSWER:
      return {
        ...state,
        reports: state.reports.filter((report) => report.id !== action.reports),
      };
    default:
      return state;
  }
};
