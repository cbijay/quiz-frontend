import { eventService } from "../../services/eventService";
import alertType from "./types/alertType";
import eventType from "./types/eventType";

export const getEvents = () => async (dispatch) => {
  const res = await eventService.getEvents();

  dispatch({
    type: eventType?.GET_EVENTS_DETAIL,
    events: res.data,
  });
};

export const getSiteEvents = () => async (dispatch) => {
  const res = await eventService.siteEvents();

  dispatch({
    type: eventType?.GET_SITE_EVENTS_DETAIL,
    events: res.data,
  });
};

export const getEvent = (eventId) => async (dispatch) => {
  try {
    const res = await eventService.getEvent(eventId);

    dispatch({
      type: eventType?.GET_EVENT_DETAIL,
      event: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType?.error,
      message: error.response.data.message,
    });
  }
};

export const createEvent = (request) => async (dispatch) => {
  try {
    await eventService.createEvent(request);

    dispatch({
      type: alertType?.SUCCESS,
      message: "Event created successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.event,
    });
  }
};

export const updateEvent = (eventId, request) => async (dispatch) => {
  try {
    await eventService.updateEvent(eventId, request);

    dispatch({
      type: alertType?.SUCCESS,
      message: "Event updated successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};

export const deleteEvent = (eventId) => async (dispatch) => {
  try {
    const res = await eventService.deleteEvent(eventId);

    dispatch({
      type: eventType?.REMOVE_EVENT,
      events: Number(res.data),
    });

    dispatch({
      type: alertType?.SUCCESS,
      message: "Event deleted successfully!!",
    });

    setTimeout(() => {
      dispatch({
        type: alertType?.CLEAR,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: alertType?.ERROR,
      message: error.response.data.message,
    });
  }
};
