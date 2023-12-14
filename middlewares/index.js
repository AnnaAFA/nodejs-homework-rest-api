const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const { ctrlWrapper } = require("../decorators");
const upload = require("./upload");

module.exports = {
  upload,
  isValidId,
  authenticate: ctrlWrapper(authenticate),
};
