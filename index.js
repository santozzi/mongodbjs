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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const express_config_1 = require("./config/express.config");
const mongo_db_1 = require("./db/mongo.db");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongo_db_1.mongooseConnection)();
            //userSchema.createCollection();
            app_1.default.listen(express_config_1.expressConf.PORT_EXPRESS || 3001, () => {
                console.log(`Server is running on http://localhost:${express_config_1.expressConf.PORT_EXPRESS}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
//# sourceMappingURL=index.js.map