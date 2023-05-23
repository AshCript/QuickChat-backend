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
exports.createUserController = void 0;
const ValidationException_1 = require("../../utils/exceptions/ValidationException");
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserService_1 = require("../../services/UserService");
const checkErrorInstance_1 = require("../../utils/helpers/checkErrorInstance");
function createUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userService = UserService_1.UserService.getInstance();
            if (req.body.password === '')
                throw new ValidationException_1.ValidationException('Password must not be empty');
            if (req.body.password === null)
                throw new ValidationException_1.ValidationException('Password must not be null');
            if (req.body.password.length < 6 || req.body.password.length > 20) {
                throw new ValidationException_1.ValidationException('Password length must be between 6 and 20');
            }
            req.body.password = yield bcrypt_1.default.hash(req.body.password, 10);
            const createdUser = yield userService.createUser(req.body);
            const message = 'User added successfully';
            res.json({ message, data: createdUser });
        }
        catch (error) {
            (0, checkErrorInstance_1.checkErrorInstance)(res, error);
        }
    });
}
exports.createUserController = createUserController;
//# sourceMappingURL=createUserController.js.map