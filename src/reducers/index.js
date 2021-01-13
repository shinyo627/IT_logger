// This is going to be our root reducer
// We bring in any other reducers we have.
import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
  // this is what we call state for the log part of whole application in this project
  log: logReducer,
});
