import React, { useContext, useReducer, useEffect } from 'react';
import {
  ApplicationContext,
  ApplicationDispatchContext
} from 'Modules/Authentication/State/ApplicationContext.js';
import ApplicationReducer from 'Modules/Authentication/State/ApplicationReducer.js';

import useQuotes from 'APICalls/Quotes/useQuotes.js';
import useTags from 'APICalls/Tags/useTags.js';
import useAuthors from 'APICalls/Authors/useAuthors';

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
    displayLoginForm: false,
    displaySignupForm: false,
    displayCredo: false,
    scrollToLogo: false
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

  const {
    logindetails,
    signupDetails,
    displayLoginForm,
    displaySignupForm,
    displayCredo,
    scrollToLogo,
    applicationData
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
        applicationData
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
