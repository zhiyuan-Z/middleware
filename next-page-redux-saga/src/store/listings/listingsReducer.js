import { actionTypes } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  listings: [],
};

export function listingsReducer(state = initialState, action) {
  console.log('state', state)
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actionTypes.GET_LISTINGS_SUCCESS: {
      return {
        ...state,
        listings: action.payload.listings,
      };
    }
    case actionTypes.ADD_LISTING_SUCCESS: {
      return {
        ...state,
        listings: [...state.listings.listings, action.payload.newListing],
      };
    }
    case actionTypes.REMOVE_LISTING: {
      return {
        ...state,
        listings: state.listings.listings.filter(listing => listing.id !== action.payload.id),
      };
    }
    case actionTypes.EDIT_LISTING_SUCCESS: {
      console.log('what?', action.payload)
      return {
        ...state,
        listings: state.listings.listings.map(listing =>
          listing.id !== action.payload.id
            ? listing
            : action.payload.editedListing
        ),
      };
    }
    default:
      return state;
  }
}
