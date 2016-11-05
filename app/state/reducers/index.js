import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { intlReducer } from 'react-intl-redux';

import apiReducers from './api';
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import notificationsReducer from './notificationsReducer';
import uiReducers from './ui';

const rootReducer = combineReducers({
  api: apiReducers,
  auth: authReducer,
  data: dataReducer,
  form: formReducer,
  intl: intlReducer,
  notifications: notificationsReducer,
  ui: uiReducers,
});

export default rootReducer;
