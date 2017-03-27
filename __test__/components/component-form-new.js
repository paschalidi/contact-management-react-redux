import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../../src/reducers';
import NewForm from '../../src/components/component-form-new'

import renderer from 'react-test-renderer';


describe('NavigationBar', () => {
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <NewForm />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});