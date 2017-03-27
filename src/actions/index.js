import {
  ADD_UPDATE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from './types';
let id = 0;

export function addNewContact(contact) {
  ++id;
  const { firstName, lastName, email } = contact;
  return {
    type: ADD_UPDATE_CONTACT,
    payload: { id, firstName, lastName, email }
  };
}

export function deleteContact(identifier) {
  return {
    type: DELETE_CONTACT,
    payload: { identifier }
  };
}

export function updateContact(fromValues) {
  const { id, firstName, lastName, email } = fromValues;
  return {
    type: ADD_UPDATE_CONTACT,
    payload: { id, firstName, lastName, email }
  };
}

export function editContact(editValues) {
  const { id, firstName, lastName, email } = editValues;
  return {
    type: EDIT_CONTACT,
    payload: { id, firstName, lastName, email }
  };
}
