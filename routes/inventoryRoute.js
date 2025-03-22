// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

// New route for Inventory Item Details
router.get("/detail/:invId", invController.buildByInvId);

module.exports = router;