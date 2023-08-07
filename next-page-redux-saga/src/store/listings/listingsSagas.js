import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  actionTypes,
  getListingsSuccess,
  addListingSuccess,
  editListingSuccess,
  removeListingSuccess,
} from "./actions";
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

export function* watchEditListing() {
  console.log("watching editListing");
  yield takeEvery(actionTypes.EDIT_LISTING, editListing);
}

export function* watchRemoveListing() {
  console.log("watching removeListing");
  yield takeEvery(actionTypes.REMOVE_LISTING, removeListing);
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

export function* editListing(action) {
  console.log("working: editListing");
  try {
    const editedListing = yield call(api.editListing, action.payload);
    yield put(editListingSuccess({ editedListing, id: action.payload.id }));
  } catch (error) {
    console.error(error);
  }
}

export function* removeListing(action) {
  console.log("working: removeListing");
  try {
    const id = yield call(api.removeListing, action.payload);
    yield put(removeListingSuccess({ id }));
  } catch (error) {
    console.error(error);
  }
}

const listingsSagas = [
  fork(watchGetAllListings),
  fork(watchAddListing),
  fork(watchEditListing),
  fork(watchRemoveListing),
];

export default listingsSagas;
