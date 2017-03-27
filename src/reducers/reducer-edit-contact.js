import {
  EDIT_CONTACT
} from '../actions/types'

const INITIAL_STATE = {
  id: null,
  firstName: null,
  lastName: null,
  email: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case EDIT_CONTACT:
      return {
        data: action.payload
      };
    default:
      return state;
  }
}