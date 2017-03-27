import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../../src/reducers';
import EditForm from '../../src/components/component-form-edit'

import renderer from 'react-test-renderer';

describe('CardComponent', () => {
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <EditForm />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});