import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getReports = async (topicId) => {
  return await axios.get(`${apiUrl}/v1/admin/reports/topics/${topicId}`);
};

const deleteAnswer = async (topicId, userId) => {
  return await axios.delete(
    `${apiUrl}/v1/admin/reports/topics/${topicId}/user/${userId}/destroy`
  );
};

export const reportService = {
  getReports,
  deleteAnswer,
};
