"use strict";
/**
*  Sie el email ya existe en la base de datos, se lanza esta excepción
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDoesNotExistExeption = void 0;
class UserDoesNotExistExeption extends Error {
    constructor(message) {
        super(message);
        this.name = "UserDoesNotExistExeption";
    }
}
exports.UserDoesNotExistExeption = UserDoesNotExistExeption;
//# sourceMappingURL=UserDoesNotExistExeption.js.map