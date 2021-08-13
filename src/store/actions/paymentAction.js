import { paymentService } from "../../services/paymentService";
import paymentType from "./types/paymentType";

export const getPayments = () => async (dispatch) => {
  const { data } = await paymentService.getPayments();

  dispatch({
    type: paymentType?.GET_PAYMENTS_DETAIL,
    payments: data,
  });
};
