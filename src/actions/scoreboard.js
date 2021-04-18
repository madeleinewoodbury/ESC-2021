import { GET_SCOREBOARD, SCOREBOARD_ERROR } from './types'
import axios from 'axios'
import { setAlert } from './alert'

const api = 'https://eurovision-song-contest-api.herokuapp.com/api/v1'

// Get participants by event id
export const getParticipantsByEvent = (id, sort) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/events/${id}/participants?sort=${sort}`)
    dispatch({
      type: GET_SCOREBOARD,
      payload: res.data.data,
    })
  } catch (err) {
    dispatch({ type: SCOREBOARD_ERROR })
    dispatch(
      setAlert('Something went wrong trying to retrive scoreboard', 'danger')
    )
  }
}
