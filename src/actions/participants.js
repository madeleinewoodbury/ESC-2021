import { GET_PARTICIPANTS, GET_PARTICIPANT, PARTICIPANT_ERROR } from "./types";
import axios from "axios";
// import { setAlert } from './alert';

const api = "http://localhost:5000/api";

// Get all participants
export const getParticipants = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/participants`);
    dispatch({
      type: GET_PARTICIPANTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: "Something went wrong getting participants",
    });
  }
};

// Get participant by id
export const getParticipant = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/participants/${id}`);

    dispatch({
      type: GET_PARTICIPANT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: "Something went wrong getting participant",
    });
    history.push("/not-found");
  }
};
