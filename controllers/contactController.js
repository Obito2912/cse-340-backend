const utilities = require("../utilities");
const contactModel = require("../models/contact-model");

async function buildContactForm(req, res) {
  const nav = await utilities.getNav();
  res.render("contact/form", {
    title: "Contact Us",
    nav,
    errors: null,
    name: "",
    email: "",
    message: "",
  });
}

async function handleContactSubmission(req, res) {
  const nav = await utilities.getNav();
  const { name, email, message } = req.body;

  const result = await contactModel.saveMessage(name, email, message);

  if (result && result.contact_id) {
    req.flash("notice", "Message sent successfully!");
    res.redirect("/");
  } else {
    req.flash("notice", "Message failed to send.");
    res.status(500).render("contact/form", {
      title: "Contact Us",
      nav,
      errors: null,
      name,
      email,
      message,
    });
  }
}

module.exports = { buildContactForm, handleContactSubmission };
