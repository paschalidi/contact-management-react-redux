import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerAddDeleteContact from './reducer-add-delete-contact'

const rootReducer = combineReducers({
  form: formReducer,
  reducerAddDeleteContact
});

export default rootReducer;
