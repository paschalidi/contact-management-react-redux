import reducerAddDelete from '../../src/reducers/reducer-add-delete-contact';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
} from '../../src/actions/types'

describe('reducerAddDelete', () => {

  it('handles unknown action type', () => {
    expect(reducerAddDelete(undefined, {}))
      .toEqual({
        0: { id: null, firstName: null, lastName: null, email: null }
      })
  });

  it('handles the action it supposed to', () => {
    const state = { 0: { id: null, firstName: null, lastName: null, email: null } };
    const action = { type: ADD_CONTACT, payload: { id: 1, firstName: 'a name', lastName: 'a last name', email: 'ex@mail.com' } };

    expect(reducerAddDelete(state, action))
      .toEqual({
        0: { id: null, firstName: null, lastName: null, email: null },
        1: { id: 1, firstName: 'a name', lastName: 'a last name', email: 'ex@mail.com' }
      })
  });

  it('handles the action it supposed to', () => {
    const state = {
      0: { id: null, firstName: null, lastName: null, email: null },
      1: { id: 1, firstName: 'A name', lastName: 'A last Name', email: 'e@mail.com' },
      4: { id: 4, firstName: 'Another name', lastName: 'Another last Name', email: 'e@mail.com' }
    };
    const action = { type: DELETE_CONTACT, payload: { identifier: 1 } };

    expect(reducerAddDelete(state, action))
      .toEqual({
        0: { id: null, firstName: null, lastName: null, email: null },
        4: { id: 4, firstName: 'Another name', lastName: 'Another last Name', email: 'e@mail.com' }
      })
  });

  it('returns same state for unknown action', () => {
    const state = {
      0: { id: null, firstName: null, lastName: null, email: null },
      5: { id: 5, firstName: 'a name', lastName: 'a last name', email: 'ex@outlook.com' },
      6: { id: 6, firstName: 'another name', lastName: 'another last name', email: 'ex@outlook.com' }
    };
    const action = { type: "UNKNOWN" };
    expect(reducerAddDelete(state, action)).toEqual(state);
  })
});