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
exports.MessageDAO = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../config/sequelize");
const UserDAO_1 = require("./UserDAO");
class MessageDAO {
    constructor() {
        this.em = sequelize_2.szModels.Message;
        this.userDao = new UserDAO_1.UserDAO();
    }
    getAllUserMessages(idUserOne, idUserTwo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.em.findAll({
                where: {
                    [sequelize_1.Op.or]: [
                        { idSender: idUserOne, idReceiver: idUserTwo },
                        { idSender: idUserTwo, idReceiver: idUserOne },
                    ],
                },
                order: [['createdAt', 'ASC']],
            });
        });
    }
    getLastUserMessages(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMessages = yield this.em.findAll({
                where: {
                    [sequelize_1.Op.or]: [{ idSender: idUser }, { idReceiver: idUser }],
                },
            });
            let userAdded = [];
            userMessages.map((userMessage) => {
                if (userMessage.idSender !== idUser) {
                    if (!userAdded.includes(userMessage.idSender)) {
                        userAdded.push(userMessage.idSender);
                    }
                }
                else if (userMessage.idReceiver !== idUser) {
                    if (!userAdded.includes(userMessage.idReceiver)) {
                        userAdded.push(userMessage.idReceiver);
                    }
                }
            });
            userAdded = userAdded.sort((a, b) => a - b);
            let groupUserMessages = [[]];
            userAdded.map((id, index) => {
                groupUserMessages.push([]);
                userMessages.forEach((userMessage) => {
                    if (userMessage.idSender === id || userMessage.idReceiver === id) {
                        groupUserMessages[index].push(userMessage);
                    }
                });
            });
            groupUserMessages.pop();
            let output = [];
            groupUserMessages.forEach((groupUserMessage) => {
                output.push(groupUserMessage.reduce((a, b) => {
                    return a.createdAt > b.createdAt ? a : b;
                }));
            });
            return output;
        });
    }
    getMessageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.em.findByPk(id);
        });
    }
    createUserMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.em.create(message);
        });
    }
    updateUserMessage(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.em.update(message, { where: { id } });
            return yield this.getMessageById(id);
        });
    }
    deleteUserMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.em.destroy({ where: { id } });
        });
    }
}
exports.MessageDAO = MessageDAO;
//# sourceMappingURL=MessageDAO.js.map