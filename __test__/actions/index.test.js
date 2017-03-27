import {
  ADD_UPDATE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from '../../src/actions/types'
import {
  addNewContact,
  deleteContact,
  updateContact,
  editContact
} from '../../src/actions/index'

describe("addNewContact", () => {
  it('must have correct type', () => {
    const action = addNewContact({});

    expect(action.type).toEqual(ADD_UPDATE_CONTACT)
  });

  it('must have correct payload', () => {
    const contact = {
      firstName: 'a first name',
      lastName: 'a last name',
      email: 'email@email.com'
    };
    const action = addNewContact(contact);

    expect(action.payload).toEqual({
      id: 2,
      firstName: 'a first name',
      lastName: 'a last name',
      email: 'email@email.com'
    })
  });
});

describe("deleteContact", () => {
  it('must have correct type', () => {
    const action = deleteContact({});

    expect(action.type).toEqual(DELETE_CONTACT)
  });
  it('must have correct payload', () => {
    const identifier = 5;
    const action = deleteContact(identifier);

    expect(action.payload).toEqual({ identifier: 5 })
  });
});

describe("updateContact", () => {
  it('must have correct type', () => {
    const action = updateContact({});

    expect(action.type).toEqual(ADD_UPDATE_CONTACT)
  });

  it('must have correct payload', () => {
    const formValues = {
      id: 5,
      firstName: 'a first name',
      lastName: 'a last name',
      email: 'email@email.com'
    };
    const action = updateContact(formValues);

    expect(action.payload).toEqual({
      id: 5,
      firstName: 'a first name',
      lastName: 'a last name',
      email: 'email@email.com'
    })
  });
});

describe("editContact", () => {
  it('must have correct type', () => {
    const action = editContact({});

    expect(action.type).toEqual(EDIT_CONTACT)
  });
  it('must have correct payload', () => {
    const editValues = {
      id: 5,
      firstName: 'a first name',
      lastName: 'a last name',
      email: 'email@email.com'
    };
    const action = editContact(editValues);

    expect(action.payload).toEqual({
      id: 5,
      firstName: 'a first name',
      lastName: 'a last name',
      email: 'email@email.com'
    })
  });
});