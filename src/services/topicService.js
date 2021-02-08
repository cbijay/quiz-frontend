import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getTopics = async () => {
  const res = await axios.get(`${apiUrl}/admin/topics`);

  return res;
};

const getTopic = async (topicId) => {
  const res = await axios.get(`${apiUrl}/admin/topics/${topicId}`);

  return res;
};

const createTopic = async (request) => {
  const res = await axios.post(`${apiUrl}/admin/topics`, request);

  return res;
};

const updateTopic = async (topicId, request) => {
  const res = await axios.put(`${apiUrl}/admin/topics/${topicId}`, request);

  return res;
};

const deleteTopic = async (topicId) => {
  const res = await axios.delete(`${apiUrl}/admin/topics/${topicId}`);
  return res;
};

export const topicService = {
  getTopics,
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
};
