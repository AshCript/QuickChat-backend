"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayError = void 0;
function displayError(res, error, status = 500) {
    const message = error.message !== '' && error.message !== null
        ? error.message
        : 'Server Error!';
    res.status(status).json({ message, data: error });
}
exports.displayError = displayError;
//# sourceMappingURL=displayError.js.map