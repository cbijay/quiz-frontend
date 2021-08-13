import topicType from "../actions/types/topicType";

const initialState = {
  topics: [],
};
export const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case topicType?.GET_TOPICS_DETAIL:
      return { ...state, topics: action.topics };

    case topicType?.GET_TOPIC_DETAIL:
      return { ...state, topic: action.topic };

    case topicType?.REMOVE_TOPIC:
      return {
        ...state,
        topics: state.topics.filter((topic) => topic.id !== action.topics),
      };
    default:
      return state;
  }
};
