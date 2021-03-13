import {
  GET_COUNTRY,
  GET_COUNTRIES,
  COUNTRY_ERROR,
  CLEAR_COUNTRY,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

const api = "https://eurovision-song-contest-api.herokuapp.com/api/v1";

// Get all countries
export const getCountries = () => async (dispatch) => {
  dispatch({
    type: CLEAR_COUNTRY,
  });
  try {
    const res = await axios.get(`${api}/countries`);
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: "Something went wrong trying to retrive countries",
    });
  }
};

// Get country by id
export const getCountry = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/countries/${id}`);
    dispatch({
      type: GET_COUNTRY,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: "Could not get country",
    });
    history.push("/not-found");
  }
};
