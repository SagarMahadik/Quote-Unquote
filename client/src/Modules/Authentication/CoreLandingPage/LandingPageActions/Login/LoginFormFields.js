import React from 'react';
import { LoginPageInputTextBox } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

const LoginForm = () => {
  const {
    logindetails: { mobileNumber, password }
  } = useApplicationState();

  const dispatch = useApplicationDispatch();
  return (
    <>
      <LoginPageInputTextBox
        placeholder="Mobile number"
        value={mobileNumber}
        onChange={e =>
          dispatch({
            type: 'SET_LOGINFORM_FIELDS',
            payload: { fieldName: 'mobileNumber', fieldValue: e.target.value }
          })
        }
      ></LoginPageInputTextBox>
      <LoginPageInputTextBox
        placeholder="Password"
        value={password}
        onChange={e =>
          dispatch({
            type: 'SET_LOGINFORM_FIELDS',
            payload: { fieldName: 'password', fieldValue: e.target.value }
          })
        }
      ></LoginPageInputTextBox>
    </>
  );
};

export default LoginForm;
