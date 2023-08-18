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
    case actionTypes.ADD_LISTING_SUCCESS: {
      return state.listings.find(
        listing => listing.listingId === action.payload.listings.listingId
      )
        ? state
        : {
            ...state,
            listings: [...state.listings, action.payload.newListing],
          };
    }
    case actionTypes.REMOVE_LISTING_SUCCESS: {
      return {
        ...state,
        listings: state.listings.filter(
          listing => listing.listingId !== action.payload.id
        ),
      };
    }
    case actionTypes.EDIT_LISTING_SUCCESS: {
      return {
        ...state,
        listings: state.listings.map(listing =>
          listing.listingId !== action.payload.id
            ? listing
            : action.payload.editedListing
        ),
      };
    }
    default:
      return state;
  }
}
