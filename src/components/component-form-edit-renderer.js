import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import EditForm from './component-form-edit';

class EditContact extends Component {
  submit = (formValues) => {
    this.props.updateContact(formValues);
  };

  render() {
    return (
      <div className="container-edit-contact">
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Edit Contact</h3>
            </div>
            <div className="panel-body">
              <EditForm onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(EditContact)