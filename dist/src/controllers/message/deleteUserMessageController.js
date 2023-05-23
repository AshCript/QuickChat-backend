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
exports.deleteUserMessageController = void 0;
const AuthorizationException_1 = require("../../utils/exceptions/AuthorizationException");
const ResourceNotFoundException_1 = require("../../utils/exceptions/ResourceNotFoundException");
const checkErrorInstance_1 = require("../../utils/helpers/checkErrorInstance");
const auth_1 = require("../../utils/middlewares/auth");
const MessageService_1 = require("../../services/MessageService");
const UserService_1 = require("../../services/UserService");
function deleteUserMessageController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const messageService = MessageService_1.MessageService.getInstance();
            const userService = UserService_1.UserService.getInstance();
            const user = yield userService.getUserByLogin((0, auth_1.getLogin)(req));
            if (!user)
                throw new AuthorizationException_1.AuthorizationException(`Access denied. Connect first`);
            const id = Number(req.params.id);
            const messageToDelete = yield messageService.getMessageById(id);
            if (!messageToDelete)
                throw new ResourceNotFoundException_1.ResourceNotFoundException(`Message with ID ${id} doesn't exist.`);
            if (messageToDelete.idSender !== user.id)
                throw new AuthorizationException_1.AuthorizationException('Access not authorized. You must be the owner of the message if you want to delete it.');
            yield messageService.deleteUserMessage(id);
            const message = `Message with ID ${id} deleted successfully`;
            res.json({ message, data: messageToDelete });
        }
        catch (error) {
            (0, checkErrorInstance_1.checkErrorInstance)(res, error);
        }
    });
}
exports.deleteUserMessageController = deleteUserMessageController;
//# sourceMappingURL=deleteUserMessageController.js.map