// Needed Resources
const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
const utilities = require("../utilities");
const validate = require("../utilities/account-validation");

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

// New route for Inventory Item Details
router.get("/detail/:invId", invController.buildByInvId);

// New route to build Management view
router.get("/", utilities.handleErrors(invController.buildManagementView));

// Show the form to add a classification
router.get(
  "/add-classification",
  utilities.handleErrors(invController.buildAddClassification)
);

// Handle form submission
router.post(
  "/add-classification",
  validate.classificationRules(),
  validate.checkClassificationData,
  utilities.handleErrors(invController.addClassification)
);

// Show the form
router.get(
  "/add-inventory",
  utilities.handleErrors(invController.buildAddInventory)
);

// Handle the form submission
router.post(
  "/add-inventory",
  validate.inventoryRules(),
  validate.checkInventoryData,
  utilities.handleErrors(invController.addInventory)
);

router.get(
  "/getInventory/:classification_id",
  utilities.handleErrors(invController.getInventoryJSON)
);

// GET route to present the inventory edit view for a specific item
router.get("/edit/:invId", utilities.handleErrors(invController.buildEditInventoryView));

// POST route to update an existing inventory item.
// This route uses newInventoryRules() and checkUpdateData middleware so that 
// the update data meets the same validation requirements as the add process,
// and in case of errors, redirects back to the edit view.
router.post(
  "/edit-inventory",
  validate.newInventoryRules(),
  validate.checkUpdateData,
  utilities.handleErrors(invController.updateInventory)
);

module.exports = router;
