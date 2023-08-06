import { actionTypes } from "./actions";

const initialState = {
  listings: [],
};

export function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_LISTINGS_SUCCESS: {
      return {
        ...state,
        listings: action.payload.listings,
      };
    }
    case actionTypes.ADD_LISTING: {
      return {
        ...state,
        listings: [...listings, action.payload.newListing],
      };
    }
    case actionTypes.REMOVE_LISTING: {
      return {
        ...state,
        listings: listings.filter(listing => listing.id !== action.payload.id),
      };
    }
    case actionTypes.EDIT_LISTING: {
      return {
        ...state,
        listings: listings.map(listing =>
          listing.id !== action.payload.id ? listing : action.payload.newListing
        ),
      };
    }
    default:
      return state;
  }
}
