import { useState } from "react";
import { alertType } from "../store/actions/types/alertType";
import { useDispatch } from "react-redux";

function useAlertStatus() {
  const [isOpen, isSetOpen] = useState(true);
  const dispatch = useDispatch();

  const closeAlert = () => {
    dispatch({
      type: alertType.CLEAR,
    });
    isSetOpen(false);
  };

  return { isOpen, closeAlert };
}

export default useAlertStatus;
