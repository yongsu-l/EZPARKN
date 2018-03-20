import React, { Component } from 'react';
// Functional component to help us render form feedback

const FormValidator = props => {
  const field = props.field;
  var message = '';
  switch (field) {
    case 'username':
      //Username must be at least 5 characters
      message = 'Username must be at least 5 characters.';
      break;
    case 'email':
      //Valid email
      message = 'Enter a valid email.';
      break;
    case 'password':
      // Password must have 
      message = 'Password must be between 8 and 40 characters and must have at least a lowercase letter, uppercase letter, and a number.';
      break;
    case 'confirmPassword':
      // Password must have 
      message = 'Passwords do not match.';
      break;           
    default:
      break;
  }
  if (field.length > 0) {
    return (
      <div className="invalid-feedback">
        {message}
      </div>
    );
  }
  else {
    return null;
  }

}

export default FormValidator;
