const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home.ejs", { title: "Home Page" });
});

router.get("/login", (req, res, next) => {
  res.render("login.ejs", { title: "login Page" });
});

router.get("/zineb", (req, res, next) => {
  res.render("affichageReserv.ejs", { title: "display Results" });
});

module.exports = router;
