import { AUTHENTICATE, signIn, SIGN_UP } from "./actions";
import {serverLogin, serverSignup} from './api';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogin(email, password)
    if(success){
      store.dispatch(signIn())
    }
  } else if(action.type === SIGN_UP) {
    const { email, firsName, lastName, password } = action.payload;
    const success = await serverSignup(email, firsName, lastName, password);
    if(success) {
        store.dispatch(signIn());
    }
  } else {
    next(action);
  }
};

