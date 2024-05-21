"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGoodPassword = void 0;
const isGoodPassword = (value) => {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    return regex.test(value);
};
exports.isGoodPassword = isGoodPassword;
//# sourceMappingURL=validator.js.map