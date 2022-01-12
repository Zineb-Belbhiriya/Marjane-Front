const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home.ejs", { title: "Home Page" });
});

router.get("/login", (req, res, next) => {
  res.render("login.ejs", { title: "login Page" });
});



module.exports = router;
