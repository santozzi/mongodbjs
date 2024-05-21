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
exports.update = exports.findAll = exports.findById = exports.deleteProduct = exports.create = void 0;
const product_model_1 = require("../models/product.model");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //TODO: validar el req con un middleware
        const { _id, name, category, description, price, quantity, images } = req.body;
        const product = {
            _id,
            name,
            category,
            description,
            price,
            quantity,
            images
        };
        const productResponse = yield (0, product_model_1.createModel)(product);
        // mostrar informacion del usuario guardado
        res.status(200).json(productResponse);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.create = create;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        yield (0, product_model_1.deleteModel)(_id);
        res.status(201).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.deleteProduct = deleteProduct;
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield (0, product_model_1.findByIdModel)(id);
        res.status(200).json(product);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.findById = findById;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_model_1.findAllModel)();
        res.status(200).json(products);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.findAll = findAll;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updateProduct = yield (0, product_model_1.updateModel)(id, req.body);
        res.status(201).json(updateProduct);
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name == "UserDoesNotExistExeption")
                res.status(500).json({ error: error.message });
        }
    }
});
exports.update = update;
//# sourceMappingURL=product.controller.js.map