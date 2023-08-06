export const actionTypes = {
  GET_ALL_LISTINGS: "GET_ALL_LISTINGS",
  ADD_LISTING: "ADD_LISTING",
  REMOVE_LISTING: "REMOVE_LISTING",
  EDIT_LISTING: "EDIT_LISTING",
  GET_LISTINGS_SUCCESS: "GET_LISTINGS_SUCCESS",
};

export const getAllListings = () => ({
  type: actionTypes.GET_ALL_LISTINGS,
});

export const getListingsSuccess = items => ({
  type: actionTypes.GET_LISTINGS_SUCCESS,
  payload: { listings: items },
});