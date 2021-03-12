import {
  GET_PARTICIPANTS,
  GET_PARTICIPANT,
  PARTICIPANT_ERROR,
} from "../actions/types";

const initialState = {
  participants: [],
  participant: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PARTICIPANTS:
      return {
        ...state,
        participants: payload,
        loading: false,
      };
    case GET_PARTICIPANT:
      // case GET_VOTE:
      return {
        ...state,
        participant: payload,
        loading: false,
      };
    // case SET_YEAR:
    //   return {
    //     ...state,
    //     showYear: payload
    //   };
    // case CLEAR_PARTICIPANT:
    // case REMOVE_PARTICIPANT:
    //   return {
    //     ...state,
    //     participants: [],
    //     participant: null,
    //     loading: false
    //   };
    case PARTICIPANT_ERROR:
      // case VOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
