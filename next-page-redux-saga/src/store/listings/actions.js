export const actionTypes = {
  GET_ALL_LISTINGS: "GET_ALL_LISTINGS",
  ADD_LISTING: "ADD_LISTING",
  REMOVE_LISTING: "REMOVE_LISTING",
  EDIT_LISTING: "EDIT_LISTING",
  GET_LISTINGS_SUCCESS: "GET_LISTINGS_SUCCESS",
  ADD_LISTING_SUCCESS: "ADD_LISTING_SUCCESS",
  EDIT_LISTING_SUCCESS: "EDIT_LISTING_SUCCESS",
  REMOVE_LISTING_SUCCESS: "REMOVE_LISTING_SUCCESS",
};

export const getAllListings = () => ({
  type: actionTypes.GET_ALL_LISTINGS,
});

export const getListingsSuccess = items => ({
  type: actionTypes.GET_LISTINGS_SUCCESS,
  payload: { listings: items },
});

export const addListing = newListing => ({
  type: actionTypes.ADD_LISTING,
  payload: { newListing },
});

export const addListingSuccess = item => ({
  type: actionTypes.ADD_LISTING_SUCCESS,
  payload: { newListing: item },
});

export const editListing = ({ editedListing, id }) => ({
  type: actionTypes.EDIT_LISTING,
  payload: { editedListing, id },
});

export const editListingSuccess = ({ editedListing, id }) => ({
  type: actionTypes.EDIT_LISTING_SUCCESS,
  payload: { editedListing, id },
});

export const removeListing = ({ id }) => ({
  type: actionTypes.REMOVE_LISTING,
  payload: { id },
});

export const removeListingSuccess = ({ id }) => ({
  type: actionTypes.REMOVE_LISTING_SUCCESS,
  payload: { id },
});
