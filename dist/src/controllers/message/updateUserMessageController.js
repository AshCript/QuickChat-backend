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
exports.updateUserMessageController = void 0;
const AuthorizationException_1 = require("../../utils/exceptions/AuthorizationException");
const ResourceNotFoundException_1 = require("../../utils/exceptions/ResourceNotFoundException");
const checkErrorInstance_1 = require("../../utils/helpers/checkErrorInstance");
const auth_1 = require("../../utils/middlewares/auth");
const UserService_1 = require("../../services/UserService");
const MessageService_1 = require("../../services/MessageService");
function updateUserMessageController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userService = UserService_1.UserService.getInstance();
            const messageService = MessageService_1.MessageService.getInstance();
            const user = yield userService.getUserByLogin((0, auth_1.getLogin)(req));
            if (!user)
                throw new AuthorizationException_1.AuthorizationException(`Access denied. Connect first`);
            const id = Number(req.params.id);
            const oldMessage = yield messageService.getMessageById(id);
            if (!oldMessage)
                throw new ResourceNotFoundException_1.ResourceNotFoundException(`Message with id ${id} doesn't exist.`);
            if (oldMessage.idSender !== user.id)
                throw new AuthorizationException_1.AuthorizationException('You must be the owner of this message if you want to edit it.');
            req.body.idSender = user.id;
            req.body.idReceiver = oldMessage.idReceiver;
            const newMessage = yield messageService.updateUserMessage(id, req.body);
            const message = `Message with id ${id} updated successfully.`;
            res.json({ message, data: { old: oldMessage, new: newMessage } });
        }
        catch (error) {
            (0, checkErrorInstance_1.checkErrorInstance)(res, error);
        }
    });
}
exports.updateUserMessageController = updateUserMessageController;
//# sourceMappingURL=updateUserMessageController.js.map