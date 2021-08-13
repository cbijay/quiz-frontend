import paymentType from "../actions/types/paymentType";

const initialState = {
  payments: [],
};
export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case paymentType?.GET_PAYMENTS_DETAIL:
      return { ...state, payments: action.payments };

    default:
      return state;
  }
};
