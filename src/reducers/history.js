import { GET_HISTORY, HISTORY_ERROR } from '../actions/types'

const initialState = {
  participant: null,
  loading: true,
  error: {},
}

const historyReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_HISTORY:
      return {
        ...state,
        participant: payload,
        loading: false,
      }
    case HISTORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default historyReducer
