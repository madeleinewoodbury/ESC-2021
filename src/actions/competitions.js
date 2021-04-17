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
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    }
  }
}

// Get competition by id
export const getCompetition = (id, history) => async (dispatch) => {
  // console.log(id)
  try {
    const res = await axios.get(`${api}/events/${id}`)
    dispatch({
      type: GET_COMPETITION,
      payload: res.data.data,
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    }
    history.push('/not-found')
  }
}
