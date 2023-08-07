import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { listingsReducer } from "./listings/listingsReducer";
import { all } from "redux-saga/effects";
import listingsSagas from "./listings/listingsSagas";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  listings: listingsReducer,
});

export function* rootSaga() {
  yield all([...listingsSagas]);
}

export const makeStore = context => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
