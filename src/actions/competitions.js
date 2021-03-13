import {
  GET_COMPETITION,
  GET_COMPETITIONS,
  COMPETITION_ERROR,
  CLEAR_COMPETITION,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

// Get all competitions
export const getCompetitions = () => async (dispatch) => {
  dispatch({
    type: CLEAR_COMPETITION,
  });
  try {
    const res = await axios.get("https://esc-2020.online/api/competitions");
    dispatch({
      type: GET_COMPETITIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMPETITION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get competition by id
export const getCompetition = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://esc-2020.online/api/competitions/${id}`
    );
    dispatch({
      type: GET_COMPETITION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMPETITION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    history.push("/not-found");
  }
};
