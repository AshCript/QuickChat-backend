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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdController = void 0;
const ResourceNotFoundException_1 = require("../../utils/exceptions/ResourceNotFoundException");
const checkErrorInstance_1 = require("../../utils/helpers/checkErrorInstance");
const UserService_1 = require("../../services/UserService");
function getUserByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userService = UserService_1.UserService.getInstance();
            const id = Number(req.params.id);
            const user = yield userService.getUserById(id);
            if (!user)
                throw new ResourceNotFoundException_1.ResourceNotFoundException(`User with id ${id} doesn't exist`);
            const message = `User with id ${id} loaded successfully`;
            res.json({ message, data: user });
        }
        catch (error) {
            (0, checkErrorInstance_1.checkErrorInstance)(res, error);
        }
    });
}
exports.getUserByIdController = getUserByIdController;
//# sourceMappingURL=getUserByIdController.js.map