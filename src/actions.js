// import {createAction} from 'redux-actions';

// signin
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const signIn = () => ({ type: LOG_IN });
export const signOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

// signup
export const SIGN_UP = "SIGN_UP";
export const signUp = (email, name, password) => ({ type: SIGN_UP,payload: { email, name, password } });

//profile

