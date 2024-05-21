"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    images: (Array),
});
exports.default = mongoose_1.default.model("category", categorySchema);
//# sourceMappingURL=category.schema.js.map