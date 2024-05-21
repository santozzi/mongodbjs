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
exports.updateModel = exports.findAllModel = exports.findAllRootModel = exports.findByIdModel = exports.deleteModel = exports.createModel = exports.findByName = void 0;
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
const findByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_schema_1.default.findOne({ name });
        if (product) {
            throw new Error("Product exist");
        }
    }
    catch (error) {
        throw error;
    }
});
exports.findByName = findByName;
const createModel = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.findByName)(payload.name);
        const productData = new product_schema_1.default(payload);
        const { name } = productData;
        const savedProduct = yield productData.save();
        return savedProduct;
    }
    catch (error) {
        throw error;
    }
});
exports.createModel = createModel;
const deleteModel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.findByIdModel)(id);
        yield product_schema_1.default.findByIdAndDelete(id);
        return { message: "Product deleted successfully" };
    }
    catch (error) {
        throw error;
    }
});
exports.deleteModel = deleteModel;
const findByIdModel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = id;
        const productExist = yield product_schema_1.default.findById(_id);
        if (!productExist) {
            throw new Error("Product not found");
        }
        return productExist;
    }
    catch (error) {
        throw error;
    }
});
exports.findByIdModel = findByIdModel;
const findAllRootModel = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_schema_1.default.find().populate("category").lean();
        //TODO:mandar solo 4 articulos
        if (products.length > 4) {
            return products.slice(0, 4);
        }
        return products;
    }
    catch (error) {
        throw error;
    }
});
exports.findAllRootModel = findAllRootModel;
const findAllModel = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_schema_1.default.find().populate("category");
        return products;
    }
    catch (error) {
        throw error;
    }
});
exports.findAllModel = findAllModel;
const updateModel = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.findByIdModel)(id);
        const updateProduct = yield product_schema_1.default.findByIdAndUpdate({ _id: id }, payload, {
            new: true
        });
        return updateProduct;
    }
    catch (error) {
        throw error;
    }
    //TODO: buscar por nombre, findByName
});
exports.updateModel = updateModel;
//# sourceMappingURL=product.model.js.map