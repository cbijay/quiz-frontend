import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getTopics = async () => {
  return await axios.get(`${apiUrl}/v1/admin/topics`);
};

const getTopic = async (topicId) => {
  return await axios.get(`${apiUrl}/v1/admin/topics/${topicId}`);
};

const createTopic = async (request) => {
  return await axios.post(`${apiUrl}/v1/admin/topics`, request);
};

const updateTopic = async (topicId, request) => {
  return await axios.put(`${apiUrl}/v1/admin/topics/${topicId}`, request);
};

const deleteTopic = async (topicId) => {
  return await axios.delete(`${apiUrl}/v1/admin/topics/${topicId}`);
};

export const topicService = {
  getTopics,
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
};
