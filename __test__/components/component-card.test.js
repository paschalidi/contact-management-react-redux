import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../../src/reducers';
import Card from '../../src/components/component-card'

import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Card', () => {
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  it('renders correctly', () => {
    let props = { id: 1, firstName: 'a name', lastName: 'a last name', email: 'email' };
    const component = renderer.create(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Card {...props} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('mounting functions', () => {
    let props = { id: 1, firstName: 'a name', lastName: 'a last name', email: 'email' };

    const wrapper = mount(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Card {...props} />
      </Provider>
    );

    wrapper.find('.edit-contact').simulate('click');
    expect(wrapper).toMatchSnapshot();

    wrapper.find('.delete-contact').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

});