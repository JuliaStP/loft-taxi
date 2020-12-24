import { GET_ROUTE_SUCCESS, LOG_OUT } from "../actions";

const initialState = {
  route: [],
  // coordinates: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROUTE_SUCCESS: {
      return {
        route: action.payload.route,
        // coordinates: action.payload.coordinates
      };
    }
    case LOG_OUT: {
      return {
        route: [],
      };
    }
    default:
      return state;
  }
}
