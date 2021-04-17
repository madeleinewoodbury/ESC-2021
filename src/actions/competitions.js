import {
  GET_COMPETITION,
  GET_COMPETITIONS,
  COMPETITION_ERROR,
  CLEAR_COMPETITION,
} from './types'
import axios from 'axios'
import { setAlert } from './alert'

const api = 'https://eurovision-song-contest-api.herokuapp.com/api/v1'

// Get all competitions
export const getCompetitions = () => async (dispatch) => {
  dispatch({
    type: CLEAR_COMPETITION,
  })
  try {
    const res = await axios.get(`${api}/events?sort=year`)
    dispatch({
      type: GET_COMPETITIONS,
      payload: res.data.data,
    })
  } catch (err) {
    dispatch({ type: COMPETITION_ERROR })
    dispatch(
      setAlert('Something went wrong trying to retrive competitions', 'danger')
    )
  }
}

// Get competition by id
export const getCompetition = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/events/${id}`)
    dispatch({
      type: GET_COMPETITION,
      payload: res.data.data,
    })
  } catch (err) {
    dispatch({ type: COMPETITION_ERROR })
    dispatch(
      setAlert('Something went wrong trying to retrive competition', 'danger')
    )
    history.push('/not-found')
  }
}
