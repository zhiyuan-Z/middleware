import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddlewhere from "redux-saga";
import { listingsReducer } from "./listings/listingsReducer";
import { all } from "redux-saga/effects";
import listingsSagas from "./listings/listingsSagas";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  listings: listingsReducer,
});

export function* rootSaga() {
  yield all([...listingsSagas]);
}

export const makeStore = context => {
  const sagaMiddleware = createSagaMiddlewhere();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });

// export function StoreProvider({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }
