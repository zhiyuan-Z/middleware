var express = require("express");
var router = express.Router();

var { getAllListings, getListingDetail, addListing, removeListing, editListing } = require("../controller/listings");

/* GET users listing. */
router.get("/", function (req, res, next) {
  getAllListings().then(listings => {
    res.json(listings)
  })
});

router.get("/:id", function (req, res, next) {
  getListingDetail({id: req.params.id}).then(listingDetail => {
    res.json(listingDetail)
  })
})

router.post("/", function (req, res, next) {
  addListing({newListing: req.body}).then((newListing) => {
    res.json(newListing);
  })
});

router.delete("/:id", function (req, res, next) {
  removeListing({id: req.params.id}).then((id) => {
    res.json(id);
  })
});

router.put("/:id", function (req, res, next) {
  editListing({id: req.params.id, editedListing: req.body}).then((editedListing) => {
    res.json(editedListing);
  })
});

module.exports = router;
