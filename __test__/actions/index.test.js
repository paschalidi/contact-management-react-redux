import {
  ADD_CONTACT,
  DELETE_CONTACT
} from '../../src/actions/types'
import {
  addNewContact,
  deleteContact
} from '../../src/actions/index'

describe("addNewContact", () => {
  it('must have correct type', () => {
    const action = addNewContact({});

    expect(action.type).toEqual(ADD_CONTACT)
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