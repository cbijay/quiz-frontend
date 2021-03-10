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
  return await axios.post(`${apiUrl}/auth/register`, request);
};

const logout = async () => {
  //await axios.post(`${apiUrl}/auth/logout`, request);
  localStorage.clear();
};

export const authService = {
  login,
  register,
  logout,
};
