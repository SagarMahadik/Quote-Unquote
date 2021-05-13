import React, { useEffect, useRef } from 'react';
import {
  ActionBorder,
  ActionContainer
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import EnterTheLibrary from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/EnterTheLibrary';
import MemberLogin from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/MemberLogin';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import { useGoogleLogin } from 'react-google-login';
import LogoutButton from 'StylesLibrary/Molecules/GlobalModule/LogoutButton.js';

import { useHistory } from 'react-router-dom';

const LandingPageActions = () => {
  const clientId =
    '806952200431-4k8ilrj5lbmi6js3rqat4f8tlmssvn4j.apps.googleusercontent.com';
  const {
    signupDetails: { userName, email, mobileNumber, password, confirmPassword },
    displaySignupForm,
    displayLoginForm,
    handleGoogleLogin
  } = useApplicationState();

  const dispatch = useApplicationDispatch();

  const onSuccess = res => {
    dispatch({
      type: 'SET_AUTH_LOADING'
    });
    handleGoogleLogin(res);
  };

  const onFailure = res => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId

    // responseType: 'code',
    // prompt: 'consent',
  });

  let history = useHistory();

  function handleClick() {
    history.push('/moodPage');
  }

  return (
    <ActionBorder>
      <ActionContainer>
        <MemberLogin buttonText="Enter Quote Library" onClick={handleClick} />
      </ActionContainer>
    </ActionBorder>
  );
};

export default LandingPageActions;
