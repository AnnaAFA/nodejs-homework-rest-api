const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const HttpError = require("../helpers");
const { User } = require("../models");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  if (!authorization) {
    throw HttpError(401, "Not authorized");
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw HttpError(401, "Not authorized");
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      throw HttpError(401, "Not authorized");
    }

    req.user = user;

    next();
  } catch (error) {
    throw HttpError(401, "Not authorized");
  }
};

module.exports = authenticate;