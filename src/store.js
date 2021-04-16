import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import participantReducer from './reducers/participants'
import countryReducer from './reducers/countries'
import authReducer from './reducers/auth'

const reducer = combineReducers({
  participants: participantReducer,
  countries: countryReducer,
  auth: authReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
