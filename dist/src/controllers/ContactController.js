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
exports.ContactController = void 0;
const createUserContactController_1 = require("./contact/createUserContactController");
const deleteUserContactController_1 = require("./contact/deleteUserContactController");
const getAllUserContactController_1 = require("./contact/getAllUserContactController");
const getUserContactByIdController_1 = require("./contact/getUserContactByIdController");
const updateUserContactController_1 = require("./contact/updateUserContactController");
class ContactController {
    getAllUserContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getAllUserContactController_1.getAllUserContactController)(req, res);
        });
    }
    getUserContactById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getUserContactByIdController_1.getUserContactByIdController)(req, res);
        });
    }
    createUserContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, createUserContactController_1.createUserContactController)(req, res);
        });
    }
    updateUserContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updateUserContactController_1.updateUserContactController)(req, res);
        });
    }
    deleteUserContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deleteUserContactController_1.deleteUserContactController)(req, res);
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=ContactController.js.map