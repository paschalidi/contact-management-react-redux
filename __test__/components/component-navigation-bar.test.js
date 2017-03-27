import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../../src/reducers';
import NavigationBar from '../../src/components/component-navigation-bar'

import renderer from 'react-test-renderer';

describe('NavigationBar', () => {
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <NavigationBar />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});