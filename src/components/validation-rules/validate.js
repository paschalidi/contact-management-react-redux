import React from 'react';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName =
      <div className="alert alert-danger margin-top" role="alert">
        Required
      </div>
  }
  else if (values.firstName.length > 15) {
    errors.firstName =
      <div className="alert alert-danger margin-top" role="alert">
        Must be 15 characters or less
      </div>
  }

  if (!values.lastName) {
    errors.lastName =
      <div className="alert alert-danger margin-top" role="alert">
        Required
      </div>
  }
  else if (values.lastName.length > 15) {
    errors.lastName =
      <div className="alert alert-danger margin-top" role="alert">
        Must be 15 characters or less
      </div>
  }

  if (!values.email) {
    errors.email =
      <div className="alert alert-danger margin-top" role="alert">
        Required
      </div>
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email =
      <div className="alert alert-danger margin-top" role="alert">
        Invalid email address
      </div>
  }
  else if (values.email.length > 40) {
    errors.email =
      <div className="alert alert-danger margin-top" role="alert">
        Must be 40 characters or less
      </div>
  }
  return errors
};

export default validate

