const express = require("express");
const contactsController = require("../../controllers/contacts-controller");
const router = express.Router();
const {
  contactAddSchema,
  updateFavoriteSchema,
} = require("../../models/Contact");
const validateBody = require("../../decorators/validateBody");
const isValidId = require("../../middlewares/isValidId");

const addContactValidate = validateBody(contactAddSchema);
const updateFavoriteValidate = validateBody(updateFavoriteSchema);

router.get("/", contactsController.getAll);

router.get("/:contactId", isValidId, contactsController.getById);

router.post("/", addContactValidate, contactsController.add);

router.delete("/:contactId", isValidId, contactsController.deleteById);

router.put(
  "/:contactId",
  isValidId,
  addContactValidate,
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  updateFavoriteValidate,
  contactsController.updateById
);

module.exports = router;
