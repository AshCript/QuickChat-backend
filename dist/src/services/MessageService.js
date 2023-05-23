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
exports.MessageService = void 0;
const MessageDAO_1 = require("../dao/MessageDAO");
class MessageService {
    constructor() {
        this.messageDao = new MessageDAO_1.MessageDAO();
    }
    static getInstance() {
        var _a;
        return ((_a = this.instance) !== null && _a !== void 0 ? _a : (this.instance = new MessageService()));
    }
    getAllUserMessages(idUserOne, idUserTwo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.messageDao.getAllUserMessages(idUserOne, idUserTwo);
        });
    }
    getLastUserMessages(idUser) {
        return this.messageDao.getLastUserMessages(idUser);
    }
    getMessageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageDao.getMessageById(id);
        });
    }
    createUserMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.messageDao.createUserMessage(message);
        });
    }
    updateUserMessage(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.messageDao.updateUserMessage(id, message);
        });
    }
    deleteUserMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.messageDao.deleteUserMessage(id);
        });
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=MessageService.js.map