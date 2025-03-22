const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build inventory Item Detail View
 * ************************** */
invCont.buildByInvId = async function(req, res, next) {
    const invId = req.params.invId
    const itemData = await invModel.getInventoryItemById(invId)
    const details = await utilities.buildItemDetailView(itemData)
    let nav = await utilities.getNav()

    res.render('./inventory/item-detail-view', {
      title: `${itemData.inv_make} ${itemData.inv_model}`,
      item: itemData,
      details,
      nav
    })
}

module.exports = invCont;