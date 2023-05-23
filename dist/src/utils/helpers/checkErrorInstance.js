"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkErrorInstance = void 0;
const sequelize_1 = require("sequelize");
const displayError_1 = require("./displayError");
const ResourceNotFoundException_1 = require("../exceptions/ResourceNotFoundException");
const ValidationException_1 = require("../exceptions/ValidationException");
const UniqueConstraintException_1 = require("../exceptions/UniqueConstraintException");
const AuthenticationException_1 = require("../exceptions/AuthenticationException");
const AuthorizationException_1 = require("../exceptions/AuthorizationException");
const checkErrorInstance = (res, error) => {
    try {
        if (error instanceof sequelize_1.UniqueConstraintError)
            throw new UniqueConstraintException_1.UniqueConstraintException(error.message);
        if (error instanceof sequelize_1.ValidationError)
            throw new ValidationException_1.ValidationException(error.errors[0].message);
        if (error instanceof ResourceNotFoundException_1.ResourceNotFoundException)
            return (0, displayError_1.displayError)(res, error, 404);
        if (error instanceof AuthenticationException_1.AuthenticationException)
            return (0, displayError_1.displayError)(res, error, 401);
        if (error instanceof AuthorizationException_1.AuthorizationException)
            return (0, displayError_1.displayError)(res, error, 403);
        if (error instanceof ValidationException_1.ValidationException ||
            error instanceof UniqueConstraintException_1.UniqueConstraintException)
            return (0, displayError_1.displayError)(res, error, 400);
        return (0, displayError_1.displayError)(res, error);
    }
    catch (e) {
        if (e instanceof ValidationException_1.ValidationException ||
            e instanceof UniqueConstraintException_1.UniqueConstraintException)
            return (0, displayError_1.displayError)(res, e, 400);
    }
};
exports.checkErrorInstance = checkErrorInstance;
//# sourceMappingURL=checkErrorInstance.js.map