import reducerEdit  from '../../src/reducers/reducer-edit-contact'
import { EDIT_CONTACT } from '../../src/actions/types'

describe('reducerEdit', () => {

  it('handles unknown action type', () => {
    expect(reducerEdit(undefined, {}))
      .toEqual(
        {
          id: null,
          firstName: null,
          lastName: null,
          email: null
        })
  });

  it('handles the action it supposed to', () => {
    const state = {
      id: null,
      firstName: null,
      lastName: null,
      email: null
    };
    const acton = {
      type: EDIT_CONTACT,
      payload: {
        id: 5,
        firstName: 'a name',
        lastName: 'a last name',
        email: 'email@mail.com'
      }
    };

    expect(reducerEdit(state, acton))
      .toEqual({
          data: {
            id: 5,
            firstName: 'a name',
            lastName: 'a last name',
            email: 'email@mail.com'
          }
        }
      )
  })

  it('returns same state for unknown action', () => {
    const state = {
      id: 5,
      firstName: 'a name',
      lastName: 'a last name',
      email: 'ex@outlook.com'
    };
    const action = { type: "UNKNOWN" };
    expect(reducerEdit(state, action)).toEqual(state);
  })

});