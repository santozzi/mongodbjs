"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseDisconect = exports.mongooseConnection = void 0;
const db_config_1 = require("../config/db.config");
const mongoose_1 = __importDefault(require("mongoose"));
const config = (0, db_config_1.configDB)();
const mongooseConnection = () => mongoose_1.default
    .connect(config.MONGOURI)
    .then(() => {
    console.log("Database connected");
});
exports.mongooseConnection = mongooseConnection;
const mongooseDisconect = () => mongoose_1.default.disconnect().then(() => console.log("Database disconected"));
exports.mongooseDisconect = mongooseDisconect;
//# sourceMappingURL=mongo.db.js.map