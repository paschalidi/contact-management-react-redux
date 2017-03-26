import React, { Component } from 'react';
import NavigationBar from './component-navigation-bar';
import FormNewRenderer from './component-form-new-renderer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <FormNewRenderer />
      </div>
    );
  }
}
