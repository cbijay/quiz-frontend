import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getEvents = async () => {
  return await axios.get(`${apiUrl}/v1/admin/events`);
};

const getEvent = async (eventId) => {
  return await axios.get(`${apiUrl}/v1/admin/events/${eventId}`);
};

const createEvent = async (request) => {
  return await axios.post(`${apiUrl}/v1/admin/events`, request);
};

const updateEvent = async (eventId, request) => {
  return await axios.put(`${apiUrl}/v1/admin/events/${eventId}`, request);
};

const deleteEvent = async (eventId) => {
  return await axios.delete(`${apiUrl}/v1/admin/events/${eventId}`);
};

const siteEvents = async () => {
  return await axios.get(`${apiUrl}/v1/events`);
};

export const eventService = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  siteEvents,
};
