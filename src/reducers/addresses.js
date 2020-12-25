import { GET_ADDRESS_SUCCESS, LOG_OUT } from "../actions";

const initialState = {
  addresses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_SUCCESS: {
      return {
        addresses: action.payload.addresses,
      };
    }
    case LOG_OUT: {
      return {
        addresses: [],
      };
    }
    default:
      return state;
  }
}
