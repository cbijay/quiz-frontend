import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getStudents = async () => {
  return await axios.get(`${apiUrl}/v1/admin/students`);
};

const latestStudents = async () => {
  return await axios.get(`${apiUrl}/v1/admin/students/latest`);
};

const getStudent = async (studentId) => {
  return await axios.get(`${apiUrl}/v1/admin/students/${studentId}`);
};

const createStudent = async (request) => {
  return await axios.post(`${apiUrl}/v1/admin/students`, request);
};

const updateStudent = async (studentId, request) => {
  return await axios.put(`${apiUrl}/v1/admin/students/${studentId}`, request);
};

const deleteStudent = async (studentId) => {
  return await axios.delete(`${apiUrl}/v1/admin/students/${studentId}`);
};

const updateStatus = async (studentId, status) => {
  return await axios.post(`${apiUrl}/v1/admin/students/${studentId}/${status}`);
};

const participants = async () => {
  return await axios.get(`${apiUrl}/v1/admin/students/participants`);
};

const participantAnswer = async (request) => {
  return await axios.post(`${apiUrl}/v1/participant/answer`, request);
};

export const studentService = {
  getStudents,
  latestStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  updateStatus,
  participants,
  participantAnswer,
};
