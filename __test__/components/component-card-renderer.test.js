import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../../src/reducers';
import CardRenderer from '../../src/components/component-card-renderer'

import renderer from 'react-test-renderer';

describe('CardRenderer', () => {
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <CardRenderer />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});