"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentation = exports.home = void 0;
const product_model_1 = require("../models/product.model");
const category_model_1 = require("../models/category.model");
const user_model_1 = require("../models/user.model");
const express_config_1 = require("../config/express.config");
const URL = express_config_1.expressConf.URL;
function home(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield (0, product_model_1.findAllRootModel)();
        const categories = yield (0, category_model_1.findAllRootModel)();
        const users = yield (0, user_model_1.findAllRoot)();
        res.render("home", { products, categories, users, URL });
    });
}
exports.home = home;
function documentation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.render("documentation", { URL });
    });
}
exports.documentation = documentation;
//# sourceMappingURL=root.controller.js.map