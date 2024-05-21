"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"];
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        minLength: 3,
        unique: true,
        lowercase: true,
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price field is required"],
        min: [0, "Price field has to be a number"],
        //Al consultar precio multiplica el valor guardado en price
        get: function (value) {
            return value * 1.21;
        },
        //Al ingresar precio guarda el valor de price multiplicado
        // set: function(value){
        //     return value * 1.21
        // }
    },
    images: (Array),
    description: String,
    quantity: Number,
    status: {
        type: String,
        validate: {
            validator: function (v) {
                return statusEnum.includes(v);
            },
            message: (props) => `${props.value} no es un estado valido`,
        },
    },
    category: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "category" },
    destacado: Boolean,
});
productSchema.set("toJSON", { getters: true });
exports.default = mongoose_1.default.model("product", productSchema);
//# sourceMappingURL=product.schema.js.map