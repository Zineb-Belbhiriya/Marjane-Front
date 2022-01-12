const express = require("express");
const router = express.Router();

// const connexion = require("../database/db");

router.get("/admin", (req, res, next) => {
  res.render("dashbord.ejs", { title: "Dashbord Admin" });
});

router.get("/admin/login", (req, res, next) => {
  res.render("loginAdmin.ejs", { title: "Login Admin" });
});

router.get("/admin/dashbord/GestionMarjane", (req, res, next) => {
  res.render("marjane.ejs", { title: "Gestion Marjane" });
});

module.exports = router;
