import eventType from "../actions/types/eventType";

const initialState = {
  events: [],
};
export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventType?.GET_EVENTS_DETAIL:
      return { ...state, events: action.events };

    case eventType?.GET_EVENT_DETAIL:
      return { ...state, event: action.event };

    case eventType?.REMOVE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.events),
      };
    case eventType?.GET_SITE_EVENTS_DETAIL:
      return { ...state, events: action.events };

    default:
      return state;
  }
};
