import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getReports = async (topicId) => {
  const res = await axios.get(`${apiUrl}/admin/reports/topics/${topicId}`);

  return res;
};

const deleteReport = async (reportId) => {
  const res = await axios.delete(`${apiUrl}/admin/reports/${reportId}`);
  return res;
};

export const reportService = {
  getReports,
  deleteReport,
};
