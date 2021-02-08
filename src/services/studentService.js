import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getStudents = async () => {
  const res = await axios.get(`${apiUrl}/admin/students`);

  return res;
};

const latestStudents = async () => {
  const res = await axios.get(`${apiUrl}/admin/students/latest`);

  return res;
};

const getStudent = async (studentId) => {
  const res = await axios.get(`${apiUrl}/admin/students/${studentId}`);

  return res;
};

const createStudent = async (request) => {
  const res = await axios.post(`${apiUrl}/admin/students`, request);

  return res;
};

const updateStudent = async (studentId, request) => {
  const res = await axios.put(`${apiUrl}/admin/students/${studentId}`, request);

  return res;
};

const deleteStudent = async (studentId) => {
  const res = await axios.delete(`${apiUrl}/admin/students/${studentId}`);

  return res;
};

const updateStatus = async (studentId, status) => {
  const res = await axios.post(
    `${apiUrl}/admin/students/${studentId}/${status}`
  );
  return res;
};

const participants = async () => {
  const res = await axios.get(`${apiUrl}/admin/students/participants`);

  return res;
};

const participantAnswer = async (request) => {
  const res = await axios.post(`${apiUrl}/participant/answer`, request);

  return res;
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
