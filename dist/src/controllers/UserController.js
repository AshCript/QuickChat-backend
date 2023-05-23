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
exports.UserController = void 0;
const createUserController_1 = require("./user/createUserController");
const deleteUserController_1 = require("./user/deleteUserController");
const getAllUsersController_1 = require("./user/getAllUsersController");
const getUserByIdController_1 = require("./user/getUserByIdController");
const getUserByLoginController_1 = require("./user/getUserByLoginController");
const updateUserController_1 = require("./user/updateUserController");
class UserController {
    getUserByLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getUserByLoginController_1.getUserByLoginController)(req, res);
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getAllUsersController_1.getAllUsersController)(req, res);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getUserByIdController_1.getUserByIdController)(req, res);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, createUserController_1.createUserController)(req, res);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updateUserController_1.updateUserController)(req, res);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deleteUserController_1.deleteUserController)(req, res);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map