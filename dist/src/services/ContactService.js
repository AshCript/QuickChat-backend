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
exports.ContactService = void 0;
const ContactDAO_1 = require("../dao/ContactDAO");
class ContactService {
    constructor() {
        this.contactDao = new ContactDAO_1.ContactDAO();
    }
    static getInstance() {
        var _a;
        return ((_a = this.instance) !== null && _a !== void 0 ? _a : (this.instance = new ContactService()));
    }
    getAllUserContact(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactDao.getAllUserContact(idUser);
        });
    }
    getUserContactById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactDao.getUserContactById(id);
        });
    }
    createUserContact(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactDao.createUserContact(contact);
        });
    }
    updateUserContact(id, contact) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactDao.updateUserContact(id, contact);
        });
    }
    deleteUserContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactDao.deleteUserContact(id);
        });
    }
}
exports.ContactService = ContactService;
//# sourceMappingURL=ContactService.js.map