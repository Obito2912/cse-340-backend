const regValidate = require('../utilities/account-validation')
const express = require("express")
const router = new express.Router()
const utilities = require("../utilities")
const accountController = require("../controllers/accountController");

// Route to render the login page
router.get("/login", utilities.handleErrors(accountController.buildLogin));
// Route to render the registration page
router.get("/register", utilities.handleErrors(accountController.buildRegister));
// Process the registration data
router.post(
    "/register",
    regValidate.registrationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
  )

// Process the login attempt
router.post(
    "/login",
    regValidate.loginRules(),
    regValidate.checkLoginData,
    utilities.handleErrors(async (req, res) => {
    // Your asynchronous login logic here
    res.status(200).send('login process')
  })
)

module.exports = router;