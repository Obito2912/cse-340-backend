const express = require("express");
const router = new express.Router();
const contactController = require("../controllers/contactController");
const utilities = require("../utilities");
const { body, validationResult } = require("express-validator");

router.get(
  "/",
  utilities.handleErrors(contactController.buildContactForm)
);

router.post(
  "/",
  body("name").trim().notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Valid email required."),
  body("message").trim().notEmpty().withMessage("Message cannot be empty."),
  async (req, res, next) => {
    const errors = validationResult(req);
    const nav = await utilities.getNav();
    const { name, email, message } = req.body;

    if (!errors.isEmpty()) {
      return res.render("contact/form", {
        title: "Contact Us",
        nav,
        errors: errors.array(),
        name,
        email,
        message,
        notice: null,
      });
    }
    next();
  },
  utilities.handleErrors(contactController.handleContactSubmission)
);

module.exports = router;
