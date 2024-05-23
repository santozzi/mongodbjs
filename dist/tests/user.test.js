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
const mongo_db_1 = require("../db/mongo.db");
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const route = '/api/users/';
const usuario = {
    nombre: "Sergio",
    apellido: "Antozzi",
    email: "santozzi@gmailona.com",
    carrera: "ingenieria",
    edad: 40,
    password: "12345Aa",
    images: [
        "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
    ]
};
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, mongo_db_1.mongooseConnection)(); }));
let token;
describe('POST /users', () => {
    test('login', () => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield (0, supertest_1.default)(app_1.default).post(route + "login").send({ email: "santozzi@gmail.com", password: "12345Aa" });
        const token = (yield JSON.parse(response.text)).token;
        console.log(token);
        expect(response.statusCode).toBe(200);
        let id = "";
        response = yield (0, supertest_1.default)(app_1.default).post(route + "create").send(usuario);
        const nuevoUsuario = JSON.parse(response.text);
        if (nuevoUsuario._id)
            id = nuevoUsuario._id;
        expect(response.statusCode).toBe(200);
        const authHeaders = { Authorization: token };
        response = yield (0, supertest_1.default)(app_1.default).delete(route + "delete/" + id).set(authHeaders).send();
        expect(response.statusCode).toBe(200);
    }));
});
describe('GET /users', () => {
    const authHeaders = { Authorization: token };
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(route).set(authHeaders).send();
        expect(response.statusCode).toBe(200);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, mongo_db_1.mongooseDisconect)(); }));
//# sourceMappingURL=user.test.js.map