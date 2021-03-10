import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getQuestionTopics = async () => {
  return await axios.get(`${apiUrl}/v1/admin/questions/topics`);
};

const getAllQuestions = async () => {
  return await axios.get(`${apiUrl}/v1/admin/questions`);
};

const getQuestions = async (topicId) => {
  return await axios.get(`${apiUrl}/v1/admin/questions/topics/${topicId}`);
};

const getAskedQuestion = async () => {
  return await axios.get(`${apiUrl}/v1/admin/questions/asked`);
};

const getQuestion = async (questionId) => {
  return await axios.get(`${apiUrl}/v1/admin/questions/${questionId}`);
};

const createQuestion = async (topicId, request) => {
  return await axios.post(
    `${apiUrl}/v1/admin/questions/topics/${topicId}`,
    request
  );
};

const importQuestion = async (topicId, request) => {
  return await axios.post(
    `${apiUrl}/v1/admin/questions/import/${topicId}`,
    request
  );
};

const updateQuestion = async (questionId, request) => {
  return await axios.put(`${apiUrl}/v1/admin/questions/${questionId}`, request);
};

const openQuestion = async (questionId, status) => {
  return await axios.post(
    `${apiUrl}/v1/admin/questions/${questionId}/open/${status}`
  );
};

const updateStatus = async (topicId, questionId, status) => {
  return await axios.post(
    `${apiUrl}/v1/admin/${topicId}/questions/${questionId}/${status}/updateStatus`
  );
};

const deleteQuestion = async (questionId) => {
  return await axios.delete(`${apiUrl}/v1/admin/questions/${questionId}`);
};

const getActiveQuestion = async () => {
  return await axios.get(`${apiUrl}/v1/questions/active`);
};

const resetTimerStatus = async (questionId, status) => {
  return await axios.post(
    `${apiUrl}/v1/questions/${questionId}/timer/${status}`
  );
};

export const questionService = {
  getQuestionTopics,
  getAllQuestions,
  getQuestions,
  getAskedQuestion,
  getQuestion,
  createQuestion,
  importQuestion,
  updateQuestion,
  openQuestion,
  updateStatus,
  deleteQuestion,
  getActiveQuestion,
  resetTimerStatus,
};
