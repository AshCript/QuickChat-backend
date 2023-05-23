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
exports.UserService = void 0;
const UserDAO_1 = require("../dao/UserDAO");
class UserService {
    constructor() {
        this.userDao = new UserDAO_1.UserDAO();
    }
    static getInstance() {
        var _a;
        return ((_a = this.instance) !== null && _a !== void 0 ? _a : (this.instance = new UserService()));
    }
    getUserByLogin(login) {
        return this.userDao.getUserByLogin(login);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDao.getAllUsers();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDao.getUserById(id);
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDao.createUser(user);
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDao.updateUser(id, user);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userDao.deleteUser(id);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map