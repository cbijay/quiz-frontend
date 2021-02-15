import { questionType } from "../actions/types/questionType";

const initialState = {
  questions: [],
  topics: [],
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case questionType.GET_QUESTION_TOPICS:
      return { ...state, topics: action.topics };

    case questionType.GET_ALL_QUESTIONS:
      return { ...state, questions: action.questions };

    case questionType.GET_QUESTIONS_DETAIL:
      return { ...state, questions: action.questions };

    case questionType.GET_QUESTION_DETAIL:
      return { ...state, question: action.question };

    case questionType.GET_ACTIVE_QUESTION:
      return { ...state, question: action.question };

    case questionType.REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.questions
        ),
      };
    case questionType.UPDATE_QUESTION_STATUS:
      return {
        ...state,
        questions: action.questions,
      };
    default:
      return state;
  }
};
