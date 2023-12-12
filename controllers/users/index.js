const { ctrlWrapper } = require("../../decorators");
const register = require("./registerUser");
const login = require("./loginUser");
const getCurrent = require("./getCurrentUser");
const logout = require("./logoutUser");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};
