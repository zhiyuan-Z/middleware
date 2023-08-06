// fake db actions just for demo purposes
const { v4: uuidv4 } = require('uuid');

let listings = [
  {
    id: "1",
    title: "Cozy apartment with 2 bedrooms",
    postTime: 1684560740000,
    bedroom: "2",
    bathroom: "2",
    startDate: 1682919140000,
    endDate: 1691040754000,
    rent: "1600",
    zip: "12345",
  },
  {
    id: "2",
    title: "1 bedroom inside a stunning apartment",
    postTime: 1684819940000,
    bedroom: "1",
    bathroom: "1",
    startDate: 1688794340000,
    endDate: 1703050340000,
    rent: "900",
    zip: "23456",
  },
  {
    id: "3",
    title: "Great studio near subway station",
    postTime: 1685424740000,
    bedroom: "0",
    bathroom: "1",
    startDate: 1691904740000,
    endDate: 1717133540000,
    rent: "1300",
    zip: "34567",
  },
];

let listingDetails = [
  {
    id: "1",
    userId: "1",
    title: "Cozy apartment with 2 bedrooms",
    postTime: 1684560740000,
    bedroom: "2",
    bathroom: "2",
    startDate: 1682919140000,
    endDate: 1691040754000,
    rent: "1600",
    petFriendly: "No",
    street: "123 Maple St",
    city: "Chicago",
    state: "IL",
    zip: "12345",
    gallery: ["https://source.unsplash.com/random/?apartment"],
  },
  {
    id: "2",
    userId: "2",
    title: "1 bedroom inside a stunning apartment",
    postTime: 1684819940000,
    bedroom: "1",
    bathroom: "1",
    startDate: 1688794340000,
    endDate: 1703050340000,
    rent: "900",
    petFriendly: "Cat",
    street: "456 Michigan Ave",
    city: "Chicago",
    state: "IL",
    zip: "23456",
    gallery: ["https://source.unsplash.com/random/?apartment"],
  },
  {
    id: "3",
    userId: "1",
    title: "Great studio near subway station",
    postTime: 1685424740000,
    bedroom: "0",
    bathroom: "1",
    startDate: 1691904740000,
    endDate: 1717133540000,
    rent: "1300",
    petFriendly: "Yes",
    street: "789 Lake Dr",
    city: "Ann Arbor",
    state: "MI",
    zip: "34567",
    gallery: ["https://source.unsplash.com/random/?apartment"],
  },
];

const getListingsFromDB = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(listings);
    }, 1000);
  });

const getListingDetailFromDB = ({ id }) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(listingDetails.find(listing => listing.id === id));
    }, 1000);
  });

const addListingToDB = ({ newListing }) => {
  const { title, bedroom, bathroom, startDate, endDate, rent, zip } = newListing;
  const id = uuidv4();
  const postTime = new Date().getTime();
  const userId = "test";
  const gallery = ["https://source.unsplash.com/random/?apartment"];
  newListing = {...newListing, id, userId, postTime, gallery}
  listings.push({ id, title, postTime, bedroom, bathroom, startDate, endDate, rent, zip });
  listingDetails.push(newListing);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id, title, postTime, bedroom, bathroom, startDate, endDate, rent, zip });
    }, 1000);
  });
};

const removeListingFromDB = ({ id }) => {
  listings = listings.filter(listing => listing.id !== id);
  listingDetails = listingDetails.filter(listing => listing.id !== id);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(id);
    }, 1000);
  });
};

const editListingFromDB = ({ editedListing, id }) => {
  const { id: listingId, title, postTime, bedroom, bathroom, startDate, endDate, rent, zip } = editedListing;
  listings = listings.map(listing => (listing.id !== id ? listing : { id: listingId, title, postTime, bedroom, bathroom, startDate, endDate, rent, zip }));
  listingDetails = listingDetails.map(listing => (listing.id !== id ? listing : editedListing));
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(editedListing);
    }, 1000);
  });
};

module.exports = { getListingsFromDB, getListingDetailFromDB, addListingToDB, removeListingFromDB, editListingFromDB };
