import React, { Component } from 'react';
import NavigationBar from './component-navigation-bar';
import FormNewRenderer from './component-form-new-renderer';
import FormEditRenderer from './component-form-edit-renderer'
import CardRenderer from './component-card-renderer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <FormNewRenderer />
        <FormEditRenderer />
        <CardRenderer />
      </div>
    );
  }
}
