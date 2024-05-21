"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(token, secret) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return decoded;
    }
    catch (error) {
        //TODO: hacer excepcion para invalid token con NotAuthorized Exception
        throw error;
    }
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map