import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import { authSaga } from './sagas/authSaga';
import { signupSaga } from './sagas/signupSaga';
import { cardSaga } from './sagas/cardSaga';
import { routeSaga } from './sagas/routeSaga';
import { addressListSaga } from './sagas/addressListSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const SagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(SagaMiddleware)));

SagaMiddleware.run(authSaga);
SagaMiddleware.run(signupSaga);
SagaMiddleware.run(cardSaga);
SagaMiddleware.run(routeSaga);
SagaMiddleware.run(addressListSaga);