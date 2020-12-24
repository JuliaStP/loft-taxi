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
  payload: { email, firsName, lastName, password },
});

//profile
export const SET_CARD = "SET_CARD";
export const SET_CARD_SUCCESS = "SET_CARD_SUCCESS";
export const GET_CARD = "GET_CARD";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";

export const setCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SET_CARD,
  payload: {cardNumber,
  expiryDate,
  cardName,
  cvc,
  token}
});
export const setCardSuccess = () => ({ type: SET_CARD_SUCCESS });
export const getCard = (token) => ({
  type: GET_CARD,
  payload: token,
});
export const getCardSuccess = (data) => ({
  type: GET_CARD_SUCCESS,
  payload: data,
});

//address
export const GET_ADDRESS = "GET_ADDRESS";
export const GET_ADDRESS_SUCCESS = "GET_ADDRESS_SUCCESS";

export const getAddress = () => ({
  type: GET_ADDRESS,
});
export const getAddressSuccess = (data) => ({
  type: GET_ADDRESS_SUCCESS,
  payload: data,
});

//route

export const GET_ROUTE = "GET_ROUTE";
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";

export const getRoute = (address1, address2) => ({
  type: GET_ROUTE,
  payload:  address1, address2 
});
export const getRouteSuccess = (data) => ({
  type: GET_ROUTE_SUCCESS,
  payload: data
});
