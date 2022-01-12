const express = require("express");
const router = express.Router();

const dbconfig = require("../Model/database");
const passport = require("./passport");



router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile.ejs", { title: "Dashboard Page", user: req.user });
});

// **************************************************
// ((((((((((((((((( Authentication )))))))))))))))))
// **************************************************
router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/apis/profile",
    failureRedirect: "/",
    failureFlash: true,
  }),
  (req, res, next) => {
    if (req.body.remember) {
      req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
      req.session.cookie.expires = false;
    }
    res.redirect("/");
  }
);

router.get("/logout", (req, res, next) => {
  req.logOut();
  res.redirect("/");
});

router.post(
  "/register",
  passport.authenticate("local-signUp", {
    successRedirect: "/apis/profile",
    failureFlash: true,
    failureRedirect: "/",
  })
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = router;
