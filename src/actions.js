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
export const signUp = (email, firsName, lastName, password) => ({ 
  type: SIGN_UP, 
  payload: {email, firsName, lastName, password} 
});

//profile
export const SET_CARD = 'SET_CARD';
export const SET_CARD_SUCCESS = 'SET_CARD_SUCCESS';
export const GET_CARD = 'GET_CARD';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';

export const setCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SET_CARD, 
  payload: {cardNumber, expiryDate, cardName, cvc, token} 
});
export const setCardSuccess = () => ({ type: SET_CARD_SUCCESS });
export const getCard = (token) => ({
  type: GET_CARD, 
  payload: {token} 
});
export const getCardSuccess = (data) => ({ 
  type: GET_CARD_SUCCESS,
  payload: {
      cardNumber: data.cardNumber, 
      expiryDate: data.expiryDate, 
      cardName: data.cardName, 
      cvc: data.cvc
  } 
});
