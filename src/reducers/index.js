import { combineReducers } from 'redux';
import gridReducer from './gridReducer';
import flagReducer from './flagReducer';

export default combineReducers({
	grid: gridReducer,
	flagInfo: flagReducer
});
