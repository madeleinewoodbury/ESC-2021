import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import participantReducer from "./reducers/participants";
import countryReducer from "./reducers/countries";

const reducer = combineReducers({
  participants: participantReducer,
  countries: countryReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
