"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressConf = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT_EXPRESS, URL } = process.env;
if (!PORT_EXPRESS)
    throw new Error("PORT fail in env");
if (!URL)
    throw new Error("URL fail in env");
exports.expressConf = {
    PORT_EXPRESS,
    URL
};
//# sourceMappingURL=express.config.js.map