"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationException = void 0;
const Exception_1 = require("./Exception");
class AuthorizationException extends Exception_1.Exception {
    constructor(message) {
        super(message);
        this.name = 'AuthorizationException';
    }
}
exports.AuthorizationException = AuthorizationException;
//# sourceMappingURL=AuthorizationException.js.map