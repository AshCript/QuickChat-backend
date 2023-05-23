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
exports.getLastUserMessagesController = void 0;
const auth_1 = require("../../utils/middlewares/auth");
const AuthorizationException_1 = require("../../utils/exceptions/AuthorizationException");
const ResourceNotFoundException_1 = require("../../utils/exceptions/ResourceNotFoundException");
const checkErrorInstance_1 = require("../../utils/helpers/checkErrorInstance");
const UserService_1 = require("../../services/UserService");
const MessageService_1 = require("../../services/MessageService");
function getLastUserMessagesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userService = UserService_1.UserService.getInstance();
            const messageService = MessageService_1.MessageService.getInstance();
            const user = yield userService.getUserByLogin((0, auth_1.getLogin)(req));
            if (!user)
                throw new AuthorizationException_1.AuthorizationException('Access denied. Connect first');
            const idUser = user.id;
            const lastUserMessages = yield messageService.getLastUserMessages(idUser);
            if (lastUserMessages.length === 0)
                throw new ResourceNotFoundException_1.ResourceNotFoundException(`No messages to be shown.`);
            const message = `All last messages are loaded successfully`;
            res.json({ message, data: lastUserMessages });
        }
        catch (error) {
            (0, checkErrorInstance_1.checkErrorInstance)(res, error);
        }
    });
}
exports.getLastUserMessagesController = getLastUserMessagesController;
//# sourceMappingURL=getLastUserMessagesController.js.map