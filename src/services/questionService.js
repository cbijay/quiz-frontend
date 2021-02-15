import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getQuestionTopics = async () => {
  const res = await axios.get(`${apiUrl}/v1/admin/questions/topics`);
  return res;
};

const getAllQuestions = async () => {
  const res = await axios.get(`${apiUrl}/v1/admin/questions`);

  return res;
};

const getQuestions = async (topicId) => {
  const res = await axios.get(`${apiUrl}/v1/admin/questions/topics/${topicId}`);

  return res;
};

const getActiveQuestion = async () => {
  const res = await axios.get(`${apiUrl}/v1/questions/active`);

  return res;
};

const getQuestion = async (questionId) => {
  const res = await axios.get(`${apiUrl}/v1/admin/questions/${questionId}`);

  return res;
};

const createQuestion = async (topicId, request) => {
  const res = await axios.post(
    `${apiUrl}/v1/admin/questions/topics/${topicId}`,
    request
  );

  return res;
};

const importQuestion = async (topicId, request) => {
  const res = await axios.post(
    `${apiUrl}/v1/admin/questions/import/${topicId}`,
    request
  );

  return res;
};

const updateQuestion = async (questionId, request) => {
  const res = await axios.put(
    `${apiUrl}/v1/admin/questions/${questionId}`,
    request
  );

  return res;
};

const openQuestion = async (questionId) => {
  const res = await axios.post(
    `${apiUrl}/v1/admin/questions/${questionId}/openQuestion`
  );

  return res;
};

const updateStatus = async (questionId, status) => {
  const res = await axios.post(
    `${apiUrl}/v1/admin/questions/${questionId}/${status}/updateStatus`
  );

  return res;
};

const deleteQuestion = async (questionId) => {
  const res = await axios.delete(`${apiUrl}/v1/admin/questions/${questionId}`);
  return res;
};

export const questionService = {
  getQuestionTopics,
  getQuestions,
  getAllQuestions,
  getActiveQuestion,
  getQuestion,
  createQuestion,
  importQuestion,
  updateQuestion,
  openQuestion,
  updateStatus,
  deleteQuestion,
};
