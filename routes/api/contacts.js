const express = require("express");
const contactsController = require("../../controllers/contacts-controller");
const addContactValidate = require("../../middleware/validation/contact-validation");
const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getById);

router.post("/", addContactValidate, contactsController.add);

router.delete("/:contactId", contactsController.deleteById);

router.put("/:contactId", addContactValidate, contactsController.updateById);

module.exports = router;
