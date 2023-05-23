"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const Exception_1 = require("./Exception");
class ValidationException extends Exception_1.Exception {
    constructor(message) {
        super(message);
        this.name = 'ValidationException';
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=ValidationException.js.map