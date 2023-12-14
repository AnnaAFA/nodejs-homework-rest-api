const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const { ctrlWrapper } = require("../decorators");
const upload = require("./upload");
const resizeAvatar = require("./resizeAvatar");

module.exports = {
  resizeAvatar,
  upload,
  isValidId,
  authenticate: ctrlWrapper(authenticate),
};
