const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const { ctrlWrapper } = require("../decorators");

module.exports = { isValidId, authenticate: ctrlWrapper(authenticate) };
