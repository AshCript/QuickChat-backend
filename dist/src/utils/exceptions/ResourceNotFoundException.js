"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFoundException = void 0;
const Exception_1 = require("./Exception");
class ResourceNotFoundException extends Exception_1.Exception {
    constructor(message) {
        super(message);
        this.name = 'ResourceNotFoundException';
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
//# sourceMappingURL=ResourceNotFoundException.js.map