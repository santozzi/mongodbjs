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
exports.validate = exports.update = exports.findAllRoot = exports.findAll = exports.findById = exports.deleteUser = exports.createModel = exports.emailExist = void 0;
const EmailExistExeption_1 = require("../Exceptions/EmailExistExeption");
const IdIsUndefinedException_1 = require("../Exceptions/IdIsUndefinedException");
const UserDoesNotExistExeption_1 = require("../Exceptions/UserDoesNotExistExeption");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_schema_1 = __importDefault(require("./schemas/user.schema"));
const jwt_config_1 = require("../config/jwt.config");
//TODO: hacer una funcion que devuelva true o false para que el front verifique el email a la ora de cargar los datos de create
const emailExist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExist = yield user_schema_1.default.findOne({ email });
        if (userExist) {
            throw new EmailExistExeption_1.EmailExistException("The email already exists");
        }
    }
    catch (error) {
        throw error;
    }
});
exports.emailExist = emailExist;
//mapper
const userToUserInterfaceWithoutPassword = (user) => {
    const { apellido, carrera, edad, nombre, registrationDate, email, _id, images } = user;
    const userResponse = {
        _id,
        apellido,
        carrera,
        edad,
        email,
        nombre,
        registrationDate,
        images
    };
    return userResponse;
};
//fin mapper
const createModel = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = new user_schema_1.default(user);
        const { email } = userData;
        yield (0, exports.emailExist)(email);
        // guardar el usuario
        const savedUser = yield userData.save();
        if (savedUser._id == undefined) {
            //TODO: analisas si es posible que pase
            throw new IdIsUndefinedException_1.IdIsUndefinedException("_id invalido");
        }
        return userToUserInterfaceWithoutPassword(savedUser);
    }
    catch (error) {
        throw error;
    }
});
exports.createModel = createModel;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //verifica si el usuario existe
        yield (0, exports.findById)(id);
        yield user_schema_1.default.findByIdAndDelete(id);
        return { message: "User deleted successfully" };
    }
    catch (error) {
        throw error;
    }
});
exports.deleteUser = deleteUser;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = id;
        const userExist = yield user_schema_1.default.findById(_id);
        if (!userExist) {
            throw new UserDoesNotExistExeption_1.UserDoesNotExistExeption("User not found");
        }
        return userExist;
    }
    catch (error) {
        throw error;
    }
});
exports.findById = findById;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_schema_1.default.find();
        const usersWithoutPassord = users.map((user) => {
            const userI = {
                _id: user._id,
                nombre: user.nombre,
                apellido: user.apellido,
                carrera: user.carrera,
                edad: user.edad,
                email: user.email,
                registrationDate: user.registrationDate,
                images: user.images
            };
            return userI;
        });
        /*  si esta vacio que devuelva una lista vacia. []
        if (users.length === 0) {
          throw new UserDoesNotExistExeption("There are not users");
        } */
        return usersWithoutPassord;
    }
    catch (error) {
        throw new Error("Internal error");
    }
});
exports.findAll = findAll;
const findAllRoot = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_schema_1.default.find().lean();
        const usersWithoutPassord = users.map((user) => {
            const userI = {
                _id: user._id,
                nombre: user.nombre,
                apellido: user.apellido,
                carrera: user.carrera,
                edad: user.edad,
                email: user.email,
                registrationDate: user.registrationDate,
                images: user.images
            };
            return userI;
        });
        /*  si esta vacio que devuelva una lista vacia. []
        if (users.length === 0) {
          throw new UserDoesNotExistExeption("There are not users");
        } */
        return usersWithoutPassord;
    }
    catch (error) {
        throw new Error("Internal error");
    }
});
exports.findAllRoot = findAllRoot;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, exports.findById)(id);
        const updateUser = yield user_schema_1.default.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        return userToUserInterfaceWithoutPassword(updateUser);
    }
    catch (error) {
        throw error;
    }
});
exports.update = update;
const validate = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield user_schema_1.default.findOne({ email });
        if (!userFound || userFound.password == null) {
            throw new UserDoesNotExistExeption_1.UserDoesNotExistExeption("wrong email or password");
        }
        //La contraseña que llega de body la encriptamos y la comparamos contra la guardada
        if (bcrypt_1.default.compareSync(password, userFound.password)) {
            //payload, secreto, tiempo de expiracion
            const payload = {
                userId: userFound._id,
                userEmail: userFound.email,
            };
            //firmar token
            const token = jsonwebtoken_1.default.sign(payload, jwt_config_1.jwtConfig.JWT_SECRET, {
                expiresIn: jwt_config_1.jwtConfig.JWT_EXPIRED,
            });
            return token;
        }
        else {
            throw new UserDoesNotExistExeption_1.UserDoesNotExistExeption("wrong email or password");
        }
    }
    catch (error) {
        throw error;
    }
});
exports.validate = validate;
//# sourceMappingURL=user.model.js.map