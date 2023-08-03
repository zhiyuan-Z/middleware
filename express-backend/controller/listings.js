var { getListingsFromDB, getListingDetailFromDB, addListingToDB, removeListingFromDB, editListingFromDB } = require("../db/listings.db");

// connect to the fake db

const getAllListings = getListingsFromDB;

const getListingDetail = getListingDetailFromDB;

const addListing = addListingToDB;

const removeListing = removeListingFromDB;

const editListing = editListingFromDB;

module.exports = { getAllListings, getListingDetail, addListing, removeListing, editListing };
