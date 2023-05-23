"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRoute = void 0;
const express_1 = require("express");
const MessageController_1 = require("../controllers/MessageController");
const auth_1 = require("../utils/middlewares/auth");
class MessageRoute {
    constructor() {
        this.getAllUserMessages = (req, res) => {
            this.messageController.getAllUserMessages(req, res);
        };
        this.getLastUserMessages = (req, res) => {
            this.messageController.getLastUserMessages(req, res);
        };
        this.getMessageById = (req, res) => {
            this.messageController.getMessageById(req, res);
        };
        this.createUserMessage = (req, res) => {
            this.messageController.createUserMessage(req, res);
        };
        this.updateUserMessage = (req, res) => {
            this.messageController.updateUserMessage(req, res);
        };
        this.deleteUserMessage = (req, res) => {
            this.messageController.deleteUserMessage(req, res);
        };
        this.path = '/message';
        this.router = (0, express_1.Router)();
        this.messageController = new MessageController_1.MessageController();
        this.init();
    }
    init() {
        this.router.get(`${this.path}s/:idUser`, auth_1.auth, this.getAllUserMessages);
        this.router.get(`${this.path}s`, auth_1.auth, this.getLastUserMessages);
        this.router.get(`${this.path}/:id`, auth_1.auth, this.getMessageById);
        this.router.post(`${this.path}`, auth_1.auth, this.createUserMessage);
        this.router.put(`${this.path}/:id`, auth_1.auth, this.updateUserMessage);
        this.router.delete(`${this.path}/:id`, auth_1.auth, this.deleteUserMessage);
    }
}
exports.MessageRoute = MessageRoute;
//# sourceMappingURL=MessageRoute.js.map