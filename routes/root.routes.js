"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const root_controller_1 = require("../controllers/root.controller");
const root = (0, express_1.Router)();
root.get("/", root_controller_1.home);
root.get("/documentation", root_controller_1.documentation);
exports.default = root;
//# sourceMappingURL=root.routes.js.map