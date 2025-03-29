const express = require("express")
const router = new express.Router()
const utilities = require("../utilities")
const accountController = require("../controllers/accountController");

// Route to render the login page
router.get("/login", utilities.handleErrors(accountController.buildLogin));
// Route to render the registration page
router.get("/register", utilities.handleErrors(accountController.buildRegister));
// Route to handle user registration form submission
router.post("/register", utilities.handleErrors(accountController.registerAccount))

module.exports = router;