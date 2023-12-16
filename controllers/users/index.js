const { ctrlWrapper } = require("../../decorators");
const register = require("./registerUser");
const login = require("./loginUser");
const getCurrent = require("./getCurrentUser");
const logout = require("./logoutUser");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAvatar: ctrlWrapper(updateAvatar),
  verify: ctrlWrapper(verify),
  resendVerify: ctrlWrapper(resendVerify),
};
