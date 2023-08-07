import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { listingsReducer } from "./listings/listingsReducer";
import { all } from "redux-saga/effects";
import listingsSagas from "./listings/listingsSagas";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

const appReducer = combineReducers({
  listings: listingsReducer,
});

const rootReducer = (state, action) => {
  // reconciliate the hydrated state on top of the existing state
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return appReducer(state, action);
};

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
