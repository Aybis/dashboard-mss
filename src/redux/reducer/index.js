import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import dashboard from './dashboard';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['dashboard', 'user'],
};

const rootReducer = combineReducers({
  dashboard,
  user,
});

export default persistReducer(persistConfig, rootReducer);
