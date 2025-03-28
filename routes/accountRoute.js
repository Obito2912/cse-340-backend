const express = require("express")
const router = new express.Router()
const utilities = require("../utilities")
const accountController = require("../controllers/accountController");

// Route to render the login page
router.get("/login", accountController.buildLogin);

module.exports = router;