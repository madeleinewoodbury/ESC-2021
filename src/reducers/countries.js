import {
  GET_COUNTRY,
  GET_COUNTRIES,
  COUNTRY_ERROR,
  CLEAR_COUNTRY,
  REMOVE_COUNTRY
} from '../actions/types';

const initialState = {
  countries: [],
  country: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        loading: false
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: payload,
        loading: false
      };
    case CLEAR_COUNTRY:
    case REMOVE_COUNTRY:
      return {
        ...state,
        countries: [],
        country: null,
        loading: false
      };
    case COUNTRY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
