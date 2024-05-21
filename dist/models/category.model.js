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
exports.updateModel = exports.findAllRootModel = exports.findAllModel = exports.findByIdModel = exports.deleteModel = exports.createModel = void 0;
const category_schema_1 = __importDefault(require("../models/schemas/category.schema"));
const createModel = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryData = new category_schema_1.default(payload);
        const { name } = categoryData;
        const savedCategory = yield categoryData.save();
        return savedCategory;
    }
    catch (error) {
        throw error;
    }
});
exports.createModel = createModel;
const deleteModel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.findByIdModel)(id);
        yield category_schema_1.default.findByIdAndDelete(id);
        return { message: "Category deleted successfully" };
    }
    catch (error) {
        throw error;
    }
});
exports.deleteModel = deleteModel;
const findByIdModel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = id;
        const userExist = yield category_schema_1.default.findById(_id);
        if (!userExist) {
            throw new Error("category not found");
        }
        return userExist;
    }
    catch (error) {
        throw error;
    }
});
exports.findByIdModel = findByIdModel;
const findAllModel = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_schema_1.default.find();
        return categories;
    }
    catch (error) {
        throw error;
    }
});
exports.findAllModel = findAllModel;
const findAllRootModel = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_schema_1.default.find().lean();
        if (categories.length > 4) {
            return categories.slice(0, 4);
        }
        return categories;
    }
    catch (error) {
        throw error;
    }
});
exports.findAllRootModel = findAllRootModel;
const updateModel = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.findByIdModel)(id);
        const updateCategory = yield category_schema_1.default.findByIdAndUpdate({ _id: id }, payload, {
            new: true
        });
        return updateCategory;
    }
    catch (error) {
        throw error;
    }
});
exports.updateModel = updateModel;
//# sourceMappingURL=category.model.js.map