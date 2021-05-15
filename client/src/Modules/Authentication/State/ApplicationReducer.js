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
  SET_NEW_USER_FLAG,
  LOAD_USER,
  LOAD_USER_FAILED,
  SET_PRIVATE_ROUTE_AUTH,
  LOG_OUT_USER,
  SET_ADMINLOGIN,
  RESET_DISPLAY_QUOTE_LOGOUT,
  SET_RANDOM_THEME,
  DQ_UNSET_QUOTE_STATE
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
        draftState.redirectPostLogout = false;
      });
    case SET_USER_GOOGLE_LOGIN:
      return produce(state, draftState => {
        draftState.user = action.payload;
        draftState.isUserAuthenticated = true;
        draftState.authLoading = false;
      });

    case LOG_OUT_USER:
      return produce(state, draftState => {
        draftState.resetDisplayQuotes = true;
        draftState.isUserAuthenticated = false;
        draftState.user = {};
        localStorage.clear();
        draftState.authLoading = false;
        draftState.redirectPostLogout = true;
        draftState.adminLogin = false;
      });

    case SET_NEW_USER_FLAG:
      return produce(state, draftState => {
        draftState.user = action.payload;
        draftState.isUserAuthenticated = true;
        draftState.authLoading = false;
        draftState.newUser = true;
      });

    case LOAD_USER:
      return produce(state, draftState => {
        draftState.user = action.payload;
        draftState.isUserAuthenticated = true;
        draftState.authLoading = false;
      });

    case LOAD_USER_FAILED:
      return produce(state, draftState => {
        draftState.isUserAuthenticated = false;
        draftState.authLoading = false;
      });
    case SET_PRIVATE_ROUTE_AUTH:
      return produce(state, draftState => {
        draftState.privateRouteAuthentication = true;
        draftState.privateAuthenticationRoute = action.payload;
      });

    case SET_ADMINLOGIN:
      return produce(state, draftState => {
        draftState.adminLogin = true;
      });

    case RESET_DISPLAY_QUOTE_LOGOUT:
      return produce(state, draftState => {
        draftState.resetDisplayQuotes = true;
      });

    case DQ_UNSET_QUOTE_STATE:
      return produce(state, draftState => {
        draftState.resetDisplayQuotes = false;
        draftState.redirectPostLogout = false;
      });

    case SET_RANDOM_THEME:
      return produce(state, draftState => {
        draftState.activeTheme = action.payload;
      });
  }
};
