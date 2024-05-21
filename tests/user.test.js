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
const mongodb_1 = require("mongodb");
const route = '/users/';
const usuario = {
    apellido: "Alvarez",
    nombre: "Julian",
    carrera: "ingenieria",
    edad: 24,
    email: "julian@campeones2231099.com",
    password: "123454aA"
};
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, mongo_db_1.mongooseConnection)(); }));
describe('GET /users', () => {
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(route).send();
        expect(response.statusCode).toBe(200);
    }));
    test('should respond with an array', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(route).send();
        expect(response.body).toBeInstanceOf(Array);
    }));
});
describe('POST /users', () => {
    let id;
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post(route).send(usuario);
        const nuevoUsuario = JSON.parse(response.text);
        id = new mongodb_1.ObjectId(nuevoUsuario._id);
        expect(response.statusCode).toBe(200);
    }));
    test('should response ok', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(yield (0, supertest_1.default)(app_1.default).delete(route + id));
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, mongo_db_1.mongooseDisconect)(); }));
//# sourceMappingURL=user.test.js.map