import subjectType from "../actions/types/subjectType";

const initialState = {
  subjects: [],
};

export const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case subjectType?.GET_SUBJECTS_DETAIL:
      return { ...state, subjects: action.subjects };

    default:
      return state;
  }
};
