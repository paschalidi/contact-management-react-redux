import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerAddDeleteUpdateContact from './reducer-add-delete-update-contact'
import reducerEditContact from './reducer-edit-contact'

const rootReducer = combineReducers({
  form: formReducer,
  reducerAddDeleteUpdateContact,
  reducerEditContact
});

export default rootReducer;
