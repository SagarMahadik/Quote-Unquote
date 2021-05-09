import React from 'react';
import { LoginPageInputTextBox } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

const SignupFormFields = () => {
  const {
    signupDetails: { userName, email, mobileNumber, password, confirmPassword }
  } = useApplicationState();
  const dispatch = useApplicationDispatch();

  return (
    <>
      <LoginPageInputTextBox
        placeholder="Your sweet name"
        value={userName}
        onChange={e =>
          dispatch({
            type: 'SET_SIGNUP_FIELDS',
            payload: { signupField: 'userName', signFieldValue: e.target.value }
          })
        }
      ></LoginPageInputTextBox>
      <LoginPageInputTextBox
        placeholder="Your favourite Email ID"
        value={email}
        onChange={e =>
          dispatch({
            type: 'SET_SIGNUP_FIELDS',
            payload: { signupField: 'email', signFieldValue: e.target.value }
          })
        }
      ></LoginPageInputTextBox>
      <LoginPageInputTextBox
        placeholder="Mobile number"
        value={mobileNumber}
        onChange={e =>
          dispatch({
            type: 'SET_SIGNUP_FIELDS',
            payload: {
              signupField: 'mobileNumber',
              signFieldValue: e.target.value
            }
          })
        }
      ></LoginPageInputTextBox>
      <LoginPageInputTextBox
        placeholder="Password for QuoteUnQuote"
        value={password}
        onChange={e =>
          dispatch({
            type: 'SET_SIGNUP_FIELDS',
            payload: { signupField: 'password', signFieldValue: e.target.value }
          })
        }
      ></LoginPageInputTextBox>
      <LoginPageInputTextBox
        placeholder="Please confirm password"
        value={confirmPassword}
        onChange={e =>
          dispatch({
            type: 'SET_SIGNUP_FIELDS',
            payload: {
              signupField: 'confirmPassword',
              signFieldValue: e.target.value
            }
          })
        }
      ></LoginPageInputTextBox>
    </>
  );
};

export default SignupFormFields;
