import axios from "axios"; 

const apiUrl = process.env.REACT_APP_API_URL;

const getMessages = async () => {
  const res = await axios.get(`${apiUrl}/v1/admin/messages`);

  return res;
};

const getMessage = async (messageId) => {
  const res = await axios.get(`${apiUrl}/v1/admin/messages/${messageId}`);

  return res;
};

const createMessage = async (request) => {
  const res = await axios.post(`${apiUrl}/v1/admin/messages`, request);

  return res;
};

const updateMessage = async (messageId, request) => {
  const res = await axios.put(
    `${apiUrl}/v1/admin/messages/${messageId}`,
    request
  );

  return res;
};

const deleteMessage = async (messageId) => {
  const res = await axios.delete(`${apiUrl}/v1/admin/messages/${messageId}`);
  return res;
};

export const messageService = {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage,
};
