const express = require("express");
const route = express.Router();

const { validateBody, authenticate, upload } = require("../../middelwares");
const { schemasUser } = require("../../models");
const ctrl = require("../../controllers/auth");


route.post("/register", validateBody(schemasUser.registerSchema), ctrl.register);
route.get("/verify/:verificationToken", ctrl.verifyEmail);
route.post("/verify",validateBody(schemasUser.verifySchema), ctrl.resendVerifyEmail)
route.post("/login", validateBody(schemasUser.loginSchema), ctrl.login);
route.get("/current", authenticate, ctrl.getCurrent);
route.post("/logout", authenticate, ctrl.logout);
route.patch("/:id", validateBody(schemasUser.subscriptionSchema), ctrl.updateSubscription);
route.put("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = route;