const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../utils/Middlewares.js");
const {
  signupPage,
  signup,
  loginPage,
  login,
  logout,
} = require("../controller/user.js");

//signup
router.route("/signup").get(signupPage).post(wrapAsync(signup));

//login
router
  .route("/login")
  .get(loginPage)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    login
  );

router.get("/logout", logout);

module.exports = router;
