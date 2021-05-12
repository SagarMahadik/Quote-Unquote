import React, { useContext, useReducer, useEffect } from 'react';
import {
  ApplicationContext,
  ApplicationDispatchContext
} from 'Modules/Authentication/State/ApplicationContext.js';
import ApplicationReducer from 'Modules/Authentication/State/ApplicationReducer.js';

import useQuotes from 'APICalls/Quotes/useQuotes.js';
import useTags from 'APICalls/Tags/useTags.js';
import useAuthors from 'APICalls/Authors/useAuthors';
import axios from 'axios';

const ApplicationState = ({ children }) => {
  const initialState = {
    logindetails: {
      mobileNumber: '',
      password: ''
    },
    signupDetails: {
      userName: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: ''
    },
    applicationData: {
      quotes: [],
      authors: [],
      tags: []
    },
    user: {},
    isUserAuthenticated: false,
    authLoading: false,
    displayLoginForm: false,
    displaySignupForm: false,
    displayCredo: false,
    scrollToLogo: false,
    newUser: false
  };
  const [state, dispatch] = useReducer(ApplicationReducer, initialState);
  const { quotes, isQuotesLoaded } = useQuotes();

  const { tags, isTagsLoaded } = useTags();
  const { authors, isAuthorsLoaded } = useAuthors();

  useEffect(() => {
    if (isQuotesLoaded && quotes.length > 0) {
      dispatch({ type: 'SET_QUOTES', payload: quotes });
    }
  }, [quotes, isQuotesLoaded]);

  useEffect(() => {
    if (isTagsLoaded && tags.length > 0) {
      dispatch({ type: 'SET_TAGS', payload: tags });
    }
  }, [tags, isTagsLoaded]);

  useEffect(() => {
    if (isAuthorsLoaded && authors.length > 0) {
      dispatch({ type: 'SET_AUTHORS', payload: authors });
    }
  }, [authors, isAuthorsLoaded]);

  const handleGoogleLogin = async res => {
    console.log(res);

    const token = res?.tokenId;
    const body = JSON.stringify({
      token
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const googleLoginResponse = await axios.post(
      '/api/v1/users/googleLogin',
      body,
      config
    );
    console.log(googleLoginResponse);
    if (googleLoginResponse.status === 200) {
      dispatch({
        type: 'SET_USER_GOOGLE_LOGIN',
        payload: googleLoginResponse.data.user
      });
    }
    if (googleLoginResponse.status === 201) {
      dispatch({
        type: 'SET_NEW_USER_FLAG',
        payload: googleLoginResponse.data.user
      });
    }
  };

  const {
    logindetails,
    signupDetails,
    displayLoginForm,
    displaySignupForm,
    displayCredo,
    scrollToLogo,
    applicationData,
    user,
    authLoading,
    isUserAuthenticated,
    newUser
  } = state;
  return (
    <ApplicationContext.Provider
      value={{
        logindetails,
        signupDetails,
        displayLoginForm,
        displaySignupForm,
        displayCredo,
        scrollToLogo,
        applicationData,
        user,
        authLoading,
        isUserAuthenticated,
        newUser,
        handleGoogleLogin
      }}
    >
      <ApplicationDispatchContext.Provider value={dispatch}>
        {children}
      </ApplicationDispatchContext.Provider>
    </ApplicationContext.Provider>
  );
};

function useApplicationState() {
  const context = useContext(ApplicationContext);

  if (context === undefined) {
    throw new Error('useApplicationState must be used within a CountProvider');
  }
  return context;
}

function useApplicationDispatch() {
  const context = useContext(ApplicationDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useApplicationDispatch must be used within a CountProvider'
    );
  }
  return context;
}

export { ApplicationState, useApplicationState, useApplicationDispatch };
