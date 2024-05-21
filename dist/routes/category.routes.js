"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const categoryRoute = (0, express_1.Router)();
categoryRoute.post("/create", verifyToken_middleware_1.verifyTokenMiddleware, category_controller_1.create);
categoryRoute.get("/", category_controller_1.findAll);
categoryRoute.get("/:id", category_controller_1.findById);
categoryRoute.delete("/delete/:id", verifyToken_middleware_1.verifyTokenMiddleware, category_controller_1.deleteCategory);
categoryRoute.put("/update/:id", verifyToken_middleware_1.verifyTokenMiddleware, category_controller_1.update);
exports.default = categoryRoute;
//# sourceMappingURL=category.routes.js.map