import { combineReducers } from 'redux';
import catReducer from './reducers/catReducer';
import dogReducer from './reducers/dogReducer';
import foxReducer from './reducers/foxReducer';
import insultReducer from './reducers/insultReducer';

const rootReducer = combineReducers({
  catReducer,
  dogReducer,
  foxReducer,
  insultReducer,
});

export default rootReducer;
