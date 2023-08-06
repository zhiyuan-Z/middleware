import { call, fork, put, takeEvery } from "redux-saga/effects";
import { actionTypes, getListingsSuccess } from "./actions";
import * as api from "@/api/listingsApi";

// watcher
export function* watchGetAllListings() {
  console.log('watching')
  yield takeEvery(actionTypes.GET_ALL_LISTINGS, getAllListings);
}

// worker saga
export function* getAllListings() {
  console.log('working')
  try {
    const listings = yield call(api.getAllListings);
    yield put(getListingsSuccess(listings));
  } catch (error) {
    console.error(error);
  }
}

const listingsSagas = [fork(watchGetAllListings)];

export default listingsSagas;
