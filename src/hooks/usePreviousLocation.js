import { useHistory } from "react-router-dom";

function usePreviousLocation() {
  const history = useHistory();

  const backToLocation = () => {
    history.goBack();
  };

  return {backToLocation};
}

export default usePreviousLocation;
