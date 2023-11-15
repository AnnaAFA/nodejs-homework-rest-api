const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, "Missing required name field"));
    }
    next();
  };
  return func;
};
module.exports = validateBody;