"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function configDB() {
    const { MONGOURI, PORT } = process.env;
    if (!MONGOURI)
        throw new Error("MONGOURI fail in env");
    const config = {
        MONGOURI
    };
    return config;
}
exports.configDB = configDB;
//# sourceMappingURL=db.config.js.map