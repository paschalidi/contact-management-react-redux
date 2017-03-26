import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import FormNew from './component-form-new';

class NewContact extends Component {
  submit = (formValues) => {
    this.props.addNewContact(formValues);
  };

  render() {
    return (
      <div className="container-new-contact">
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Add new contact</h3>
            </div>
            <div className="panel-body">
              <FormNew onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(NewContact)