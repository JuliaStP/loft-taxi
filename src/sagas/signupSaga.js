import { takeEvery, call, put } from "redux-saga/effects";
import { serverSignup } from "../api";
import { SIGN_UP, signIn } from "../actions";

export function* signingupSaga(action) {
  const { email, firstName, lastName, password } = action.payload;
  const success = yield call(
    serverSignup,
    email,
    firstName,
    lastName,
    password
  );
  if (success) {
    yield put(signIn());
  }
}

export function* signupSaga() {
  yield takeEvery(SIGN_UP, signingupSaga);
}
