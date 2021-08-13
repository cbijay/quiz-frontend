import { subjectService } from "../../services/subjectService";
import subjectType from "./types/subjectType";

export const getSubjects = () => async (dispatch) => {
  const res = await subjectService.getSubjects();

  dispatch({
    type: subjectType?.GET_SUBJECTS_DETAIL,
    subjects: res.data,
  });
};
