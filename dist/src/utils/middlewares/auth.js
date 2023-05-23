"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogin = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthorizationException_1 = require("../exceptions/AuthorizationException");
const checkErrorInstance_1 = require("../helpers/checkErrorInstance");
const auth = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            throw new AuthorizationException_1.AuthorizationException('No suitable authentication token provided. Add it inside the header');
        }
        else {
            const token = authorizationHeader.split(' ')[1];
            jsonwebtoken_1.default.verify(token, 'MEETME_KEY', (error, decodedToken) => {
                if (error) {
                    throw new AuthorizationException_1.AuthorizationException('Resource Access denied.');
                }
                const userId = decodedToken.userId;
                if (req.body.email && req.body.email !== userId) {
                    throw new AuthorizationException_1.AuthorizationException('Email invalid!');
                }
                else {
                    next();
                }
            });
        }
    }
    catch (error) {
        (0, checkErrorInstance_1.checkErrorInstance)(res, error);
    }
};
exports.auth = auth;
const getLogin = (req) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token) {
        const decodedToken = jsonwebtoken_1.default.decode(token);
        return decodedToken.userId;
    }
};
exports.getLogin = getLogin;
//# sourceMappingURL=auth.js.map