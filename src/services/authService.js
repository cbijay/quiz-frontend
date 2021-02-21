import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const login = async (request) => {
  //Get user detail including token from api call
  const res = await axios.post(`${apiUrl}/auth/login`, request);

  //Store user details in local storage to keep user loggedin
  localStorage.setItem("user", JSON.stringify(res.data));

  return res;
};

const register = async (request) => {
  //Send user request from api
  const res = await axios.post(`${apiUrl}/auth/register`, request);

  return res;
};

const logout = async (request) => {
  await axios.post(`${apiUrl}/auth/logout`, request);

  localStorage.removeItem("user");
};

export const authService = {
  login,
  register,
  logout,
};
