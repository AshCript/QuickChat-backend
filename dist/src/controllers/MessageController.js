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
exports.MessageController = void 0;
const createUserMessageController_1 = require("./message/createUserMessageController");
const deleteUserMessageController_1 = require("./message/deleteUserMessageController");
const getAllUserMessagesController_1 = require("./message/getAllUserMessagesController");
const getLastUserMessagesController_1 = require("./message/getLastUserMessagesController");
const getMessageByIdController_1 = require("./message/getMessageByIdController");
const updateUserMessageController_1 = require("./message/updateUserMessageController");
class MessageController {
    getAllUserMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getAllUserMessagesController_1.getAllUserMessagesController)(req, res);
        });
    }
    getLastUserMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getLastUserMessagesController_1.getLastUserMessagesController)(req, res);
        });
    }
    getMessageById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMessageByIdController_1.getMessageByIdController)(req, res);
        });
    }
    createUserMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, createUserMessageController_1.createUserMessageController)(req, res);
        });
    }
    updateUserMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updateUserMessageController_1.updateUserMessageController)(req, res);
        });
    }
    deleteUserMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deleteUserMessageController_1.deleteUserMessageController)(req, res);
        });
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=MessageController.js.map