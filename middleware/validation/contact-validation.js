const contactAddSchema = require("../../schemas/contact-schemas");
const validateBody = require("../../decorators/validateBody");

const addContactValidate = validateBody(contactAddSchema);

module.exports = addContactValidate;
