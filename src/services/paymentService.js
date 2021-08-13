import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getPayments = async () => {
  return await axios.get(`${apiUrl}/v1/admin/payments`);
};

export const paymentService = {
  getPayments,
};
