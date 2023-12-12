const express = require("express");
const contactsController = require("../../controllers/contacts");
const contactRouter = express.Router();
const { contactAddSchema, updateFavoriteSchema } = require("../../models");
const { validateBody } = require("../../decorators");
const { isValidId, authenticate } = require("../../middlewares");

const addContactValidate = validateBody(contactAddSchema);
const updateFavoriteValidate = validateBody(updateFavoriteSchema);

contactRouter.use(authenticate);

contactRouter.get("/", contactsController.getAll);

contactRouter.get("/:contactId", isValidId, contactsController.getById);

contactRouter.post("/", addContactValidate, contactsController.add);

contactRouter.delete("/:contactId", isValidId, contactsController.deleteById);

contactRouter.put(
  "/:contactId",
  isValidId,
  addContactValidate,
  contactsController.updateById
);

contactRouter.patch(
  "/:contactId/favorite",
  isValidId,
  updateFavoriteValidate,
  contactsController.updateById
);

module.exports = contactRouter;
