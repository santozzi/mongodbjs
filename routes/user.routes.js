"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const userRoute = (0, express_1.Router)();
userRoute.get("/", verifyToken_middleware_1.verifyTokenMiddleware, user_controller_1.findAll);
userRoute.get("/:id", verifyToken_middleware_1.verifyTokenMiddleware, user_controller_1.findOne);
userRoute.post("/create", user_controller_1.create);
userRoute.post("/login", user_controller_1.validate);
userRoute.delete("/delete/:id", verifyToken_middleware_1.verifyTokenMiddleware, user_controller_1.deleteUsr);
userRoute.put("/update/:id", verifyToken_middleware_1.verifyTokenMiddleware, user_controller_1.update);
exports.default = userRoute;
//# sourceMappingURL=user.routes.js.map