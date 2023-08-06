import { call, fork, put, takeEvery } from "redux-saga/effects";
import { actionTypes, getListingsSuccess, addListingSuccess } from "./actions";
import * as api from "@/api/listingsApi";

// watcher
export function* watchGetAllListings() {
  console.log("watching getAllListings");
  yield takeEvery(actionTypes.GET_ALL_LISTINGS, getAllListings);
}

export function* watchAddListing() {
  console.log("watching getAddListing");
  yield takeEvery(actionTypes.ADD_LISTING, addListing);
}

// worker saga
export function* getAllListings() {
  console.log("working: getAllListings");
  try {
    const listings = yield call(api.getAllListings);
    yield put(getListingsSuccess(listings));
  } catch (error) {
    console.error(error);
  }
}

export function* addListing(action) {
  console.log("working: addListing");
  try {
    const newListing = yield call(api.addListing, action.payload);
    yield put(addListingSuccess(newListing));
  } catch (error) {
    console.error(error);
  }
}

const listingsSagas = [fork(watchGetAllListings), fork(watchAddListing)];

export default listingsSagas;
