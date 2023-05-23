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
exports.getAllUserContactController = void 0;
const ContactService_1 = require("../../services/ContactService");
const UserService_1 = require("../../services/UserService");
const AuthorizationException_1 = require("../../utils/exceptions/AuthorizationException");
const checkErrorInstance_1 = require("../../utils/helpers/checkErrorInstance");
const auth_1 = require("../../utils/middlewares/auth");
function getAllUserContactController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userService = UserService_1.UserService.getInstance();
            const contactService = ContactService_1.ContactService.getInstance();
            const user = yield userService.getUserByLogin((0, auth_1.getLogin)(req));
            if (!user)
                throw new AuthorizationException_1.AuthorizationException('Access denied. Connect first');
            const contacts = yield contactService.getAllUserContact(user.id);
            const message = `All contacts loaded successfully : ${contacts.length} ${contacts.length === 1 ? 'contact' : 'contacts'}`;
            res.json({ message, data: contacts });
        }
        catch (error) {
            (0, checkErrorInstance_1.checkErrorInstance)(res, error);
        }
    });
}
exports.getAllUserContactController = getAllUserContactController;
//# sourceMappingURL=getAllUserContactController.js.map