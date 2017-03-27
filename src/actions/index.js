import {
  ADD_CONTACT,
  DELETE_CONTACT,
} from './types';
let id = 0;

export function addNewContact(contact) {
  ++id;
  const { firstName, lastName, email } = contact;
  return {
    type: ADD_CONTACT,
    payload: { id, firstName, lastName, email }
  };
}

export function deleteContact(identifier) {
  return {
    type: DELETE_CONTACT,
    payload: { identifier }
  };
}