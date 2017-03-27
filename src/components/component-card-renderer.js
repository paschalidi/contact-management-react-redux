import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './component-card'

class ShowContacts extends Component {
  renderCards(items) {
    return Object.keys(items).map((key, index) => {
      const { id, firstName, lastName, email } = items[key];
      if (id)
        return <Card key={index}
                     id={id}
                     firstName={firstName}
                     lastName={lastName}
                     email={email} />;
    })
  }

  render() {
    return (
      <div className="container-show-contact">
        <div className="row">
          {this.renderCards(this.props.contacts)}
        </div>
      </div>
    );
  }
}

function mapsStateToProps(state) {
  const { reducerAddDeleteUpdateContact } = state;
  return { contacts: reducerAddDeleteUpdateContact }
}

export default connect(mapsStateToProps)(ShowContacts)
