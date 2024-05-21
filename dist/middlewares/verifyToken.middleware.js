"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenMiddleware = void 0;
const verifyToken_1 = require("../utils/verifyToken");
const jwt_config_1 = require("../config/jwt.config");
const verifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.header('authorization');
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: "Token de acceso no proporcionado" });
    }
    const token = authHeader;
    try {
        //si no verifica salta una excepcion
        const decoded = (0, verifyToken_1.verifyToken)(token, jwt_config_1.jwtConfig.JWT_SECRET);
        //guardar en el usuario que se verificó ok
        req.user = decoded;
        next();
    }
    catch (error) {
        if (error instanceof Error)
            res.status(401).json({ message: error.message });
    }
};
exports.verifyTokenMiddleware = verifyTokenMiddleware;
//# sourceMappingURL=verifyToken.middleware.js.map