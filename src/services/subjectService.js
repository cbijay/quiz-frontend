import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getSubjects = async () => {
  return await axios.get(`${apiUrl}/v1/subjects`);
};

export const subjectService = {
  getSubjects,
};
