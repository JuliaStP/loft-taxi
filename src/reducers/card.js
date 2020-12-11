import { SET_CARD_SUCCESS, GET_CARD_SUCCESS } from "../actions";

const initialState = {
  isLoggedIn: window.localStorage.getItem("state")
    ? JSON.parse(window.localStorage.getItem("state")).isLoggedIn
    : false,
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARD_SUCCESS: {
      window.localStorage.setItem(
        "state",
        JSON.stringify({
          isLoggedIn: true,
        })
      );
      return {
        isLoggedIn: true,
      };
    }
    case GET_CARD_SUCCESS: {
      window.localStorage.setItem(
        "state",
        JSON.stringify({
          isLoggedIn: true,
        })
      );
      return Object.assign({}, state, {
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
      });
    }
    default:
      return state;
  }
}
