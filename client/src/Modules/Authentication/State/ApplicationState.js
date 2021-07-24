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
import { useHistory } from 'react-router-dom';

import { API } from 'APICalls/index.js';
import { themes } from 'StylesLibrary/Themes/theme.js';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils';
import setAuthToken from 'Utils/Axios/setAuthToken.js';

import urlMetadata from 'url-metadata';

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
    appThemes: [...themes],
    activeTheme: 14,
    user: {},
    isUserAuthenticated: false,
    authLoading: false,
    displayLoginForm: false,
    displaySignupForm: false,
    displayCredo: false,
    scrollToLogo: false,
    newUser: false,
    privateRouteAuthentication: false,
    privateAuthenticationRoute: '',
    redirectPostLogout: false,
    adminLogin: false,
    resetDisplayQuotes: false
  };
  const [state, dispatch] = useReducer(ApplicationReducer, initialState);
  const { quotes, isQuotesLoaded } = useQuotes();

  const { tags, isTagsLoaded } = useTags();
  const { authors, isAuthorsLoaded } = useAuthors();
  const history = useHistory();

  urlMetadata('https://www.npmjs.com/package/url-metadata').then(function(
    metadata
  ) {
    console.log(metadata);
  });

  useEffect(() => {
    if (isQuotesLoaded && quotes.length > 0) {
      dispatch({
        type: 'SET_QUOTES',
        payload: quotes
      });
    }
  }, [quotes, isQuotesLoaded]);

  useEffect(() => {
    if (isTagsLoaded && tags.length > 0) {
      dispatch({
        type: 'SET_TAGS',
        payload: tags
      });
    }
  }, [tags, isTagsLoaded]);

  useEffect(() => {
    if (isAuthorsLoaded && authors.length > 0) {
      dispatch({
        type: 'SET_AUTHORS',
        payload: authors
      });
    }
  }, [authors, isAuthorsLoaded]);

  useEffect(() => {
    let randomIndex = generateRandomInteger(0, themes.length);
    console.log(randomIndex);
    dispatch({
      type: 'SET_RANDOM_THEME',
      payload: randomIndex
    });
  }, []);

  const handleGoogleLogin = async res => {
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

    if (googleLoginResponse.status === 200) {
      console.log('in a google response');
      localStorage.setItem('token', googleLoginResponse.data.token);
      dispatch({
        type: 'SET_USER_GOOGLE_LOGIN',
        payload: googleLoginResponse.data.user
      });
    }
    if (googleLoginResponse.status === 201) {
      localStorage.setItem('token', googleLoginResponse.data.token);
      dispatch({
        type: 'SET_NEW_USER_FLAG',
        payload: googleLoginResponse.data.user
      });
    }
  };

  const loadUser = async () => {
    if (isUserAuthenticated) {
      console.log('user logged in');
    } else {
      if (localStorage.getItem('token') != null) {
        console.log('in load user');

        setAuthToken(localStorage.getItem('token'));
        try {
          const res = await axios.get('/api/v1/users/auth');

          dispatch({
            type: 'LOAD_USER',
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: 'LOAD_USER_FAILED'
          });
        }
      } else {
        dispatch({
          type: 'LOAD_USER_FAILED'
        });
      }
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
    newUser,
    privateRouteAuthentication,
    privateAuthenticationRoute,
    redirectPostLogout,
    adminLogin,
    resetDisplayQuotes,
    appThemes,
    activeTheme
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
        privateRouteAuthentication,
        privateAuthenticationRoute,
        redirectPostLogout,
        adminLogin,
        resetDisplayQuotes,
        appThemes,
        activeTheme,
        handleGoogleLogin,
        loadUser
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
