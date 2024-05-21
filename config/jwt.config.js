"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { JWT_EXPIRED, JWT_SECRET } = process.env;
if (!JWT_EXPIRED)
    throw new Error("JWT_EXPIRED fail in env");
if (!JWT_SECRET)
    throw new Error("JWT_SECRETE fail in env");
exports.jwtConfig = {
    JWT_EXPIRED,
    JWT_SECRET
};
//# sourceMappingURL=jwt.config.js.map