"use strict";
/**
*  Si el email ya existe en la base de datos, se lanza esta excepción
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailExistException = void 0;
class EmailExistException extends Error {
    constructor(message) {
        super(message);
        this.name = "EmailExistException";
    }
}
exports.EmailExistException = EmailExistException;
//# sourceMappingURL=EmailExistExeption.js.map