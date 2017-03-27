import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import validate from './validation-rules/validate'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class EditForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstName"
               type="text"
               component={renderField}
               label="First Name" />
        <Field name="lastName"
               type="text"
               component={renderField}
               label="Last Name" />
        <Field name="email"
               type="text"
               component={renderField}
               label="mail" />
        <div>
          <button className="btn btn-success"
                  type="submit"
                  disabled={submitting}>
            Update
          </button>
          <button className="btn btn-default"
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}>
            Undo Changes
          </button>
        </div>
      </form>
    )
  }
}
function mapsStateToProps(state) {
  const { reducerEditContact } = state;
  return { initialValues: reducerEditContact.data }
}

EditForm = reduxForm({
  form: 'editFromState',
  enableReinitialize: true,
  validate
})(EditForm);
EditForm = connect(mapsStateToProps)(EditForm);

export default EditForm
