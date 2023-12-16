const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    req.body
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateById;
