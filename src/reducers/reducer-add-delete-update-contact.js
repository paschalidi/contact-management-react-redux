import {
  ADD_UPDATE_CONTACT,
  DELETE_CONTACT,
} from '../actions/types'

const INITIAL_STATE = {
  0: {
    id: null,
    firstName: null,
    lastName: null,
    email: null
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_UPDATE_CONTACT:
      const { id, firstName, lastName, email } = action.payload;

      return Object.assign(
        {},
        state,
        { [id]: { id, firstName, lastName, email } }
      );
    case DELETE_CONTACT:
      const { identifier } = action.payload;
      let newState = Object.assign({}, state);

      delete newState[identifier];
      return newState;

    default:
      return state;
  }
}