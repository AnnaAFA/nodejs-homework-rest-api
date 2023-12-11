const { ctrlWrapper } = require("../../decorators");
const getAll = require("./getAllContacts");
const getById = require("./getByIdContact");
const add = require("./addContact");
const updateById = require("./updateByIdContact");
const deleteById = require("./deleteByIdContact");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
