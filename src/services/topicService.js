import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getTopics = async () => {
  const res = await axios.get(`${apiUrl}/v1/admin/topics`);

  return res;
};

const getTopic = async (topicId) => {
  const res = await axios.get(`${apiUrl}/v1/admin/topics/${topicId}`);

  return res;
};

const createTopic = async (request) => {
  const res = await axios.post(`${apiUrl}/v1/admin/topics`, request);

  return res;
};

const updateTopic = async (topicId, request) => {
  const res = await axios.put(`${apiUrl}/v1/admin/topics/${topicId}`, request);

  return res;
};

const deleteTopic = async (topicId) => {
  const res = await axios.delete(`${apiUrl}/v1/admin/topics/${topicId}`);
  return res;
};

export const topicService = {
  getTopics,
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
};
