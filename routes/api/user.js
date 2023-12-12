const express = require("express");
const userRouter = express.Router();
const userController = require("../../controllers/users");
const { validateBody } = require("../../decorators");
const { userRegisterSchema, userLoginSchema } = require("../../models");
const { authenticate } = require("../../middlewares");

userRouter.post(
  "/register",
  validateBody(userRegisterSchema),
  userController.register
);
userRouter.post("/login", validateBody(userLoginSchema), userController.login);

userRouter.get("/current", authenticate, userController.getCurrent);

userRouter.post("/logout", authenticate, userController.logout);

module.exports = userRouter;
