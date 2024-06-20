const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../utils/Middlewares.js");
const { addReview, deleteReview } = require("../controller/review.js");

router.post("/", isLoggedIn, validateReview, wrapAsync(addReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(deleteReview)
);

module.exports = router;
