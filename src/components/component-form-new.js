import React from 'react';
import { Field, reduxForm } from 'redux-form';
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

const ContactForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
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
             type="email"
             component={renderField}
             label="E-mail" />
      <div>
        <button className="btn btn-success"
                type="submit"
                disabled={submitting}>
          Submit
        </button>
        <button className="btn btn-default"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}>Clear</button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'newFormValidation',
  validate,
})(ContactForm)