const {
  Contact,
  contactAddSchema,
  updateFavoriteSchema,
} = require("./Contact");
const { handleSaveError, runValidateAtUpdate } = require("./hooks");

module.exports = {
  Contact,
  contactAddSchema,
  updateFavoriteSchema,
  handleSaveError,
  runValidateAtUpdate,
};
