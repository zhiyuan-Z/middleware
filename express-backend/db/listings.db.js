const { v4: uuidv4 } = require("uuid");
const mongoDB = require("../db/conn");

const db = mongoDB.getDB();
const listingsCollection = db.collection("listings");
const detailsCollection = db.collection("listingDetails");

const getListingsFromDB = async () => {
  const listings = await listingsCollection.find().toArray();
  return listings;
};

const getListingDetailFromDB = async ({ id }) => {
  const listingDetails = await detailsCollection.findOne({ listingId: id });
  return listingDetails;
};

const addListingToDB = async ({ newListing }) => {
  const { title, bedroom, bathroom, startDate, endDate, rent, zip } =
    newListing;
  const id = uuidv4();
  const postTime = new Date().getTime();
  const userId = "test";
  const gallery = ["https://source.unsplash.com/random/?apartment"];
  newListing = { ...newListing, listingId: id, userId, postTime, gallery };
  await listingsCollection.insertOne({
    listingId: id,
    title,
    postTime,
    bedroom,
    bathroom,
    startDate,
    endDate,
    rent,
    zip,
  });
  await detailsCollection.insertOne(newListing);
  return new Promise((res, rej) => {
    res({
      listingId: id,
      title,
      postTime,
      bedroom,
      bathroom,
      startDate,
      endDate,
      rent,
      zip,
    });
  });
};

const removeListingFromDB = async ({ id }) => {
  await listingsCollection.deleteOne({ listingId: id });
  await detailsCollection.deleteOne({ listingId: id });
  return new Promise((res, rej) => {
    res(id);
  });
};

const editListingFromDB = async ({ editedListing, id }) => {
  const { title, bedroom, bathroom, startDate, endDate, rent, zip } =
    editedListing;
  const { postTime, userId, gallery } = await detailsCollection.findOne({
    listingId: id,
  });
  await listingsCollection.updateOne(
    { listingId: id },
    {
      $set: {
        listingId: id,
        title,
        postTime,
        bedroom,
        bathroom,
        startDate,
        endDate,
        rent,
        zip,
      },
    }
  );
  await detailsCollection.updateOne(
    { listingId: id },
    { $set: { ...editedListing, id, userId, postTime, gallery } }
  );
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        listingId: id,
        title,
        postTime,
        bedroom,
        bathroom,
        startDate,
        endDate,
        rent,
        zip,
      });
    }, 1000);
  });
};

module.exports = {
  getListingsFromDB,
  getListingDetailFromDB,
  addListingToDB,
  removeListingFromDB,
  editListingFromDB,
};
