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
exports.validate = exports.update = exports.findOne = exports.deleteUsr = exports.findAll = exports.create = void 0;
const user_model_1 = require("../models/user.model");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //TODO: validar el req con un middleware
        const { apellido, carrera, edad, nombre, password, email, images } = req.body;
        const user = {
            apellido,
            carrera,
            edad,
            nombre,
            password,
            email,
            images
        };
        const userResponse = yield (0, user_model_1.createModel)(user);
        // mostrar informacion del usuario guardado
        res.status(200).json(userResponse);
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name == "EmailExistException") {
                res.status(409).json({ message: error.message });
            }
            else if (error.name == "IdIsUndefinedException") {
                res.status(404).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: error.message });
            }
        }
    }
});
exports.create = create;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_model_1.findAll)();
        console.log("log desde findAll: ", req.user);
        res.status(200).json(users);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.findAll = findAll;
const deleteUsr = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        yield (0, user_model_1.deleteUser)(_id);
        res.status(201).json({ message: "User deleted successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name == "UserDoesNotExistExeption")
                res.status(404).json({ error: error.message });
            else
                res.status(500).json({ error: "Internal error" });
        }
    }
});
exports.deleteUsr = deleteUsr;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        const users = yield (0, user_model_1.findById)(_id);
        res.status(200).json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name == "UserDoesNotExistExeption") {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: error.message });
            }
        }
    }
});
exports.findOne = findOne;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        //actualizamos datos de usuario
        const updateUser = yield (0, user_model_1.update)(id, req.body);
        res.status(201).json(updateUser);
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name == "UserDoesNotExistExeption")
                res.status(404).json({ message: error.message });
            else
                res.status(500).json({ error: error.message });
        }
    }
});
exports.update = update;
const validate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const token = yield (0, user_model_1.validate)(email, password);
        res.status(200).json({ token });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name == "UserDoesNotExistExeption") {
                res.status(400).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: error.message });
            }
        }
    }
});
exports.validate = validate;
//# sourceMappingURL=user.controller.js.map