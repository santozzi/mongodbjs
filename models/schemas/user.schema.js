"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = require("../../utils/validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const carreraEnum = [
    "ingenieria",
    "medicina",
    "derecho",
    "matematicas",
    "arte",
];
const userSchema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        required: true,
        maxlength: 16,
        minlength: 2,
        trim: true,
        lowercase: true,
    },
    apellido: {
        type: String,
        required: true,
        maxlength: 16,
        minlength: 2,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 8,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
        unique: true,
    },
    carrera: {
        type: String,
        required: true,
        enum: carreraEnum,
        validate: {
            validator: function (v) {
                return carreraEnum.includes(v);
            },
            message: (props) => `${props.value} no es una carrera valida`,
        },
    },
    edad: {
        type: Number,
        required: true,
        min: 17,
        max: 120,
    },
    registrationDate: {
        type: Date,
        default: Date.now(),
    },
    images: (Array),
    password: {
        type: String,
        validate: {
            validator: function (value) {
                return (0, validator_1.isGoodPassword)(value);
            },
            message: "La contraseña debe tener entre 6 y 12 caracteres, un digito numerico, una letra minuscula, una letra mayuscula",
        },
    },
});
userSchema.pre("save", function (next) {
    if (this.password != null)
        this.password = bcrypt_1.default.hashSync(this.password, 10);
    next();
});
exports.default = mongoose_1.default.model("user", userSchema);
//# sourceMappingURL=user.schema.js.map