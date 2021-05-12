import {
  SET_TAGS,
  SET_AUTHORS,
  SET_QUOTES,
  SET_LOGINFORM_FIELDS,
  SET_SIGNUP_FIELDS,
  TOGGLE_DISPLAY_LOGINFORM,
  TOGGLE_DISPLAY_SIGNUPFORM,
  TOGGLE_DISPLAY_CREDO,
  TOGGLE_SCROLL_TO_LOGO,
  SET_USER_GOOGLE_LOGIN,
  SET_AUTH_LOADING,
  SET_NEW_USER_FLAG
} from 'Modules/Authentication/State/types.js';
import produce from 'immer';

export default (state, action) => {
  switch (action.type) {
    case SET_LOGINFORM_FIELDS:
      const { fieldName, fieldValue } = action.payload;
      return produce(state, draftState => {
        draftState.logindetails[`${fieldName}`] = fieldValue;
      });

    case SET_SIGNUP_FIELDS:
      const { signupField, signFieldValue } = action.payload;
      return produce(state, draftState => {
        draftState.signupDetails[`${signupField}`] = signFieldValue;
      });

    case TOGGLE_DISPLAY_LOGINFORM:
      return produce(state, draftState => {
        draftState.displayLoginForm = !draftState.displayLoginForm;
        draftState.displaySignupForm = false;
      });

    case TOGGLE_DISPLAY_SIGNUPFORM:
      return produce(state, draftState => {
        draftState.displaySignupForm = !draftState.displaySignupForm;
        draftState.displayLoginForm = false;
      });

    case TOGGLE_DISPLAY_CREDO:
      return produce(state, draftState => {
        draftState.displayCredo = !draftState.displayCredo;
        draftState.scrollToLogo = false;
      });

    case TOGGLE_SCROLL_TO_LOGO:
      return produce(state, draftState => {
        draftState.scrollToLogo = !draftState.scrollToLogo;
      });
    case SET_TAGS:
      return produce(state, draftState => {
        draftState.applicationData.tags = action.payload;
      });
    case SET_AUTHORS:
      return produce(state, draftState => {
        draftState.applicationData.authors = action.payload;
      });
    case SET_QUOTES:
      return produce(state, draftState => {
        draftState.applicationData.quotes = action.payload;
      });

    case SET_AUTH_LOADING:
      return produce(state, draftState => {
        draftState.authLoading = !draftState.authLoading;
      });
    case SET_USER_GOOGLE_LOGIN:
      return produce(state, draftState => {
        draftState.user = action.payload;
        draftState.isUserAuthenticated = true;
        draftState.authLoading = !draftState.authLoading;
      });

    case SET_NEW_USER_FLAG:
      return produce(state, draftState => {
        draftState.user = action.payload;
        draftState.isUserAuthenticated = true;
        draftState.authLoading = !draftState.authLoading;
        draftState.newUser = true;
      });
  }
};
