import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import {Spinner,pendingTasksReducer,pendingTask,begin,end} from 'react-redux-spinner';

const rootReducer = combineReducers({
  auth: authReducer,
  pendingTasks: pendingTasksReducer
});

export default rootReducer;
