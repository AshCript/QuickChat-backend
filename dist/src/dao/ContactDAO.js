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
exports.ContactDAO = void 0;
const sequelize_1 = require("../../config/sequelize");
class ContactDAO {
    constructor() {
        this.em = sequelize_1.szModels.Contact;
    }
    getAllUserContact(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.em.findAll({ where: { idUser } });
        });
    }
    getUserContactById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.em.findByPk(id);
        });
    }
    createUserContact(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.em.create(contact);
        });
    }
    updateUserContact(id, contact) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.em.update(contact, { where: { id } });
            return yield this.getUserContactById(id);
        });
    }
    deleteUserContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.em.destroy({ where: { id } });
        });
    }
}
exports.ContactDAO = ContactDAO;
//# sourceMappingURL=ContactDAO.js.map