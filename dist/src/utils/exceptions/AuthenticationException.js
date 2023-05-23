"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationException = void 0;
const Exception_1 = require("./Exception");
class AuthenticationException extends Exception_1.Exception {
    constructor(message) {
        super(message);
        this.name = 'AuthenticationException';
    }
}
exports.AuthenticationException = AuthenticationException;
//# sourceMappingURL=AuthenticationException.js.map