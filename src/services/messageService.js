import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getMessages = async () => {
  return await axios.get(`${apiUrl}/v1/admin/messages`);
};

const getMessage = async (messageId) => {
  return await axios.get(`${apiUrl}/v1/admin/messages/${messageId}`);
};

const createMessage = async (request) => {
  return await axios.post(`${apiUrl}/v1/admin/messages`, request);
};

const updateMessage = async (messageId, request) => {
  return await axios.put(`${apiUrl}/v1/admin/messages/${messageId}`, request);
};

const deleteMessage = async (messageId) => {
  return await axios.delete(`${apiUrl}/v1/admin/messages/${messageId}`);
};

export const messageService = {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage,
};
