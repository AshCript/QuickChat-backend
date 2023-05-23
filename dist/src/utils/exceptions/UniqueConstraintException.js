"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueConstraintException = void 0;
const Exception_1 = require("./Exception");
class UniqueConstraintException extends Exception_1.Exception {
    constructor(message) {
        super(message);
        this.name = 'UniqueConstraintException';
    }
}
exports.UniqueConstraintException = UniqueConstraintException;
//# sourceMappingURL=UniqueConstraintException.js.map