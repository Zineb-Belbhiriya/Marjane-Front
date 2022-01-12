const express = require("express");
const router = express.Router();

// const connexion = require("../database/db");

router.get("/admin", (req, res, next) => {
  res.render("dashbord.ejs", { title: "Dashbord Admin" });
});

router.get("/admin/login", (req, res, next) => {
  res.render("loginAdmin.ejs", { title: "Login Admin" });
});

module.exports = router;
