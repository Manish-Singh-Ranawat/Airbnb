const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const {
  home,
  showListing,
  createListing,
  newListingPage,
  editListingPage,
  updateListing,
  deleteListing,
} = require("../controller/listing.js");

const { category, search, sort, filter } = require("../controller/query.js");

const {
  validateListing,
  isLoggedIn,
  isOwner,
} = require("../utils/Middlewares.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(home))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(createListing)
  );

router.get("/new", isLoggedIn, newListingPage);

router.get("/category/:id", wrapAsync(category));
router.route("/search").get(wrapAsync(search));
router.route("/sort").get(wrapAsync(sort));
router.route("/filter").get(wrapAsync(filter));

router
  .route("/:id")
  .get(wrapAsync(showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(deleteListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(editListingPage));

module.exports = router;
