"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByLoginController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ResourceNotFoundException_1 = require("../../utils/exceptions/ResourceNotFoundException");
const AuthenticationException_1 = require("../../utils/exceptions/AuthenticationException");
const checkErrorInstance_1 = require("../../utils/helpers/checkErrorInstance");
const UserService_1 = require("../../services/UserService");
function getUserByLoginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userService = UserService_1.UserService.getInstance();
            if (!req.body.login || !req.body.password) {
                throw new ResourceNotFoundException_1.ResourceNotFoundException('The property login and password must be provided!');
            }
            const user = yield userService.getUserByLogin(req.body.login);
            if (!user)
                throw new ResourceNotFoundException_1.ResourceNotFoundException("User doesn't exist");
            const isPasswordValid = yield bcrypt_1.default.compare(req.body.password, user.password);
            if (!isPasswordValid)
                throw new AuthenticationException_1.AuthenticationException('Password invalid');
            const token = jsonwebtoken_1.default.sign({ userId: user.email }, 'MEETME_KEY', {
                expiresIn: '24h',
            });
            const message = 'User connected successfully!';
            res.json({ message, data: user, token });
        }
        catch (error) {
            (0, checkErrorInstance_1.checkErrorInstance)(res, error);
        }
    });
}
exports.getUserByLoginController = getUserByLoginController;
//# sourceMappingURL=getUserByLoginController.js.map