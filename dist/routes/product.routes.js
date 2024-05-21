"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const product_controller_1 = require("../controllers/product.controller");
const productRoute = (0, express_1.Router)();
//endpoints
productRoute.post("/create", verifyToken_middleware_1.verifyTokenMiddleware, product_controller_1.create);
productRoute.get("/", verifyToken_middleware_1.verifyTokenMiddleware, product_controller_1.findAll);
//por params le paso name
productRoute.get("/:id", verifyToken_middleware_1.verifyTokenMiddleware, product_controller_1.findById);
productRoute.delete("/delete/:id", verifyToken_middleware_1.verifyTokenMiddleware, product_controller_1.deleteProduct);
productRoute.put("/update/:id", verifyToken_middleware_1.verifyTokenMiddleware, product_controller_1.update);
exports.default = productRoute;
//# sourceMappingURL=product.routes.js.map