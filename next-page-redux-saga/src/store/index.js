import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { listingsReducer } from "./listings/listingsReducer";
import { all } from "redux-saga/effects";
import listingsSagas from "./listings/listingsSagas";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  listings: listingsReducer,
});

const rootReducer = (state, action) => {
  // reconcile the server-side state state on top of the existing state
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

// reconcile the persisted state in browser storage with existing state
const persistedReducer = persistReducer(persistConfig, rootReducer);

export function* rootSaga() {
  yield all([...listingsSagas]);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
store.sagaTask = sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export const makeStore = context => store;

export const wrapper = createWrapper(makeStore, { debug: true });
