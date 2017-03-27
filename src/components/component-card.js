import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Card extends Component {
  handleDeleteAction() {
    this.props.deleteContact(this.props.id)
  }

  handleEditAction() {
    const { id, firstName, lastName, email } = this.props;
    this.props.editContact({ id, firstName, lastName, email })
  }

  render() {
    return (
      <div className="container-card">
        <div className="col-sm-6 col-md-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <p>First Name: {this.props.firstName}</p>
              <p>Last Name: {this.props.lastName}</p>
              <p>Email: {this.props.email}</p>
              <div className="btn-group btn-group-justified" role="group">
                <div className="btn-group" role="group">
                  <button type="button"
                          className="btn btn-info edit-contact"
                          onClick={this.handleEditAction.bind(this)}
                  >Edit contact
                  </button>
                </div>
                <div className="btn-group" role="group">
                  <button type="button"
                          className="btn btn-danger delete-contact"
                          onClick={this.handleDeleteAction.bind(this)}
                  >Delete contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Card)