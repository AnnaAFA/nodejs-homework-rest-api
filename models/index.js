const {
  Contact,
  contactAddSchema,
  updateFavoriteSchema,
} = require("./Contact");
const { handleSaveError, runValidateAtUpdate } = require("./hooks");
const { User, userRegisterSchema, userLoginSchema } = require("./User");

module.exports = {
  Contact,
  contactAddSchema,
  updateFavoriteSchema,
  handleSaveError,
  runValidateAtUpdate,
  User,
  userRegisterSchema,
  userLoginSchema,
};
